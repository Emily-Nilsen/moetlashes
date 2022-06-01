import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Instagram() {
  return (
    <div className="bg-white">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* <h2 className="text-base font-semibold tracking-wide uppercase text-rose-600">
            Join us
          </h2> */}
          <h1 className="mt-1 text-4xl font-extrabold text-zinc-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Join us on{' '}
            <span className="italic font-medium text-rose-400">Instagram</span>.
          </h1>
          <p className="max-w-xl mx-auto mt-5 text-xl text-zinc-500">
            We’d love to see you there!
          </p>
        </div>
      </div>
      {/* Video promotion */}
      <div className="relative bg-zinc-800">
        {/* Decorative image and overlay */}
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            delay: 2,
            duration: 0.8,
            type: 'fade',
          }}
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden"
        >
          {/* Mobile screen */}
          <div className="flex items-center object-cover object-center w-full h-full overflow-hidden sm:hidden">
            <video
              autoPlay
              muted
              src="/static/instagram-mobile.mp4"
              alt="Moët Lashes Eyelash Salon"
              type="video/mp4"
            />
          </div>
          {/* Large screen */}
          <div className="hidden object-cover object-center w-full h-full sm:block">
            <video
              autoPlay
              muted
              src="https://res.cloudinary.com/dt3k2apqd/video/upload/v1654028899/Mo%C3%ABt%20Lashes/video/Moe%CC%88t_Lashes_Instagram_cuyzzr.mp4"
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
            delay: 6,
            duration: 0.8,
            type: 'fade',
          }}
          className="relative flex flex-col items-center max-w-3xl px-6 py-32 mx-auto text-center sm:py-64 lg:px-0"
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
