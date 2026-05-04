import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stellancer",
  description: "Stellar-based freelancer payout platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-950 text-gray-100 antialiased">
        {/* TODO: Wrap with WalletProvider and AuthProvider */}
        {children}
      </body>
    </html>
  );
}
