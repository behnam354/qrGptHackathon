'use client';

import Image from 'next/image';
import NavLink from './NavLink';

let heroImages = ['/1.png', '/6.png', '/3.png', '/4.png', '/5.png', '/2.png'];

export default function Hero() {
  return (
    <section>
      <div className="custom-screen pt-28 text-gray-600">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
            Your wish for a unique artistic QR code, granted!
          </h1>
          <p className="max-w-xl mx-auto">
            Behmore Inc makes it simple for you to generate cool looking AI QR codes
            in seconds, and print it on demand with a click of a button!
          </p>
          <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
            <NavLink
              href="/start"
              className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
            >
              Generate your QR Code
            </NavLink>
            <NavLink
              target="_blank"
              href="https://behnamshahbazi.com/qrnv"
              className="text-gray-700 border hover:bg-gray-50"
              scroll={false}
            >
              Learn more
            </NavLink>
          </div>
          <div className="grid sm:grid-cols-1 grid-cols-1 gap-4 pt-10">
            <div className="flex justify-center">
              <Image
                alt="image"
                src={'/office.png'}
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>     
        </div>
      </div>
    </section>
  );
}
