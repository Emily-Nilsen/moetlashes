import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Instagram() {
  return (
    <div className="bg-white sm:pb-20">
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
      {/* Video promotion */}
      <div className="relative overflow-x-hidden bg-zinc-800 sm:max-w-xl sm:max-h-96 sm:mx-auto sm:rounded-3xl sm:overflow-hidden">
        {/* Image 1 */}
        <motion.div
          whileInView={{ opacity: 1, scale: 1.15 }}
          initial={{ opacity: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.7,
            ease: 'easeInOut',
          }}
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden"
        >
          <div className="flex items-center object-cover object-center w-full h-full overflow-hidden ">
            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654084524/Mo%C3%ABt%20Lashes/promos/pink-black_znsbxj.png"
              alt="Moët Lashes Eyelash Salon"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              unoptimized={true}
            />
          </div>
        </motion.div>
        {/* Image 2 */}
        <motion.div
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.8,
            duration: 0.9,
            ease: 'easeOut',
          }}
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden"
        >
          <div className="flex items-center object-cover object-center w-full h-full overflow-hidden ">
            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654165363/Mo%C3%ABt%20Lashes/promos/Instagram_start_V2_oq51rk.gif"
              alt="Moët Lashes Eyelash Salon"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              unoptimized={true}
            />
          </div>
        </motion.div>
        {/* Image 3 */}
        {/* <motion.div
          whileInView={{ opacity: 1, scale: 1.15 }}
          initial={{ opacity: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 1.7,
            duration: 0.7,
            ease: 'easeInOut',
          }}
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden"
        >
          <div className="flex items-center object-cover object-center w-full h-full overflow-hidden ">
            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654084532/Mo%C3%ABt%20Lashes/promos/black-pink_nbhbew.png"
              alt="Moët Lashes Eyelash Salon"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              unoptimized={true}
            />
          </div>
        </motion.div> */}
        {/* Image 4 */}
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 1.7,
            duration: 0.8,
            ease: 'easeOut',
          }}
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden"
        >
          <div className="flex items-center object-cover object-center w-full h-full overflow-hidden ">
            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654164759/Mo%C3%ABt%20Lashes/promos/Instagram_end_v2_smdcky.gif"
              alt="Moët Lashes Eyelash Salon"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              unoptimized={true}
            />
          </div>
        </motion.div>
        {/* Image 5 */}
        <motion.div
          whileInView={{ opacity: 1, scale: 1.15 }}
          initial={{ opacity: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 2.5,
            duration: 0.7,
            ease: 'easeInOut',
          }}
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden"
        >
          <div className="flex items-center object-cover object-center w-full h-full overflow-hidden ">
            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1654084513/Mo%C3%ABt%20Lashes/promos/pink-pink_bjpdw3.png"
              alt="Moët Lashes Eyelash Salon"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              unoptimized={true}
            />
          </div>
          <motion.div
            whileInView={{ opacity: 1, backgroundColor: '#27272a' }}
            initial={{ opacity: 0, backgroundColor: '#f43f5e' }}
            viewport={{ once: true }}
            transition={{
              delay: 3,
              duration: 1,
              ease: 'easeIn',
              type: 'fade',
            }}
            aria-hidden="true"
            className="absolute inset-0 opacity-50 bg-zinc-800"
          />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          transition={{
            delay: 4,
            duration: 0.8,
            type: 'fade',
          }}
          className="relative flex flex-col items-center justify-center max-w-3xl px-6 py-32 mx-auto text-center sm:pb-48 lg:px-0"
        >
          <a
            href="https://www.instagram.com/moet_lashes/"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 ease-in-out text-rose-300 hover:text-rose-400"
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
  );
}
