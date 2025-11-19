import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Review | Legal Case Analysis',
  description: 'Professional legal case review and analysis services.',
};

export default function CaseReviewPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Case Review</h1>
      <p className="text-lg text-gray-600">
        Professional legal case review and analysis services coming soon.
      </p>
    </div>
  );
}
