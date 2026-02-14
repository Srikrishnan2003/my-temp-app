'use client';

import React from 'react';
import { LinkComponent as Link } from '@/components/ui/link';
import { Separator } from '@/components/ui/separator';

export default function Footer() {

  return (
      <>
      <div id="d5a9310d-1809-4d51-9fd0-6a51778a194c">
        Footer Component

      </div>
      <div id="d4dd00da-6b7a-427d-8de1-f7dc6d6fc9f2" className="py-12 px-8 bg-gray-900 text-white">
        <div id="f31c5086-7e44-4d1e-812a-053d152a9dfc" className="max-w-6xl mx-auto">
          <div id="e83f8d01-5906-40a6-bbe0-7c3b8e84a82c" className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div id="7d611b34-77c2-43b4-9ae7-04c380fc9b1b">
              <h2 id="5bb74165-b07c-4e8e-a4a4-59b8a06cffe2" className="text-xl font-bold mb-4">
                Webforge

              </h2>
              <p id="826a8c5a-e389-4423-af89-89ebb68dfbc6" className="text-gray-400">
                Build beautiful websites without code.

              </p>
            </div>
            <div id="24ab55ed-1a45-4c35-b330-2b6e39a3f047">
              <h2 id="31f8eae7-df3a-44da-8ef8-393d2d60c02b" className="font-semibold mb-4">
                Product

              </h2>
              <div id="9519372d-6384-45d6-ab43-64dbc9440140" className="space-y-2">
                <Link id="f10a6885-3d21-433f-a6c3-e9ed853b0ae1" className="block text-gray-400 hover:text-white" href="#">
                  Features

                </Link>
                <Link id="d6dddb20-7353-4fae-aa74-a4ede5d229be" className="block text-gray-400 hover:text-white" href="#">
                  Pricing

                </Link>
                <Link id="3c2e7034-ffcd-4e16-9bd5-7bd434654876" className="block text-gray-400 hover:text-white" href="#">
                  Templates

                </Link>
              </div>
            </div>
            <div id="8614c18a-d2c7-4433-a27e-0ca3a9561ee3">
              <h2 id="3118044e-5694-43a1-8720-fd7a65d4e2c6" className="font-semibold mb-4">
                Company

              </h2>
              <div id="083c102e-0383-4823-b1f4-dee974e8e574" className="space-y-2">
                <Link id="75ae9bb2-2fe7-4f8b-9cae-43e92e607f62" className="block text-gray-400 hover:text-white" href="#">
                  About

                </Link>
                <Link id="5c88e410-2c8f-49b2-9264-bfe1da10616c" className="block text-gray-400 hover:text-white" href="#">
                  Blog

                </Link>
                <Link id="cd91304a-deb5-4c48-a6fa-9dafbdadaced" className="block text-gray-400 hover:text-white" href="#">
                  Careers

                </Link>
              </div>
            </div>
            <div id="ee8121c1-7069-4a8a-a3eb-9aae88d446ed">
              <h2 id="3bd706c1-0654-44cd-9f6b-84effd7dcbbc" className="font-semibold mb-4">
                Legal

              </h2>
              <div id="4c62ba86-224a-4626-a58d-41e2c13895cf" className="space-y-2">
                <Link id="3b558d41-cebb-4770-91b3-e69165479ff3" className="block text-gray-400 hover:text-white" href="#">
                  Privacy

                </Link>
                <Link id="fa52e2a9-f88c-469d-8d9e-d571ad830d13" className="block text-gray-400 hover:text-white" href="#">
                  Terms

                </Link>
              </div>
            </div>
          </div>
          <Separator id="21bae515-6d4a-4d4b-84ac-7553ca868ce9" className="bg-gray-700 my-8" />
          <p id="0d351a13-097d-4444-9008-f1f262e31d4a" className="text-gray-400 text-center text-sm">
            © 2024 Webforge. All rights reserved.

          </p>
        </div>
      </div>
      </>
  );
}
