import Image from 'next/image';
import { motion } from 'framer-motion';
import GoogleMap from './google-map';
import { SearchIcon } from '@heroicons/react/outline';
// To use the interceptor
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export default function Map() {
  // Specify a number between 0 and 1
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  const shutterLeft = useAnimation();
  const shutterRight = useAnimation();

  // Left shutter
  useEffect(() => {
    if (inView) {
      shutterLeft.start({
        x: '-50vw',
        transition: {
          delay: 2,
          duration: 0.5,
          ease: 'linear',
        },
      });
    }
    if (!inView) {
      shutterLeft.start({ x: 0 });
    }
  }, [inView, shutterLeft]);

  // Right shutter
  useEffect(() => {
    if (inView) {
      shutterRight.start({
        x: '50vw',
        transition: {
          delay: 2,
          duration: 0.5,
          ease: 'linear',
        },
      });
    }
    if (!inView) {
      shutterRight.start({ x: 0 });
    }
  }, [inView, shutterRight]);

  return (
    <section>
      <div className="bg-white">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:pt-24 sm:pb-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-rose-500">
              orchid plaza
            </h2>
            <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              We’re easy to find.
            </h1>
            <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500">
              Our beauty salon is located at the heart of Cairns, upstairs in
              the Orchid Plaza Shopping Centre.
            </p>
          </div>
        </div>
      </div>

      {/* Find Us! */}
      <div ref={ref} className="w-screen pb-10 my-0 bg-zinc-50">
        <div className="relative mx-auto overflow-x-hidden overflow-hidden rounded-none bg-rose-300 lg:h-[50vh] w-[100vw] h-[30vh]">
          <div>
            <div className="flex items-center object-cover object-center w-full h-full overflow-hidden overflow-x-hidden bg-zinc-800">
              <GoogleMap />
            </div>
          </div>
          {/* Shutters */}
          <motion.div
            animate={shutterLeft}
            className="absolute flex items-center justify-center w-1/2 h-full text-white rounded-none bg-rose-200"
          >
            <div className="flex items-center justify-center object-cover object-center w-2/3 overflow-hidden h-2/3 sm:h-full sm:w-full">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653670637/Mo%C3%ABt%20Lashes/SVGs/moet-zinc_oj2esw.svg"
                alt="Moët Lashes Eyelash Salon"
                layout="intrinsic"
                objectFit="contain"
                objectPosition="center"
                unoptimized={true}
                width={300}
                height={300}
              />
            </div>
          </motion.div>
          <motion.div
            animate={shutterRight}
            className="absolute bottom-0 right-0 flex items-center justify-center w-1/2 h-full text-white rounded-none bg-zinc-800"
          >
            <div className="flex flex-col items-start justify-center">
              <h2 className="font-medium text-left text-rose-200">
                Cairns City
              </h2>
              <h3 className="py-6 text-5xl text-left text-white sm:text-6xl">
                <span className="font-bold">Orchid </span>

                <span className="block italic font-medium text-rose-200">
                  Plaza
                </span>
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
