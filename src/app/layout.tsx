import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "SportsFormulator",
  description: "Data-driven sports predictions.",
  icons: {
    icon: "/sf-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "#216c2a" }}>
          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            <Link href="/" style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/sf-logo.png"
                alt="SportsFormulator"
                width={500}
                height={120}
                style={{ height: "56px", width: "auto" }}
                priority
              />
            </Link>

            <nav style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <Link
                href="/"
                style={{
                  color: "#ffffff",
                  fontWeight: 700,
                  opacity: 0.95,
                }}
              >
                Today
              </Link>
              <Link
                href="/predictions"
                style={{
                  color: "#ffffff",
                  fontWeight: 700,
                  opacity: 0.95,
                }}
              >
                Predictions
              </Link>
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer
          style={{
            marginTop: 36,
            padding: "18px 0",
            borderTop: "1px solid rgba(0,0,0,0.08)",
            color: "rgba(0,0,0,0.55)",
            background: "#ffffff",
          }}
        >
          <div className="container" style={{ paddingTop: 0, paddingBottom: 0 }}>
            © {new Date().getFullYear()} SportsFormulator
          </div>
        </footer>
      </body>
    </html>
  );
}