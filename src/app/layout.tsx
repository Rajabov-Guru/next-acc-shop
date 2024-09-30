import type { Metadata } from "next";
import "./globals.css";
import { FloatingBasket } from "@/components/FloatingBasket";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoreWrapper } from "@/lib/stores/provider";
import { SideBar } from "@/widgets/SideBar";


export const metadata: Metadata = {
  title: "Fresh Accounts - Все товары",
  description: "Все товары",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <body
        className={`antialiased w-full h-full`}
      >
        <StoreWrapper>
          <div className="max-w-[1200px] my-0 mx-auto py-[20px] xs:py-[60px]">
            <div className="flex flex-col gap-[32px] mx-[10px] sm:mx-[32px]">
              <Header/>
              <div className="flex gap-[32px] flex-col lg:flex-row">
                <SideBar/>
                <div className="flex flex-col gap-[32px] w-full h-full">
                  <main className="bg-app_section_background sm:px-[14px] rounded-[6px] w-full" id="main-content">
                    {children}
                  </main>
                  <Footer/>
                </div>
              </div>
            </div>
            <div className="sticky z-[9999999] bottom-[60px] left-[80%] sm:left-[90%] w-min h-[60px]">
              <FloatingBasket/>
            </div>
          </div>
        </StoreWrapper>
      </body>
    </html>
  );
}
