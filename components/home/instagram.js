import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
// To use the interceptor
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export default function Instagram() {
  // Specify a number between 0 and 1
  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  // Shows animation once only
  const useHasBeenViewed = () => {
    const [ref, inView] = useInView();
    const prevInView = useRef(false);
    const hasBeenViewed = prevInView.current || inView;
    useEffect(() => {
      prevInView.current = inView;
    });

    return [hasBeenViewed, ref];
  };

  const shutterLeft = useAnimation();
  const shutterRight = useAnimation();
  const imageReelOne = useAnimation();
  const imageReelTwo = useAnimation();
  const imageReelThree = useAnimation();
  const shutterLeftClosing = useAnimation();
  const shutterRightClosing = useAnimation();
  const socialMediaIcon = useAnimation();
  const coverAnimation = useAnimation();

  // Left shutter opening
  useEffect(() => {
    if (inView) {
      shutterLeft.start({
        x: '-50vw',
        viewport: { once: true },
        transition: {
          delay: 1,
          duration: 0.5,
          ease: 'linear',
        },
      });
    }
    if (!inView) {
      shutterLeft.start({ x: 0 });
    }
  }, [inView, shutterLeft]);

  // Right shutter opening
  useEffect(() => {
    if (inView) {
      shutterRight.start({
        x: '50vw',
        viewport: { once: true },
        transition: {
          delay: 1,
          duration: 0.5,
          ease: 'linear',
        },
      });
    }
    if (!inView) {
      shutterRight.start({ x: 0 });
    }
  }, [inView, shutterRight]);

  // Image Reel One
  useEffect(() => {
    if (inView) {
      imageReelOne.start({
        x: '-20vw',
        viewport: { once: true },
        transition: {
          delay: 1,
          duration: 5,
          ease: 'linear',
        },
      });
    }
    if (!inView) {
      imageReelOne.start({ x: 0 });
    }
  }, [inView, imageReelOne]);

  // Image Reel Two
  useEffect(() => {
    if (inView) {
      imageReelTwo.start({
        x: '20vw',
        scale: 1.1,
        viewport: { once: true },
        transition: {
          delay: 1,
          duration: 5,
          ease: 'easeOut',
        },
      });
    }
    if (!inView) {
      imageReelTwo.start({ x: 0, scale: 1.1 });
    }
  }, [inView, imageReelTwo]);

  // Image Reel Three
  useEffect(() => {
    if (inView) {
      imageReelThree.start({
        x: '-20vw',
        viewport: { once: true },
        transition: {
          delay: 1,
          duration: 5,
          ease: 'linear',
        },
      });
    }
    if (!inView) {
      imageReelThree.start({ x: 0 });
    }
  }, [inView, imageReelThree]);

  // Left shutter closing
  useEffect(() => {
    if (inView) {
      shutterLeftClosing.start({
        x: 0,
        viewport: { once: true },
        transition: {
          delay: 5.4,
          duration: 0.5,
          ease: 'linear',
        },
      });
    }
    if (!inView) {
      shutterLeftClosing.start({ x: '-50vw' });
    }
  }, [inView, shutterLeftClosing]);

  // Right shutter closing
  useEffect(() => {
    if (inView) {
      shutterRightClosing.start({
        x: 0,
        viewport: { once: true },
        transition: {
          delay: 5.4,
          duration: 0.5,
          ease: 'linear',
        },
      });
    }
    if (!inView) {
      shutterRightClosing.start({ x: '50vw' });
    }
  }, [inView, shutterRightClosing]);

  // Social Media Icon
  useEffect(() => {
    if (inView) {
      socialMediaIcon.start({
        opacity: 1,
        viewport: { once: true },
        transition: {
          delay: 5.9,
          duration: 0.8,
          ease: 'easeIn',
          type: 'fade',
        },
      });
    }
    if (!inView) {
      socialMediaIcon.start({ opacity: 0 });
    }
  }, [inView, socialMediaIcon]);

  return (
    <div className="bg-white sm:pb-0">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:pt-24 sm:pb-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mt-1 text-4xl font-extrabold text-zinc-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Join us on{' '}
            <span className="italic font-medium text-rose-400">Instagram</span>.
          </h1>
          <p className="max-w-xl mx-auto mt-3 text-xl sm:mt-5 text-zinc-500">
            We’d love to see you there!
          </p>
        </div>
      </div>

      {/* New Instagram promotion */}
      <div
        // animate={{ opacity: useHasBeenViewed ? 1 : 0 }}
        ref={ref}
        className="w-screen pb-0 my-0 overflow-x-hidden bg-zinc-50"
      >
        <div className="relative mx-auto overflow-x-hidden overflow-hidden rounded-none bg-rose-300 lg:h-[50vh] w-[100vw] h-[50vh]">
          <div>
            <div className="flex items-center object-cover object-center w-full h-full overflow-hidden overflow-x-hidden bg-zinc-800">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654084513/Mo%C3%ABt%20Lashes/promos/pink-pink_bjpdw3.png"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
          </div>
          {/* Shutters opening */}
          <motion.div
            animate={shutterLeft}
            viewport={{ once: true }}
            className="absolute z-20 flex items-center justify-center w-1/2 h-full text-white rounded-none bg-rose-300"
          ></motion.div>
          <motion.div
            animate={shutterRight}
            viewport={{ once: true }}
            className="absolute bottom-0 right-0 z-20 flex items-center justify-center w-1/2 h-full text-white rounded-none bg-rose-300"
          >
            <div className="flex flex-col items-start justify-center"></div>
          </motion.div>

          {/* Image Reel One */}
          <motion.div
            animate={imageReelOne}
            viewport={{ once: true }}
            className="absolute grid w-[140vw] grid-cols-7 overflow-hidden h-1/3"
          >
            <div className="relative flex justify-center object-cover object-center w-full h-full col-span-1 overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653981918/Mo%C3%ABt%20Lashes/customer%27s%20eyes/eye_3_ys7fz5.jpg"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
            <div className="relative flex justify-center object-cover object-center w-full h-full col-span-1 overflow-hidden bg-zinc-800">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653670637/Mo%C3%ABt%20Lashes/SVGs/moet-pink_svy7es.svg"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
            <div className="relative flex justify-center object-cover object-center w-full h-full col-span-1 overflow-hidden bg-purple-400">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653981919/Mo%C3%ABt%20Lashes/customer%27s%20eyes/eye_12_urtkg7.jpg"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
            <div className="relative flex justify-center object-cover object-center w-full h-full col-span-1 overflow-hidden bg-rose-100">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653670637/Mo%C3%ABt%20Lashes/SVGs/moet-rose-400_xnflnb.svg"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
            <div className="relative flex justify-center object-cover object-center w-full h-full col-span-1 overflow-hidden bg-orange-400">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653981918/Mo%C3%ABt%20Lashes/customer%27s%20eyes/eye_10_n0wnzr.jpg"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
            <div className="relative flex justify-center object-cover object-center w-full h-full col-span-1 overflow-hidden bg-rose-200">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653670637/Mo%C3%ABt%20Lashes/SVGs/moet-zinc_oj2esw.svg"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
            <div className="relative flex justify-center object-cover object-center w-full h-full col-span-1 overflow-hidden bg-purple-400">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653981918/Mo%C3%ABt%20Lashes/customer%27s%20eyes/eye_2_h5xnbu.jpg"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
          </motion.div>

          {/* Image Reel Two */}
          <motion.div
            animate={imageReelTwo}
            viewport={{ once: true }}
            className="z-10 shadow-lg absolute grid w-[140vw] grid-cols-7 overflow-hidden h-1/3 top-1/3 right-0"
          >
            <div className="relative flex justify-center object-cover object-center w-full h-full col-span-1 overflow-hidden bg-rose-100">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653670637/Mo%C3%ABt%20Lashes/SVGs/moet-rose-400_xnflnb.svg"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
            <div className="relative flex justify-center object-cover object-center w-full h-full col-span-1 overflow-hidden bg-zinc-800">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653981918/Mo%C3%ABt%20Lashes/customer%27s%20eyes/eye_1_nckzjr.jpg"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
            <div className="relative flex justify-center object-cover object-center w-full h-full col-span-1 overflow-hidden bg-rose-200">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653670637/Mo%C3%ABt%20Lashes/SVGs/moet-zinc_oj2esw.svg"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
            <div className="relative flex justify-center object-cover object-center w-full h-full col-span-1 overflow-hidden bg-rose-100">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653981918/Mo%C3%ABt%20Lashes/customer%27s%20eyes/eye_9_srpxrn.jpg"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
            <div className="relative flex justify-center object-cover object-center w-full h-full col-span-1 overflow-hidden bg-zinc-800">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653670637/Mo%C3%ABt%20Lashes/SVGs/moet-pink_svy7es.svg"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
            <div className="relative flex justify-center object-cover object-center w-full h-full col-span-1 overflow-hidden bg-rose-200">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653981919/Mo%C3%ABt%20Lashes/customer%27s%20eyes/eye_6_yposnj.jpg"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
            <div className="relative flex justify-center object-cover object-center w-full h-full col-span-1 overflow-hidden bg-rose-100">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653670637/Mo%C3%ABt%20Lashes/SVGs/moet-rose-400_xnflnb.svg"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
          </motion.div>

          {/* Image Reel Three */}
          <motion.div
            animate={imageReelThree}
            viewport={{ once: true }}
            className="absolute bottom-0 grid w-[140vw] grid-cols-7 overflow-hidden h-1/3"
          >
            <div className="relative flex justify-center object-cover object-center w-full h-full col-span-1 overflow-hidden bg-purple-400">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653981918/Mo%C3%ABt%20Lashes/customer%27s%20eyes/eye_7_xp2ylz.jpg"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
            <div className="relative flex justify-center object-cover object-center w-full h-full col-span-1 overflow-hidden bg-zinc-800">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653670637/Mo%C3%ABt%20Lashes/SVGs/moet-pink_svy7es.svg"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
            <div className="relative flex justify-center object-cover object-center w-full h-full col-span-1 overflow-hidden bg-purple-400">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653981919/Mo%C3%ABt%20Lashes/customer%27s%20eyes/eye_14_nzzz6c.jpg"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
            <div className="relative flex justify-center object-cover object-center w-full h-full col-span-1 overflow-hidden bg-rose-100">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653670637/Mo%C3%ABt%20Lashes/SVGs/moet-rose-400_xnflnb.svg"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
            <div className="relative flex justify-center object-cover object-center w-full h-full col-span-1 overflow-hidden bg-orange-400">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653981918/Mo%C3%ABt%20Lashes/customer%27s%20eyes/eye_8_eo6smm.jpg"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
            <div className="relative flex justify-center object-cover object-center w-full h-full col-span-1 overflow-hidden bg-rose-200">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653670637/Mo%C3%ABt%20Lashes/SVGs/moet-zinc_oj2esw.svg"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
            <div className="relative flex justify-center object-cover object-center w-full h-full col-span-1 overflow-hidden bg-purple-400">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653981919/Mo%C3%ABt%20Lashes/customer%27s%20eyes/eye_11_lv30sf.jpg"
                alt="Moët Lashes Eyelash Salon"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                unoptimized={true}
              />
            </div>
          </motion.div>

          {/* Shutters closing */}
          <motion.div
            animate={shutterLeftClosing}
            viewport={{ once: true }}
            className="absolute z-20 flex items-center justify-center w-1/2 h-full text-white rounded-none bg-rose-300"
          ></motion.div>
          <motion.div
            animate={shutterRightClosing}
            viewport={{ once: true }}
            className="absolute bottom-0 right-0 z-20 flex items-center justify-center w-1/2 h-full text-white rounded-none bg-rose-300"
          >
            <div className="flex flex-col items-start justify-center"></div>
          </motion.div>

          {/* Social media icon */}
          <motion.div
            animate={socialMediaIcon}
            viewport={{ once: true }}
            className="absolute z-40 flex items-center justify-center w-full h-full"
          >
            <a
              href="https://www.instagram.com/moet_lashes/"
              target="_blank"
              rel="noreferrer"
              className="text-white transition duration-300 ease-in-out hover:text-zinc-800"
            >
              <span className="sr-only">Instagram</span>
              <div className="w-20 h-20" aria-hidden="true">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
