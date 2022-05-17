import Image from 'next/image';
import Link from 'next/link';
import { ExternalLinkIcon } from '@heroicons/react/solid';

export default function HomeCTA() {
  return (
    <div className="bg-rose-50">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-light tracking-tight text-zinc-800 sm:text-4xl">
          <span className="block">
            Ready to
            <span className="font-extrabold">
              {' '}
              define<span className="font-light"> your lashes?</span>
            </span>
          </span>
          <span className="block font-bold text-rose-400">
            Book an appointment{' '}
            <span className="italic font-bold underline">today</span>.
          </span>
        </h2>
        <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-full shadow">
            <Link href="/pricing" passHref>
              <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white transition duration-300 ease-in-out border border-transparent rounded-full bg-rose-400 hover:bg-rose-200 hover:text-zinc-800">
                Book lash extensions
              </a>
            </Link>
          </div>
          <div className="inline-flex ml-3 rounded-full shadow">
            <Link href="/pricing/#lifts" passHref>
              <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium transition duration-300 ease-in-out bg-white border border-transparent rounded-full hover:text-rose-200 text-rose-400 hover:bg-zinc-800">
                Book lash lift
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
