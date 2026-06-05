/**
 * Durable lead persistence for the contact / consultation form.
 *
 * Every submission is written to the `leads` table BEFORE the Microsoft Graph
 * email is attempted, then its delivery status is updated. This means a broken
 * email path never silently loses a lead — the row survives as `notify_failed`
 * and can be retried / exported from /api/admin/leads.
 */

export type NotifyStatus = 'received' | 'notified' | 'notify_failed';

export interface LeadInput {
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  training?: string | null;
  message?: string | null;
  preferredDates?: string[] | null;
  language?: string | null;
  leadType?: string | null;
  sourceForm?: string | null;
  sourcePath?: string | null;
  sourceUrl?: string | null;
  visitorId?: string | null;
  sessionId?: string | null;
}

export interface LeadRow {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  training: string | null;
  message: string | null;
  preferred_dates: string | null;
  language: string;
  lead_type: string | null;
  source_form: string | null;
  source_path: string | null;
  source_url: string | null;
  visitor_id: string | null;
  session_id: string | null;
  notify_status: NotifyStatus;
  notify_error: string | null;
  autoresponder_status: string | null;
  created_at: string;
  updated_at: string;
}

/**
 * Persist a submission with notify_status = 'received'. Returns the new lead id.
 * Throws on DB failure — the caller decides whether to proceed with the email.
 */
export async function insertLead(db: D1Database, input: LeadInput): Promise<string> {
  const id = crypto.randomUUID();
  const preferredDates = input.preferredDates?.length
    ? input.preferredDates.filter(Boolean).join(', ')
    : null;

  await db
    .prepare(
      `INSERT INTO leads (
         id, name, email, phone, company, training, message, preferred_dates,
         language, lead_type, source_form, source_path, source_url,
         visitor_id, session_id, notify_status
       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'received')`,
    )
    .bind(
      id,
      input.name,
      input.email,
      input.phone ?? null,
      input.company ?? null,
      input.training ?? null,
      input.message ?? null,
      preferredDates,
      input.language ?? 'en',
      input.leadType ?? null,
      input.sourceForm ?? null,
      input.sourcePath ?? null,
      input.sourceUrl ?? null,
      input.visitorId ?? null,
      input.sessionId ?? null,
    )
    .run();

  return id;
}

/** Update a lead's delivery outcome after the email attempt. */
export async function markLeadDelivery(
  db: D1Database,
  id: string,
  fields: {
    notifyStatus: NotifyStatus;
    notifyError?: string | null;
    autoresponderStatus?: string | null;
  },
): Promise<void> {
  await db
    .prepare(
      `UPDATE leads
         SET notify_status = ?, notify_error = ?, autoresponder_status = ?
       WHERE id = ?`,
    )
    .bind(
      fields.notifyStatus,
      fields.notifyError ?? null,
      fields.autoresponderStatus ?? null,
      id,
    )
    .run();
}
