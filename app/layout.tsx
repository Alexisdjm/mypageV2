import { Montserrat, Plus_Jakarta_Sans, Geist } from "next/font/google";
import PersonJsonLd from "@/src/components/seo/PersonJsonLd";
import { buildSiteMetadata } from "@/src/lib/site-metadata";
import { cookies, headers } from "next/headers";
import { Header, SocialSidebar } from "@/src/components";
import { ScrollToTop } from "@/src/components/UXUI";
import HashScrollOnNavigation from "@/src/components/navigation/HashScrollOnNavigation";
import { detectLocaleFromHeaders } from "@/src/i18n/detectLocale";
import { LocaleProvider } from "@/src/i18n/LocaleProvider";
import { LOCALE_COOKIE, isLocale } from "@/src/i18n/locales";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata = buildSiteMetadata();

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(LOCALE_COOKIE)?.value;
  const headerStore = await headers();

  const initialLocale =
    cookieLocale && isLocale(cookieLocale)
      ? cookieLocale
      : detectLocaleFromHeaders((name) => headerStore.get(name));

  return (
    <html
      lang={initialLocale}
      className={cn("h-full", "antialiased", montserrat.variable, plusJakarta.variable, "font-sans", geist.variable)}
    >
      <body className="relative flex min-h-full flex-col">
        <PersonJsonLd />
        <LocaleProvider initialLocale={initialLocale}>
          <HashScrollOnNavigation />
          <Header />
          {children}
          <SocialSidebar />
          <ScrollToTop />
        </LocaleProvider>
      </body>
    </html>
  );
}
