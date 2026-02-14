'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Footer from "@/app/components/footer";

export default function Page() {

  return (
      <>
      <div id="73836a3e-c678-4e62-814d-4d4578698ffd" className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <h1 id="7cc4482a-ffea-496b-b5d7-3020606a67f7" className="text-5xl font-bold text-gray-900 mb-4">
          Build Something Amazing right?

        </h1>
        <p id="40e4bc79-7bc3-41ec-b64d-fbd2ffca5286" className="text-xl text-gray-600 max-w-2xl mb-8">
          Create stunning websites with our drag-and-drop builder. No coding required.

        </p>
        <div id="f3397e51-6d27-4ed1-bcef-5e5ccd31c5dd" className="flex gap-4">
          <Button id="e8ec2db0-bb47-402a-8711-c52da0c6f0d5" size="lg" variant="default">
            Get Started gooo

          </Button>
          <Button id="57167fa5-6fef-4299-9b21-55dbed6c31d6" size="lg" variant="outline">
            Learn More .....

          </Button>
        </div>
      </div>
      <Footer />
      </>
  );
}
