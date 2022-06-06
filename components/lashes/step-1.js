import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';
// To use the interceptor
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export default function Step1() {
  // Specify a number between 0 and 1
  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  const drawCircle = useAnimation();
  const drawCross = useAnimation();

  // Draw circle
  useEffect(() => {
    if (inView) {
      drawCircle.start({
        pathLength: 1,
        opacity: 1,
        transition: {
          delay: 0.5,
          pathLength: { type: 'spring', duration: 1.5, bounce: 0 },
          opacity: { duration: 0.01 },
        },
      });
    }
    if (!inView) {
      drawCircle.start({ pathLength: 0, opacity: 0 });
    }
  }, [inView, drawCircle]);

  // Draw cross
  useEffect(() => {
    if (inView) {
      drawCross.start({
        pathLength: 1,
        opacity: 1,
        transition: {
          delay: 1.7,
          pathLength: { type: 'spring', duration: 1.5, bounce: 0 },
          opacity: { duration: 0.01 },
        },
      });
    }
    if (!inView) {
      drawCross.start({ pathLength: 0, opacity: 0 });
    }
  }, [inView, drawCross]);

  return (
    <div className="relative z-10 pt-10 sm:pt-12">
      <div
        ref={ref}
        className="max-w-xl px-4 mx-auto bg-white shadow-lg rounded-3xl sm:h-96 h-80 sm:px-6 lg:px-8"
      >
        <div className="w-full h-full max-w-lg p-10 mx-auto">
          <div className="grid w-full h-full grid-cols-2 gap-10">
            <div className="flex items-center w-full h-full col-span-1 px-6">
              <div className="relative w-full h-2/5">
                <Image
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654498352/Mo%C3%ABt%20Lashes/SVGs/shower_ba0jfm.svg"
                  alt="Avoid getting wet for 24 hours"
                  unoptimized={true}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
              <div className="absolute flex items-center justify-start w-full h-full -ml-10">
                <motion.svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="#fb7185"
                    strokeWidth="5"
                    fill="transparent"
                    animate={drawCircle}
                    // variants={draw}
                    custom={1}
                  />

                  <motion.line
                    x1="40"
                    y1="45"
                    x2="160"
                    y2="155"
                    stroke="#fb7185"
                    strokeWidth="5"
                    custom={2}
                    animate={drawCross}
                  />
                  <motion.line
                    x1="40"
                    y1="155"
                    x2="160"
                    y2="45"
                    stroke="#fb7185"
                    strokeWidth="5"
                    custom={2.5}
                    animate={drawCross}
                  />
                </motion.svg>
              </div>
            </div>
            <div className="flex flex-col justify-center col-span-1 px-6 text-left">
              <motion.h1
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  type: 'fade',
                }}
                className="mb-6 text-3xl font-bold sm:text-4xl text-zinc-800"
              >
                Step 1
              </motion.h1>
              <motion.p
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 1,
                  duration: 0.5,
                  type: 'fade',
                }}
                className="text-lg text-zinc-600"
              >
                Avoid getting lashes wet for{' '}
                <span className="font-bold tracking-tight text-rose-400">
                  24
                </span>{' '}
                hours.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
