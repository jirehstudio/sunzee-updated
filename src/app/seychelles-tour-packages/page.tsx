import type { Metadata } from "next";
import { PageShell } from "@/components/sunzee/page-shell";
import { DestinationPackagesPage } from "@/components/sunzee/destination-packages-page";
import { SEYCHELLES_PACKAGES } from "@/components/sunzee/destination-data";

export const metadata: Metadata = {
  title: "Seychelles Packages - Sunzee Holidays",
  description:
    "Explore Seychelles with Sunzee Holidays. Discover Anse Source d'Argent, Vallée de Mai, Coco de Mer, and pristine luxury island resorts.",
};

export default function SeychellesTourPackagesPage() {
  return (
    <PageShell>
      <DestinationPackagesPage data={SEYCHELLES_PACKAGES} />
    </PageShell>
  );
}
