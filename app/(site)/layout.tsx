import { Header, SocialSidebar } from "@/src/components";
import { ScrollToTop } from "@/src/components/UXUI";
import HashScrollOnNavigation from "@/src/components/navigation/HashScrollOnNavigation";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HashScrollOnNavigation />
      <Header />
      {children}
      <SocialSidebar />
      <ScrollToTop />
    </>
  );
}
