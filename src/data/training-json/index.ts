import { TrainingJSON } from './types';

// Import all training JSON files
import azureAdministratorData from './azure-administrator.json';
import azureAIFundamentalsData from './azure-ai-fundamentals.json';
import azureDeveloperData from './azure-developer.json';
import azureAIDeveloperBootcampData from './azure-ai-developer-bootcamp.json';
import azureDevOpsEngineerData from './azure-devops-engineer.json';
import azureFundamentalsData from './azure-fundamentals.json';
import azureIoTDeveloperData from './azure-iot-developer.json';
import azureNetworkEngineerData from './azure-network-engineer.json';
import azureVirtualDesktopData from './azure-virtual-desktop.json';
import microsoft365FundamentalsData from './microsoft-365-fundamentals.json';
import powerPlatformAutomation from './power-platform-automation.json';
import securityComplianceIdentityFundamentals from './security-compliance-identity-fundamentals.json';
import teamsAdvancedAdministration from './teams-advanced-administration.json';
import microsoft365CopilotMastery from './microsoft-365-copilot-mastery.json';
import azureSecurityFundamentals from './azure-security-fundamentals.json';
import azureStackHub from './azure-stack-hub.json';
import azureSupportEngineer from './azure-support-engineer.json';
import microsoft365IdentityAccessAdministrator from './microsoft-365-identity-access-administrator.json';
import microsoft365SecurityAdministrator from './microsoft-365-security-administrator.json';
import powerPlatformFundamentalsData from './power-platform-fundamentals.json';
import azureSolutionsArchitectData from './azure-solutions-architect.json';
import azureSecurityEngineerData from './azure-security-engineer.json';
import windowsServerHybridInfrastructureData from './windows-server-hybrid-infrastructure.json';
import windowsServerHybridAdministrator from './windows-server-hybrid-administrator.json';
import azureAIEngineerData from './azure-ai-engineer.json';
import securityOperationsAnalystData from './security-operations-analyst.json';
import cybersecurityArchitectData from './cybersecurity-architect.json';
import copilotAgentAdminFundamentalsData from './copilot-agent-administration-fundamentals.json';
import aiBusinessProfessionalData from './ai-business-professional.json';
import aiTransformationLeaderData from './ai-transformation-leader.json';
import agenticAiSolutionsArchitectData from './agentic-ai-solutions-architect.json';
import azureAiAppAgentDeveloperData from './azure-ai-app-agent-developer.json';
import azureAiCloudDeveloperData from './azure-ai-cloud-developer.json';
import mlopsEngineerData from './mlops-engineer.json';
import cloudAiSecurityEngineerData from './cloud-ai-security-engineer.json';
import windowsServerHybridAdminConsolidatedData from './windows-server-hybrid-administrator-consolidated.json';
import microsoft365AdministratorData from './microsoft-365-administrator.json';

import azureAdministratorNl from './azure-administrator-nl.json';
import azureAIDeveloperBootcampNl from './azure-ai-developer-bootcamp-nl.json';
import azureAIFundamentalsNl from './azure-ai-fundamentals-nl.json';
import azureDeveloperNl from './azure-developer-nl.json';
import azureDevOpsEngineerNl from './azure-devops-engineer-nl.json';
import azureFundamentalsNl from './azure-fundamentals-nl.json';
import azureIoTDeveloperNl from './azure-iot-developer-nl.json';
import azureNetworkEngineerNl from './azure-network-engineer-nl.json';
import azureSecurityEngineerNl from './azure-security-engineer-nl.json';
import azureSolutionsArchitectNl from './azure-solutions-architect-nl.json';
import azureStackHubNl from './azure-stack-hub-nl.json';
import azureSupportEngineerNl from './azure-support-engineer-nl.json';
import azureVirtualDesktopNl from './azure-virtual-desktop-nl.json';
import azureAIEngineerNl from './azure-ai-engineer-nl.json';
import copilotAgentAdminFundamentalsNl from './copilot-agent-administration-fundamentals-nl.json';
import cybersecurityArchitectNl from './cybersecurity-architect-nl.json';
import microsoft365AdministratorNl from './microsoft-365-administrator-nl.json';
import microsoft365CopilotMasteryNl from './microsoft-365-copilot-mastery-nl.json';
import microsoft365IdentityAccessAdministratorNl from './microsoft-365-identity-access-administrator-nl.json';
import microsoft365SecurityAdministratorNl from './microsoft-365-security-administrator-nl.json';
import powerPlatformAutomationNl from './power-platform-automation-nl.json';
import securityComplianceIdentityFundamentalsNl from './security-compliance-identity-fundamentals-nl.json';
import securityOperationsAnalystNl from './security-operations-analyst-nl.json';
import teamsAdvancedAdministrationNl from './teams-advanced-administration-nl.json';
import windowsServerHybridAdministratorNl from './windows-server-hybrid-administrator-nl.json';
import windowsServerHybridInfrastructureNl from './windows-server-hybrid-infrastructure-nl.json';

export type CatalogLanguage = 'en' | 'nl';

export const CANONICAL_INSTRUCTOR = {
  id: 'yair-knijn',
  name: 'Yaïr Knijn',
  title: 'MCT, Azure architect, Spot Cloud B.V.',
  titleNl: 'MCT, Azure-architect, Spot Cloud B.V.',
  bio: 'Microsoft Certified Trainer, Azure architect, and active consultant at Spot Cloud B.V.',
  bioNl: 'Microsoft Certified Trainer, Azure-architect en actief consultant bij Spot Cloud B.V.',
} as const;

// Training data registry
const trainingRegistry: Record<string, TrainingJSON> = {
  'azure-administrator': azureAdministratorData as TrainingJSON,
  'azure-ai-developer-bootcamp': azureAIDeveloperBootcampData as TrainingJSON,
  'azure-ai-fundamentals': azureAIFundamentalsData as TrainingJSON,
  'azure-developer': azureDeveloperData as TrainingJSON,
  'azure-devops-engineer': azureDevOpsEngineerData as TrainingJSON,
  'azure-fundamentals': azureFundamentalsData as TrainingJSON,
  'azure-iot-developer': azureIoTDeveloperData as TrainingJSON,
  'azure-network-engineer': azureNetworkEngineerData as TrainingJSON,
  'azure-security-engineer': azureSecurityEngineerData as TrainingJSON,
  'azure-solutions-architect': azureSolutionsArchitectData as TrainingJSON,
  'azure-virtual-desktop': azureVirtualDesktopData as TrainingJSON,
  'microsoft-365-fundamentals': microsoft365FundamentalsData as TrainingJSON,
  'power-platform-automation': powerPlatformAutomation as TrainingJSON,
  'security-compliance-identity-fundamentals': securityComplianceIdentityFundamentals as TrainingJSON,
  'teams-advanced-administration': teamsAdvancedAdministration as TrainingJSON,
  'microsoft-365-copilot-mastery': microsoft365CopilotMastery as TrainingJSON,
  'azure-security-fundamentals': azureSecurityFundamentals as TrainingJSON,
  'azure-stack-hub': azureStackHub as TrainingJSON,
  'azure-support-engineer': azureSupportEngineer as TrainingJSON,
  'microsoft-365-identity-access-administrator': microsoft365IdentityAccessAdministrator as TrainingJSON,
  'microsoft-365-security-administrator': microsoft365SecurityAdministrator as TrainingJSON,
  'power-platform-fundamentals': powerPlatformFundamentalsData as TrainingJSON,
  'windows-server-hybrid-infrastructure': windowsServerHybridInfrastructureData as TrainingJSON,
  'windows-server-hybrid-administrator': windowsServerHybridAdministrator as TrainingJSON,
  'azure-ai-engineer': azureAIEngineerData as TrainingJSON,
  'security-operations-analyst': securityOperationsAnalystData as TrainingJSON,
  'cybersecurity-architect': cybersecurityArchitectData as TrainingJSON,
  'copilot-agent-administration-fundamentals': copilotAgentAdminFundamentalsData as TrainingJSON,
  'ai-business-professional': aiBusinessProfessionalData as TrainingJSON,
  'ai-transformation-leader': aiTransformationLeaderData as TrainingJSON,
  'agentic-ai-solutions-architect': agenticAiSolutionsArchitectData as TrainingJSON,
  'azure-ai-app-agent-developer': azureAiAppAgentDeveloperData as TrainingJSON,
  'azure-ai-cloud-developer': azureAiCloudDeveloperData as TrainingJSON,
  'mlops-engineer': mlopsEngineerData as TrainingJSON,
  'cloud-ai-security-engineer': cloudAiSecurityEngineerData as TrainingJSON,
  'windows-server-hybrid-administrator-consolidated': windowsServerHybridAdminConsolidatedData as TrainingJSON,
  'microsoft-365-administrator': microsoft365AdministratorData as TrainingJSON,
};

const trainingRegistryNl: Record<string, TrainingJSON> = {
  'azure-administrator': azureAdministratorNl as TrainingJSON,
  'azure-ai-developer-bootcamp': azureAIDeveloperBootcampNl as TrainingJSON,
  'azure-ai-fundamentals': azureAIFundamentalsNl as TrainingJSON,
  'azure-developer': azureDeveloperNl as TrainingJSON,
  'azure-devops-engineer': azureDevOpsEngineerNl as TrainingJSON,
  'azure-fundamentals': azureFundamentalsNl as TrainingJSON,
  'azure-iot-developer': azureIoTDeveloperNl as TrainingJSON,
  'azure-network-engineer': azureNetworkEngineerNl as TrainingJSON,
  'azure-security-engineer': azureSecurityEngineerNl as TrainingJSON,
  'azure-solutions-architect': azureSolutionsArchitectNl as TrainingJSON,
  'azure-stack-hub': azureStackHubNl as TrainingJSON,
  'azure-support-engineer': azureSupportEngineerNl as TrainingJSON,
  'azure-virtual-desktop': azureVirtualDesktopNl as TrainingJSON,
  'azure-ai-engineer': azureAIEngineerNl as TrainingJSON,
  'copilot-agent-administration-fundamentals': copilotAgentAdminFundamentalsNl as TrainingJSON,
  'cybersecurity-architect': cybersecurityArchitectNl as TrainingJSON,
  'microsoft-365-administrator': microsoft365AdministratorNl as TrainingJSON,
  'microsoft-365-copilot-mastery': microsoft365CopilotMasteryNl as TrainingJSON,
  'microsoft-365-identity-access-administrator': microsoft365IdentityAccessAdministratorNl as TrainingJSON,
  'microsoft-365-security-administrator': microsoft365SecurityAdministratorNl as TrainingJSON,
  'power-platform-automation': powerPlatformAutomationNl as TrainingJSON,
  'security-compliance-identity-fundamentals': securityComplianceIdentityFundamentalsNl as TrainingJSON,
  'security-operations-analyst': securityOperationsAnalystNl as TrainingJSON,
  'teams-advanced-administration': teamsAdvancedAdministrationNl as TrainingJSON,
  'windows-server-hybrid-administrator': windowsServerHybridAdministratorNl as TrainingJSON,
  'windows-server-hybrid-infrastructure': windowsServerHybridInfrastructureNl as TrainingJSON,
};

export const CATALOG_TRACK_COUNT = Object.keys(trainingRegistry).length;

function withCanonicalInstructor(training: TrainingJSON, lang: CatalogLanguage): TrainingJSON {
  return {
    ...training,
    instructor: {
      ...training.instructor,
      id: CANONICAL_INSTRUCTOR.id,
      name: CANONICAL_INSTRUCTOR.name,
      title: lang === 'nl' ? CANONICAL_INSTRUCTOR.titleNl : CANONICAL_INSTRUCTOR.title,
      bio: lang === 'nl' ? CANONICAL_INSTRUCTOR.bioNl : CANONICAL_INSTRUCTOR.bio,
    },
  };
}

export function getTrainingBySlug(slug: string, lang: CatalogLanguage = 'en'): TrainingJSON | null {
  const english = trainingRegistry[slug];
  if (!english) return null;
  const localized = lang === 'nl' ? trainingRegistryNl[slug] || english : english;
  return withCanonicalInstructor(localized, lang);
}

export function getAllTrainings(lang: CatalogLanguage = 'en'): TrainingJSON[] {
  return Object.keys(trainingRegistry).map((slug) => getTrainingBySlug(slug, lang)!);
}

