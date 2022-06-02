import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Moe() {
  return (
    <div className="bg-rose-50">
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
