import type { Metadata } from "next";
import { PageShell } from "@/components/sunzee/page-shell";
import { DestinationPackagesPage } from "@/components/sunzee/destination-packages-page";
import { KENYA_PACKAGES } from "@/components/sunzee/destination-data";

export const metadata: Metadata = {
  title: "Kenya Tour Packages - Sunzee Holidays",
  description:
    "Discover Kenya tour packages from Sunzee Holidays. Maasai Mara great migration, Big Five safari, Amboseli elephants, Samburu Special Five and luxury tented camps.",
};

export default function KenyaTourPackagesPage() {
  return (
    <PageShell>
      <DestinationPackagesPage data={KENYA_PACKAGES} />
    </PageShell>
  );
}
