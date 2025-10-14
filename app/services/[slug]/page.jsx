import BimDrafting from "@/components/Services/BimDrafting";
import DigitalMarketing from "@/components/Services/DigitalMarketing";
import TechnicalDevelopement from "@/components/Services/TechnicalDevelopement";

export default async function ServicePage({ params }) {
  const { slug } = await params;

  if (slug === "bim-drafting") {
    return <BimDrafting />;
  }
  if (slug === "technical-development") {
    return <TechnicalDevelopement />;
  }
  if (slug === "digital-marketing") {
    return <DigitalMarketing />;
  }

  return <div>Service not found</div>;
}
