import Image from 'next/image';
import { motion } from 'framer-motion';
// To use the interceptor
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export default function Moe() {
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
    <div className="bg-rose-50">
      {/* Moe the professional */}
      {/* Find Us! */}
      <div ref={ref} className="w-screen pb-10 my-0 bg-zinc-50">
        <div className="relative mx-auto overflow-x-hidden overflow-hidden rounded-none bg-rose-300 lg:h-[50vh] w-[100vw] h-[30vh]">
          <div>
            <div className="flex items-center object-cover object-center w-full h-full overflow-hidden overflow-x-hidden bg-zinc-800">
              {/* <GoogleMap /> */}
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654179564/Mo%C3%ABt%20Lashes/general/Moe_B_W_xqqwtt.jpg"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
          </div>
          {/* Shutters */}
          <motion.div
            // animate={shutterLeft}
            className="absolute flex items-center justify-start w-2/3 h-full pl-20 text-white rounded-none bg-zinc-800"
          >
            <div className="flex flex-col items-start justify-center">
              <h3 className="py-6 text-4xl text-left text-white sm:text-5xl">
                <span className="font-bold">Eyelash </span>
                <span className="block font-bold">Extension </span>

                <span className="block italic font-medium text-rose-200">
                  Professional
                </span>
              </h3>
              <h2 className="pt-20 font-medium text-left text-rose-200">
                Book a treatment today @ Moët Lashes
              </h2>
            </div>
          </motion.div>
          <motion.div
            // animate={shutterRight}
            className="absolute bottom-0 right-0 flex items-center justify-center w-1/3 h-full text-white rounded-none bg-zinc-600"
          ></motion.div>
          <div className="border-[20px] border-zinc-800 rounded-full absolute flex items-center justify-center w-[33vw] h-[33vw] bg-white overflow-hidden m-1">
            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654287946/Mo%C3%ABt%20Lashes/general/Moe_circle_animation_t3ysw6.png"
              alt="Moët Lashes Eyelash Salon"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              unoptimized={true}
            />
          </div>
        </div>
      </div>
      {/* Old */}
      <div className="px-0 py-0 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="relative bg-black">
          {/* Decorative image and overlay */}
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 0,
              duration: 0.8,
              type: 'fade',
            }}
            aria-hidden="true"
            className="absolute inset-0 overflow-hidden"
          >
            <div className="flex items-center object-cover object-center w-full h-full">
              <video
                autoPlay
                muted
                src="https://res.cloudinary.com/dt3k2apqd/video/upload/v1654110819/Mo%C3%ABt%20Lashes/promos/Moe_desktop_trimmed_swmget.mp4"
                alt="Moët Lashes Eyelash Salon"
                type="video/mp4"
              />
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            transition={{
              delay: 2,
              duration: 0.8,
              type: 'fade',
            }}
            className="relative flex items-start max-w-3xl px-6 py-32 sm:py-64 lg:px-10"
          >
            <a
              href="https://www.instagram.com/moet_lashes/"
              target="_blank"
              rel="noreferrer"
              className="transition duration-300 ease-in-out text-rose-300 hover:text-rose-400"
            >
              <span className="sr-only">Instagram</span>
              <div className="w-20 h-20" aria-hidden="true">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg> */}
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
