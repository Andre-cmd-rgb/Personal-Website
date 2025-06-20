import "./globals.css";
// 1. Import the new TunnelBackground component
import TunnelBackground from "@/components/TunnelBackground";

export const metadata = {
  title: "andre-cmd-rgb",
  description: "A personal space in the digital universe.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* 2. Use the new component */}
        <TunnelBackground />
        <main className="content-wrapper">
          <div className="content">{children}</div>
        </main>
      </body>
    </html>
  );
}