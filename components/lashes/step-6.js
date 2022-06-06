import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/outline';

export default function Step4() {
  return (
    <div className="relative z-10 pt-10 sm:pt-12">
      <div className="sm:max-w-xl max-w-sm px-4 mx-auto bg-white shadow-lg rounded-3xl sm:h-96 h-[50vh] sm:px-6 lg:px-8">
        <div className="relative w-full h-full p-6 mx-auto sm:max-w-lg sm:p-10">
          <div className="grid w-full h-full grid-cols-1 gap-0 sm:gap-10 sm:grid-cols-2">
            <div className="relative flex items-center w-full h-full col-span-1 px-0">
              <div className="relative flex items-center justify-center w-full h-1/2">
                <Image
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654534304/Mo%C3%ABt%20Lashes/SVGs/certificate-light_eqgmmj.svg"
                  alt="Only allow a professional to remove your lashes"
                  unoptimized={true}
                  width="100%"
                  height="100%"
                  layout="intrinsic"
                  objectFit="contain"
                  objectPosition="center"
                />

                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 1,
                    duration: 0.5,
                    type: 'fade',
                    ease: 'linear',
                  }}
                  className="absolute inset-0 items-start justify-center hidden w-full h-full sm:flex"
                >
                  <CheckIcon
                    className="w-20 h-20 -mt-10 text-lime-500"
                    aria-hidden="true"
                  />
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col justify-center h-full col-span-1 px-6 text-left">
              <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  type: 'spring',
                }}
                className="flex items-center mb-6 text-3xl font-bold sm:text-4xl text-zinc-800"
              >
                Step 6
                <span>
                  <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      delay: 1,
                      duration: 0.5,
                      type: 'fade',
                      ease: 'linear',
                    }}
                    className="flex items-start justify-center w-full h-full sm:hidden"
                  >
                    <CheckIcon
                      className="w-16 h-16 ml-3 text-lime-500"
                      aria-hidden="true"
                    />
                  </motion.div>
                </span>
              </motion.h1>
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{
                  delay: 0.8,
                  duration: 0.5,
                  type: 'spring',
                }}
                className="text-lg text-zinc-600"
              >
                Only allow a{' '}
                <span className="font-bold tracking-tight text-rose-400">
                  professional
                </span>{' '}
                to remove your lashes.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
