import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
