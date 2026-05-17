import { PLANNER_CERTS, ROLE_MATRIX, type RoleId } from '@/data/tools/microsoft-cert-paths';
import { FAQ } from './MicrosoftCertPathPlannerOptions';

export function stopReason(code: string, index: number, total: number, roleId: RoleId): string {
  const cert = PLANNER_CERTS[code];
  if (cert.tier === 'fundamental') {
    return 'Sets the vocabulary. Not required for the next exam, but it makes the associate material land faster.';
  }
  if (cert.tier === 'expert') {
    return 'Expert-tier seat. Assumes you already operate the platform at associate level.';
  }
  const isFirstAssoc = index === 0 || (index === 1 && total > 1);
  if (roleId === 'azure-architect' && code === 'AZ-104') {
    return 'AZ-305 is design heavy. Without AZ-104 muscle memory the architecture scenarios feel abstract.';
  }
  if (roleId === 'azure-security' && code === 'AZ-104') {
    return 'Security work assumes you can already operate the platform. AZ-104 first, AZ-500 after.';
  }
  if (roleId === 'azure-network' && code === 'AZ-104') {
    return 'Networking sits on top of identity, compute, and storage. AZ-104 covers that base.';
  }
  if (code === 'AZ-104') return 'The Azure operations baseline. Everything else builds on this.';
  if (code === 'AZ-204') return 'Cloud-native development on Azure. Required base for AZ-400.';
  if (code === 'AZ-500') return 'Azure security operations: identity, platform, data, threat protection.';
  if (code === 'AZ-700') return 'Hybrid networking, ExpressRoute, VPN, and Azure Firewall design.';
  if (code === 'MS-102') return 'Microsoft 365 tenant administration end to end.';
  if (code === 'AI-102') return 'Building AI solutions with Azure OpenAI, Cognitive Services, AI Foundry.';
  if (code === 'DP-203') return 'Data engineering on Azure. Verify Fabric replacement on Microsoft Learn.';
  if (isFirstAssoc) return 'First associate-tier stop. Plan on lab time, not just reading.';
  return 'Builds on the previous stop and rounds out the role profile.';
}

export function RoleMatrix() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold mb-2">Role to cert matrix</h2>
      <p className="text-sm text-black/60 mb-4">
        Quick lookup across all eight role tracks. Useful when comparing paths or planning a team-wide cert push.
      </p>
      <div className="overflow-x-auto rounded-2xl border border-black/[0.08] bg-white">
        <table className="w-full text-sm">
          <thead className="bg-black/[0.03] text-xs uppercase tracking-wide text-black/60">
            <tr>
              <th className="text-left px-4 py-3 font-medium">Target role</th>
              <th className="text-left px-4 py-3 font-medium">Recommended start</th>
              <th className="text-left px-4 py-3 font-medium">Core associate</th>
              <th className="text-left px-4 py-3 font-medium">Expert / specialty</th>
              <th className="text-left px-4 py-3 font-medium">Notes</th>
            </tr>
          </thead>
          <tbody>
            {ROLE_MATRIX.map((row) => (
              <tr key={row.role} className="border-t border-black/[0.06] align-top">
                <td className="px-4 py-3 font-medium text-black/85">{row.role}</td>
                <td className="px-4 py-3 font-mono text-xs text-black/75">{row.start}</td>
                <td className="px-4 py-3 font-mono text-xs text-black/75">{row.associate}</td>
                <td className="px-4 py-3 font-mono text-xs text-black/75">{row.expert}</td>
                <td className="px-4 py-3 text-black/70">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold mb-4">FAQ</h2>
      <ul className="space-y-3">
        {FAQ.map((item) => (
          <li key={item.q} className="rounded-xl border border-black/[0.08] bg-white p-5">
            <h3 className="text-base font-semibold mb-2">{item.q}</h3>
            <p className="text-sm text-black/75 leading-relaxed">{item.a}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
