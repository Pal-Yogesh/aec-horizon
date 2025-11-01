import BimModelling from "@/components/Services/SubServices/BimModelling";
import RevitFamily from "@/components/Services/SubServices/RevitFamily";
import BimTemplate from "@/components/Services/SubServices/BimTemplate";
import BimAutomation from "@/components/Services/SubServices/BimAutomation";
import BimCoordination from "@/components/Services/SubServices/BimCoordination";
import MepfCoordination from "@/components/Services/SubServices/MepfCoordination";
import ScanToBim from "@/components/Services/SubServices/ScanToBim";
import ConstructionDoc from "@/components/Services/SubServices/ConstructionDoc";
import PdfCadToBim from "@/components/Services/SubServices/PdfCadToBim";
import Structural3D from "@/components/Services/SubServices/Structural3D";

// Technical Development Sub-Services
import GoToMarket from "@/components/Services/SubServices/TechnicalDevelopment/GoToMarket";
import LeadGeneration from "@/components/Services/SubServices/TechnicalDevelopment/LeadGeneration";
import ProposalRfp from "@/components/Services/SubServices/TechnicalDevelopment/ProposalRfp";
import ProposalDevelopment from "@/components/Services/SubServices/TechnicalDevelopment/ProposalDevelopment";
import MarketResearch from "@/components/Services/SubServices/TechnicalDevelopment/MarketResearch";
import StrategicPartnerships from "@/components/Services/SubServices/TechnicalDevelopment/StrategicPartnerships";
import SalesEnablement from "@/components/Services/SubServices/TechnicalDevelopment/SalesEnablement";
import BrandingPositioning from "@/components/Services/SubServices/TechnicalDevelopment/BrandingPositioning";
import ClientEngagement from "@/components/Services/SubServices/TechnicalDevelopment/ClientEngagement";
import DigitalTransformation from "@/components/Services/SubServices/TechnicalDevelopment/DigitalTransformation";

// Digital Marketing Sub-Services
import MarketingPresentation from "@/components/Services/SubServices/MarketingPresentation";
import ProjectPlanning from "@/components/Services/SubServices/ProjectPlanning";
import SocialMediaMarketing from "@/components/Services/SubServices/SocialMediaMarketing";
import BimContent from "@/components/Services/SubServices/BimContent";
import EmailCampaigns from "@/components/Services/SubServices/EmailCampaigns";
import SeoConstruction from "@/components/Services/SubServices/DigitalMarketing/SeoConstruction";

export default async function SubServicePage({ params }) {
  const { slug, subSlug } = await params;

  // BIM & Drafting Sub-Services
  if (slug === "bim-drafting") {
    if (subSlug === "bim-modelling-drafting-lod-100-500") {
      return <BimModelling />;
    }
    if (subSlug === "revit-family-creation") {
      return <RevitFamily />;
    }
    if (subSlug === "bim-template-content-creation") {
      return <BimTemplate />;
    }
    if (subSlug === "bim-automation") {
      return <BimAutomation />;
    }
    if (subSlug === "bim-coordination-clash-detection") {
      return <BimCoordination />;
    }
    if (subSlug === "mepf-coordination") {
      return <MepfCoordination />;
    }
    if (subSlug === "scan-to-bim") {
      return <ScanToBim />;
    }
    if (subSlug === "construction-documention-set-as-built-drawings") {
      return <ConstructionDoc />;
    }
    if (subSlug === "pdf-cad-to-bim") {
      return <PdfCadToBim />;
    }
    if (subSlug === "structural-3d-modeling") {
      return <Structural3D />;
    }
  }

  // Technical Development Sub-Services
  if (slug === "technical-development") {
    if (subSlug === "go-to-market-strategy-for-aec-services") {
      return <GoToMarket />;
    }
    if (subSlug === "strategic-partnerships") {
      return <StrategicPartnerships />;
    }
    if (subSlug === "proposal-and-rfp-support") {
      return <ProposalRfp />;
    }
    if (subSlug === "sales-enablement-tools") {
      return <SalesEnablement />;
    }
    if (subSlug === "lead-generation-crm-setup") {
      return <LeadGeneration />;
    }
    if (subSlug === "branding-positioning") {
      return <BrandingPositioning />;
    }
    if (subSlug === "proposal-development-estimation") {
      return <ProposalDevelopment />;
    }
    if (subSlug === "client-engagement-strategies") {
      return <ClientEngagement />;
    }
    if (subSlug === "market-research-analysis") {
      return <MarketResearch />;
    }
    if (subSlug === "digital-transformation-consulting") {
      return <DigitalTransformation />;
    }
  }

  // Digital Marketing Sub-Services
  if (slug === "digital-marketing") {
    if (subSlug === "seo-for-construction-bim") {
      return <SeoConstruction />;
    }
    if (subSlug === "marketing-presentation") {
      return <MarketingPresentation />;
    }
    if (subSlug === "project-planning-scheduling") {
      return <ProjectPlanning />;
    }
    if (subSlug === "social-media-marketing") {
      return <SocialMediaMarketing />;
    }
    if (subSlug === "bim-content-creation") {
      return <BimContent />;
    }
    if (subSlug === "email-campaigns-pitch-decks") {
      return <EmailCampaigns />;
    }
  }

  return <div>Sub-service not found</div>;
}
