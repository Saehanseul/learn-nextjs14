import Navigation from "../components/navigation";

export const metadata = {
  title: {
    template: "%s | Next.js",
    default: "default"
  },
  description: "Generated by Next.js"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
