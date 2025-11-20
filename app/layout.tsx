import './globals.css';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
} from '@/lib/schema';

export const metadata = {
  title: 'Injured in an Accident? Speak with a Top Lawyer | Accident Payments',
  description:
    'Expert legal assistance for personal injury, car accidents, and workers compensation. Get a free case review from experienced attorneys.',
  keywords: [
    'personal injury lawyer',
    'car accident attorney',
    'workers compensation',
    'legal consultation',
    'injury law',
  ],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Injured in an Accident? Speak with a Top Lawyer | Accident Payments',
    description:
      'Expert legal assistance for personal injury, car accidents, and workers compensation.',
    type: 'website',
    url: 'https://www.accidentpayments.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Injured in an Accident? Speak with a Top Lawyer | Accident Payments',
    description:
      'Expert legal assistance for personal injury, car accidents, and workers compensation.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const baseUrl = 'https://www.accidentpayments.com';
  const organizationSchema = generateOrganizationSchema(baseUrl);
  const localBusinessSchema = generateLocalBusinessSchema(baseUrl);

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>
        {/* Google Tag example — set NEXT_PUBLIC_GA_ID in env */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-inline" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`}
        </Script>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
