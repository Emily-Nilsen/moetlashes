import Image from 'next/image';
import Link from 'next/link';
import { PhoneOutgoingIcon } from '@heroicons/react/solid';

export default function HomeCTA() {
  return (
    <div className="relative bg-zinc-800">
      <div className="h-56 bg-rose-300 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <img
          className="object-cover w-full h-full"
          src="/static/home/moetlashes-img-2.webp"
          alt=""
        />
      </div>
      <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 md:py-20">
        <div className="lg:ml-auto lg:w-1/2 lg:pl-10">
          <h3 className="mt-2 text-4xl font-extrabold tracking-tight text-rose-200 sm:text-5xl">
            Add volume &{' '}
            <span className="italic font-normal underline">
              length &nbsp;&nbsp;
            </span>
          </h3>
          <p className="mt-3 text-lg text-gray-300">
            Enhance your natural beauty and achieve your most becoming look with
            an eyelash extension or a lash lift treatment.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <Link href="/contact" passHref>
                <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium transition duration-300 ease-in-out bg-white border border-transparent rounded-full text-rose-400 hover:bg-rose-300 hover:text-white group">
                  <p>Call our salon</p>

                  <PhoneOutgoingIcon
                    className="w-5 h-5 ml-3 -mr-1 text-rose-300 group-hover:text-rose-100"
                    aria-hidden="true"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
