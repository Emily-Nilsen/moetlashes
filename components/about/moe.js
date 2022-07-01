import Image from 'next/image';
import { motion } from 'framer-motion';
// To use the interceptor
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export default function Moe() {
  // Specify a number between 0 and 1
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });
  const textMain = useAnimation();
  const textSecondary = useAnimation();
  const whiteBox = useAnimation();
  const blackDisc = useAnimation();
  const imageRound = useAnimation();
  const removeImageOverlay = useAnimation();

  // Text Main
  useEffect(() => {
    if (inView) {
      textMain.start({
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 0.5,
          type: 'fade',
          ease: 'easeIn',
        },
      });
    }
    if (!inView) {
      textMain.start({ opacity: 0 });
    }
  }, [inView, textMain]);

  // Text Secondary
  useEffect(() => {
    if (inView) {
      textSecondary.start({
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.5,
          type: 'fade',
          ease: 'easeIn',
        },
      });
    }
    if (!inView) {
      textSecondary.start({ opacity: 0 });
    }
  }, [inView, textSecondary]);

  // White Box
  useEffect(() => {
    if (inView) {
      whiteBox.start({
        x: 0,
        transition: {
          delay: 0.5,
          duration: 0.5,
          ease: 'easeOut',
          type: 'spring',
        },
      });
    }
    if (!inView) {
      whiteBox.start({ x: '35vw' });
    }
  }, [inView, whiteBox]);

  // Black Disc
  useEffect(() => {
    if (inView) {
      blackDisc.start({
        width: '33vw',
        height: '33vw',
        transition: {
          delay: 0.5,
          duration: 0.5,
          type: 'spring',
          ease: 'easeOut',
        },
      });
    }
    if (!inView) {
      blackDisc.start({ width: '0vw', height: '0vw' });
    }
  }, [inView, blackDisc]);

  // Image Round
  useEffect(() => {
    if (inView) {
      imageRound.start({
        width: '29vw',
        height: '29vw',
        transition: {
          delay: 0.5,
          duration: 0.5,
          type: 'spring',
          ease: 'easeOut',
        },
      });
    }
    if (!inView) {
      imageRound.start({ width: '0vw', height: '0vw' });
    }
  }, [inView, imageRound]);

  // Remove Image Overlay
  useEffect(() => {
    if (inView) {
      removeImageOverlay.start({
        opacity: 0,
        transition: {
          delay: 1.3,
          duration: 1.3,
          type: 'fade',
          ease: 'easeIn',
        },
      });
    }
    if (!inView) {
      removeImageOverlay.start({ opacity: 1 });
    }
  }, [inView, removeImageOverlay]);

  return (
    <div className="bg-zinc-800">
      {/* Moe the professional */}
      <div ref={ref} className="w-screen bg-zinc-50">
        <div className="relative mx-auto overflow-x-hidden overflow-hidden rounded-none bg-zinc-800 lg:h-[52vh] w-[100vw] h-[38vh] sm:h-[40vh]">
          <div>
            <div className="relative flex items-center object-cover object-center w-full h-full overflow-hidden overflow-x-hidden bg-zinc-800">
              {/* Moe */}
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
            className="absolute flex items-center justify-end w-2/3 h-full text-white rounded-none bg-zinc-800"
          >
            <div className="flex w-[88%] bg-zinc-800 h-5/6">
              <div className="flex flex-col items-start justify-between h-full bg-t">
                {/* Empty div to push down text */}
                {/* <div className="w-full h-[41.666667%] bg-t"></div> */}
                <motion.h3
                  animate={textMain}
                  className="pt-4 text-2xl font-medium leading-7 text-left text-white md:pt-16 sm:pb-6 sm:text-4xl md:text-5xl sm:leading-normal sm:font-bold"
                >
                  Eyelash
                  <span className="block">Extension </span>
                  <span className="block italic font-normal sm:font-medium text-rose-200">
                    Professional
                  </span>
                </motion.h3>
                <motion.h2
                  animate={textSecondary}
                  className="pt-4 text-sm font-medium text-left sm:pt-20 text-rose-200 sm:text-base"
                >
                  Book a treatment today{' '}
                  <span className="block pb-4 md:pb-10 sm:inline-block">
                    @ Moët Lashes{' '}
                  </span>
                </motion.h2>
              </div>
            </div>
          </motion.div>
          <motion.div
            // animate={shutterRight}
            className="absolute bottom-0 right-0 z-20 flex items-center justify-start w-1/3 h-full text-white rounded-none bg-zinc-800"
          >
            {/* White square */}
            <motion.div
              animate={whiteBox}
              className="w-9/12 bg-white h-5/6"
            ></motion.div>
          </motion.div>
          {/* Black disc with with border */}
          <motion.div
            animate={blackDisc}
            className="z-10 rounded-full absolute flex items-center justify-center w-[33vw] h-[33vw] bg-zinc-800 overflow-hidden border border-white right-[16.5vw] top-1/2 -translate-y-1/2"
          ></motion.div>
          {/* Moe round image */}
          <motion.div
            animate={imageRound}
            className="z-30 rounded-full absolute flex items-center justify-center w-[29vw] h-[29vw] bg-t overflow-hidden top-1/2 -translate-y-1/2 right-[18.5vw]"
          >
            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654287946/Mo%C3%ABt%20Lashes/general/Moe_circle_animation_t3ysw6.png"
              alt="Moët Lashes Eyelash Salon"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              unoptimized={true}
            />
          </motion.div>
          {/* B&W overlay */}
          <motion.div
            animate={removeImageOverlay}
            className="z-30 rounded-full absolute flex items-center justify-center w-[29vw] h-[29vw] bg-t overflow-hidden top-1/2 -translate-y-1/2 right-[18.5vw] backdrop-grayscale"
          />
        </div>
      </div>
    </div>
  );
}
