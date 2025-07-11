// Import the AcmeLogo component from the UI folder
// import AcmeLogo from '@/app/ui/acme-logo';
// Import the ArrowRightIcon from Heroicons for use in the login button
import { ArrowRightIcon } from '@heroicons/react/24/outline';
// Import the Link component from Next.js for client-side navigation
import Link from 'next/link';

// Define the main Page component
export default function Page() {
  return (
    // The main content area with flex layout and padding
    <main className="flex min-h-screen flex-col p-6">
      {/* Header section with a blue background and rounded corners */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 p-4 md:h-52">
        {/* Logo can be added here by uncommenting the next line */}
        {/* <AcmeLogo /> */}
      </div>
      {/* Main content split into two columns on medium screens and above */}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        {/* Left column: Welcome message and login button */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          {/* Welcome message with a link to the Next.js Learn Course */}
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            {<strong>Welcome to Seva</strong>}
            {/* <strong>Welcome to Acme.</strong> This is the example for the{' '} */}
            {/* <a href="https://nextjs.org/learn/" className="text-blue-500"> */}
              {/* Next.js Learn Course */}
            {/* </a> */}
            {/* , brought to you by Vercel. */}
          </p>
          {/* Login button styled with Tailwind CSS and an arrow icon */}
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> {/* Text for the button */}
            <ArrowRightIcon className="w-5 md:w-6" /> {/* Arrow icon */}
          </Link>
        </div>
        {/* Right column: Placeholder for hero images or other content */}
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}