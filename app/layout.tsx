import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ElXora - AI Lua Scripter for Roblox',
  description: 'Generate Luau scripts with AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f0f] text-white min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
