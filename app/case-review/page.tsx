"use client";

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const formIds = {
  'auto-accident': '16Jv2jDB3Tus',
  'malpractice': '3fGY74GoG2us',
  'personal-injury': 'wEBpcFpTixus',
  'workers-comp': 'tMUmUCzECTus',
  'slip-and-fall': 'oRFDU2hKRHus',
  'ssdi': 'aKz95Tnb9Gus',
};

export default function CaseReviewPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'auto-accident';
  const formId = formIds[type as keyof typeof formIds] || formIds['auto-accident'];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full h-screen">
      <div
        data-fillout-id={formId}
        data-fillout-embed-type="fullscreen"
        style={{ width: '100%', height: '100%' }}
        data-fillout-inherit-parameters
      ></div>
    </div>
  );
}
