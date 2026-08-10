import type { Metadata } from "next";
import { PageShell } from "@/components/sunzee/page-shell";
import { DestinationPackagesPage } from "@/components/sunzee/destination-packages-page";
import { MALDIVES_PACKAGES } from "@/components/sunzee/destination-data";

export const metadata: Metadata = {
  title: "Maldives Packages - Sunzee Holidays",
  description:
    "Explore Maldives with Sunzee Holidays. Beautiful overwater villas, private beach resorts, crystal-clear lagoons, and rich marine life in Baa Atoll.",
};

export default function MaldivesTourPackagesPage() {
  return (
    <PageShell>
      <DestinationPackagesPage data={MALDIVES_PACKAGES} />
    </PageShell>
  );
}
