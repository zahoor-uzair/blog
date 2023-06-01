import "./globals.css";
import { Navbar,Footer } from "@/components";

export const metadata = {
  title: "Sherlock thinker bloger",
  description: "Developed by Avengers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
