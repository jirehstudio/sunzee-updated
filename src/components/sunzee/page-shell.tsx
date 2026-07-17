"use client";

import { Header } from "./header";
import { Footer } from "./footer";
import { FloatingActions } from "./floating-actions";
import { ScrollProgress } from "./scroll-progress";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ScrollProgress />
      <Header />
      {children}
      <Footer />
      <FloatingActions />
      {/* Spacer so mobile bottom nav doesn't cover footer content */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </div>
  );
}
