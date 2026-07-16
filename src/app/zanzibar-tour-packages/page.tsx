import type { Metadata } from "next";
import { PageShell } from "@/components/sunzee/page-shell";
import { DestinationPackagesPage } from "@/components/sunzee/destination-packages-page";
import { ZANZIBAR_PACKAGES } from "@/components/sunzee/destination-data";

export const metadata: Metadata = {
  title: "Zanzibar Tour Packages - Sunzee Holidays",
  description:
    "Discover Zanzibar tour packages from Sunzee Holidays. Stone Town heritage, Nungwi beaches, spice plantations, Mnemba Atoll diving and Pemba Island expeditions.",
};

export default function ZanzibarTourPackagesPage() {
  return (
    <PageShell>
      <DestinationPackagesPage data={ZANZIBAR_PACKAGES} />
    </PageShell>
  );
}
