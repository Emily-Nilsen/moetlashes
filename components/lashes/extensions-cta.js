import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

export default function ExtensionsCTA() {
  return (
    <div className="relative bg-zinc-800">
      <div className="h-96 bg-rose-300 sm:absolute sm:left-0 sm:h-full sm:w-1/2">
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            type: 'fade',
          }}
          className="relative object-cover w-full h-full"
        >
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653665551/Mo%C3%ABt%20Lashes/general/moetlashes-img-1_olyxfe.webp"
            alt="Add volume and length"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority={true}
            unoptimized={true}
          />
        </motion.div>
      </div>
      <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 md:py-20">
        <div className="sm:ml-auto sm:w-1/2 sm:pl-10">
          <h3 className="mt-2 text-4xl font-extrabold tracking-tight text-rose-200 sm:text-5xl">
            Accentuate your{' '}
            <span className="italic font-medium text-white">eyes</span>
          </h3>
          <p className="mt-3 text-lg text-zinc-300">
            Add volume, length and definition to your lash line with an eyelash
            extension treatment or a lift & tint @ Moët Lashes.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="tel:61466609975"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium transition duration-300 ease-in-out bg-white border border-transparent rounded-full text-rose-400 hover:bg-rose-300 hover:text-white group"
              >
                <p>Call our salon</p>

                <PhoneIcon
                  className="w-5 h-5 ml-3 -mr-1 text-rose-300 group-hover:text-rose-50"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
