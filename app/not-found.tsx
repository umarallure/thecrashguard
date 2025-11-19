import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="mb-8">Sorry, we couldn't find the page you're looking for.</p>
        <Link href="/" className="text-accent font-semibold underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
