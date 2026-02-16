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
        {/* Header */}
        <header
  style={{
    background: "#216c2a",
    borderBottom: "1px solid rgba(0,0,0,0.08)",
  }}
>
          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              paddingTop: 16,
              paddingBottom: 16,
            }}
          >
            <Link
  href="/"
  style={{ display: "flex", alignItems: "center", gap: 10 }}
>
  <Image
    src="/sf-icon.png"
    alt="SF"
    width={36}
    height={36}
    priority
  />
  <span
    style={{
      fontSize: "22px",
      fontWeight: 700,
      color: "#ffffff",
      letterSpacing: "0.5px",
    }}
  >
    SportsFormulator
  </span>
</Link>
            <nav style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <Link
                href="/"
                style={{
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: "#ffffff",
                  fontWeight: 600,
                  color: "#ffffff",
                }}
              >
                Today
              </Link>

              <Link
                href="/predictions"
                style={{
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: "#ffffff",
                  fontWeight: 600,
                  color: "#216c2a",
                }}
              >
                Predictions
              </Link>
            </nav>
          </div>
        </header>

        {/* Page content */}
        <main className="container">{children}</main>

        {/* Footer */}
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