import '@/app/ui/global.css';

// Define the RootLayout component which wraps all pages
export default function RootLayout({
  children, // React nodes passed as children to be rendered inside the layout
}: {
  children: React.ReactNode; // Type definition for children prop
}) {
  return (
    // Set the language attribute for the HTML document
    <html lang="en">
      {/* Render the children inside the body tag */}
      <body>{children}</body>
    </html>
  );
}