import type { Metadata } from "next";
import { PageShell } from "@/components/sunzee/page-shell";
import { DestinationPackagesPage } from "@/components/sunzee/destination-packages-page";
import { ZANZIBAR_PACKAGES } from "@/components/sunzee/destination-data";

export const metadata: Metadata = {
  title: "Zanzibar Packages - Sunzee Holidays",
  description:
    "Explore Zanzibar with Sunzee Holidays. Beautiful Swahili history in Stone Town, aromatic spice plantations, and pristine beaches of Nungwi & Kendwa.",
};

export default function ZanzibarTourPackagesPage() {
  return (
    <PageShell>
      <DestinationPackagesPage data={ZANZIBAR_PACKAGES} />
    </PageShell>
  );
}
