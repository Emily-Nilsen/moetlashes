import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

export default function PageNotFound() {
  const { t } = useTranslation();

  return (
    <>
      <main className="">
        <header className="relative pb-36 bg-blue-gray-800">
          <div className="absolute inset-0">
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                type: 'fade',
              }}
              className="object-cover w-full h-full"
            >
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653665524/Mo%C3%ABt%20Lashes/general/page-not-found_rdipo7.webp"
                alt="Moët Lashes | Page Not Found"
                unoptimized={true}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </motion.div>
            <div
              className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-t"
              aria-hidden="true"
            />
          </div>
          <Popover as="div" className="relative z-10">
            <div className="relative flex items-center justify-between px-4 pt-6 pb-2 mx-auto max-w-7xl sm:px-6 lg:px-8"></div>
          </Popover>

          <div className="relative max-w-md px-4 pt-32 pb-16 mx-auto mt-24 sm:max-w-3xl sm:px-6 md:mt-32 lg:max-w-7xl lg:px-8">
            <h2 id="features-heading" className="font-medium text-rose-200">
              404 ERROR
            </h2>
            <h3 className="py-6 text-6xl text-white">
              <span className="font-bold">Uh oh! I think you’re </span>
              <span className="italic font-normal text-rose-200">lost</span>.
            </h3>
            <p className="max-w-md mt-3 text-lg font-normal text-white sm:text-xl md:mt-5 md:max-w-xl">
              It looks like the page you’re looking for{' '}
              <span className="font-medium"> doesn’t</span> exist.
            </p>
          </div>
        </header>
      </main>
    </>
  );
}
