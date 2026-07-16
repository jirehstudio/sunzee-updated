import type { Metadata } from "next";
import { PageShell } from "@/components/sunzee/page-shell";
import { DestinationPackagesPage } from "@/components/sunzee/destination-packages-page";
import { MAURITIUS_PACKAGES } from "@/components/sunzee/destination-data";

export const metadata: Metadata = {
  title: "Mauritius Tour Packages - Sunzee Holidays",
  description:
    "Discover Mauritius tour packages from Sunzee Holidays. Coral lagoons, catamaran cruises, Chamarel seven-coloured earth, Port Louis heritage and beachfront luxury.",
};

export default function MauritiusTourPackagesPage() {
  return (
    <PageShell>
      <DestinationPackagesPage data={MAURITIUS_PACKAGES} />
    </PageShell>
  );
}
