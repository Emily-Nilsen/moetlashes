import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Lifts() {
  return (
    <div id="lifts" className="relative py-16 bg-white sm:py-24">
      <div className="bg-white">
        <div className="px-4 pb-16 mx-auto max-w-7xl sm:pb-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-rose-400">
              We also offer
            </h2>
            <h1 className="mt-1 text-5xl font-extrabold text-zinc-800 sm:text-6xl sm:tracking-tight lg:text-7xl">
              Lift, style & tint
            </h1>
            <p className="max-w-xl mx-auto mt-5 text-xl text-zinc-500">
              A lash lift and tint is the perfect alternative for those who want
              the styled look without using eyelash extensions.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 w-full right-1/2 bg-rose-50 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={2}
                    height={2}
                    className="text-rose-100"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Image with pink flowers*/}
            <div className="relative pt-64 pb-10 overflow-hidden shadow-xl rounded-2xl">
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  duration: 0.8,
                  type: 'fade',
                }}
                className="absolute inset-0 object-cover w-full h-full"
              >
                <Image
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653665552/moetlashes-img-7_dp28i3.webp"
                  alt="Lift, style and tint"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  unoptimized={true}
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h3 className="text-4xl font-extrabold tracking-tight text-zinc-800 sm:text-5xl">
              Eyelash extension{' '}
              <span className="italic font-medium text-rose-400">
                alternative
              </span>
            </h3>
            <div className="mt-6 space-y-6 text-zinc-500">
              <p className="text-lg">
                A lash lift is the perfect alternative for those who want the
                styled look without using eyelash extensions.
              </p>
              <p className="text-base leading-7">
                A lash lift is essentially a perming treatment to curl the
                eyelashes and set them in position.
              </p>
              <p className="text-base leading-7">
                We tint your natural eyelashes using a safe, semi-permanent,
                black vegetable dye.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: 'easeOut',
              }}
              className="bg-rose-400 rounded-2xl"
            >
              <div className="max-w-2xl px-4 py-16 mx-auto text-center sm:py-20 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">
                    <span className="italic font-medium text-white">Curl </span>
                    your lashes.
                  </span>
                  <span className="block">
                    <span className="text-zinc-800">Darken </span>your lash
                    line.
                  </span>
                </h1>
                <p className="mt-4 text-lg leading-6 text-white">
                  Book in for an eyelash lift or tint, or spoil yourself with
                  both.
                </p>
                <Link href="/pricing" passHref>
                  <a className="inline-flex items-center justify-center w-full px-5 py-3 mt-8 text-base font-medium transition duration-300 ease-in-out bg-white border border-transparent rounded-full text-rose-500 hover:bg-zinc-800 hover:text-white sm:w-auto">
                    See our pricing
                  </a>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
