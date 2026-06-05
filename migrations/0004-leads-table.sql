-- migrations/0004-leads-table.sql
-- Durable capture of contact-form / consultation submissions.
-- The form previously only emailed leads via Microsoft Graph; when that auth
-- broke (2026-04..06), submissions were lost silently. This table persists every
-- submission BEFORE the email is attempted, with a delivery status, so a future
-- email outage degrades to "lead saved, notification failed" (visible + retryable)
-- instead of a silent loss.

CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  training TEXT,
  message TEXT,
  preferred_dates TEXT,
  language TEXT NOT NULL DEFAULT 'en',
  lead_type TEXT,
  source_form TEXT,
  source_path TEXT,
  source_url TEXT,
  visitor_id TEXT,
  session_id TEXT,
  -- received -> the row was saved; notified -> internal email sent;
  -- notify_failed -> save succeeded but the email could not be sent (retryable).
  notify_status TEXT NOT NULL DEFAULT 'received',
  notify_error TEXT,
  autoresponder_status TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_notify_status ON leads(notify_status);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

CREATE TRIGGER IF NOT EXISTS trg_leads_updated_at
  AFTER UPDATE ON leads
  BEGIN UPDATE leads SET updated_at = datetime('now') WHERE id = NEW.id; END;
