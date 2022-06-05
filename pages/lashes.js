import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';
import ExtensionsCTA from '../components/lashes/extensions-cta';
import AfterCare from '../components/lashes/after-care';
import Faqs from '../components/lashes/faqs';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { PhoneIcon } from '@heroicons/react/outline';
import { EyeIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

export default function Lashes() {
  const { t } = useTranslation();

  return (
    <Layout
      title={t('layout:lashes_title')}
      description={t('layout:lashes_description')}
      keywords={t('layout:lashes_keywords')}
    >
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 bg-zinc-100 h-1/2" />

            <div className="relative">
              <div className="absolute inset-0">
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    type: 'fade',
                  }}
                  className="relative object-cover w-full h-full"
                >
                  <Image
                    src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653665550/Mo%C3%ABt%20Lashes/general/moetlashes-img-3-gradient_qfkbz0.webp"
                    alt="Eyelash extensions hero image"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority={true}
                    unoptimized={true}
                  />
                </motion.div>
                <div
                  className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-t"
                  aria-hidden="true"
                />
              </div>
              <div className="relative px-4 py-24 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="pt-20 mt-24 -mb-16 text-5xl font-extrabold tracking-tight text-left md:mt-48 sm:text-6xl lg:text-7xl">
                  <span className="text-white">Lash </span>
                  <span className="italic font-medium text-rose-200">
                    extensions
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* New lashes content */}
        <div className="relative py-16 overflow-hidden bg-white">
          <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div
              className="relative h-full mx-auto text-lg max-w-prose"
              aria-hidden="true"
            >
              <svg
                className="absolute transform translate-x-32 top-12 left-full"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
                      className="text-rose-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                />
              </svg>
              <svg
                className="absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
                      className="text-rose-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                />
              </svg>
              <svg
                className="absolute transform translate-x-32 bottom-12 left-full"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
                      className="text-rose-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                />
              </svg>
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto text-lg max-w-prose">
              <h1>
                <span className="block text-base font-semibold tracking-wide text-center uppercase text-rose-500">
                  <h2>Nagaraku</h2>
                </span>
                <span className="block mt-2 text-4xl font-extrabold leading-8 tracking-tight text-center text-zinc-800 sm:text-5xl">
                  Eyelash extensions
                </span>
              </h1>
              <p className="mt-8 text-xl leading-8 text-zinc-500">
                Our premium Nagaraku eyelashes’ unique material ensures that
                each lash is soft, lightweight and flat at the base for maximum
                adhesion.
              </p>
            </div>
            <div className="mx-auto mt-6 prose prose-lg text-zinc-500 prose-rose">
              <p>
                We skillfully attach each ellipse eyelash to your individual
                lashes for an entirely natural and stunning look.
              </p>
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      delay: 0.3,
                      duration: 0.8,
                      type: 'fade',
                    }}
                    className="object-cover object-center overflow-hidden rounded-lg shadow-lg"
                  >
                    <Image
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653665552/Mo%C3%ABt%20Lashes/general/moetlashes-img-5_ssdo2v.webp"
                      alt="Attaching individual eyelash extensions"
                      width={1310}
                      height={922}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                      unoptimized={true}
                    />
                  </motion.div>
                </div>
                <figcaption className="flex mt-3 text-sm text-zinc-500">
                  <EyeIcon
                    className="flex-none w-5 h-5 text-rose-300"
                    aria-hidden="true"
                  />
                  <span className="ml-2">
                    We attach eyelash extensions individually
                  </span>
                </figcaption>
              </figure>
              <p>
                Nagaraku eyelash extensions are made from premium, high-quality
                PBT material. They are very soft, lightweight, natural and
                comfortable to wear.
              </p>

              <ul role="list">
                <li>
                  SGS and MSDS certify the premium quality of Nagaraku eyelash
                  extensions.
                </li>
                <li>
                  The unique curvature technique provides a long-lasting curl.
                </li>
                <li>
                  The high-temperature processing method sterilises each
                  eyelash.
                </li>
              </ul>
              <p>
                Our eyelash extensions are the best option to lengthen, define
                and add volume to your natural eyelashes.
              </p>

              <h1>Lift, style & tint</h1>
              <p>
                A lash lift is the perfect alternative for those who want the
                styled look without using eyelash extensions. A lash lift is
                essentially a perming treatment to curl the eyelashes and set
                them in position.
              </p>
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
                    src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653665552/Mo%C3%ABt%20Lashes/general/moetlashes-img-7_dp28i3.webp"
                    alt="Lift, style and tint"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    unoptimized={true}
                  />
                </motion.div>
              </div>
              <figcaption className="flex mt-3 text-sm text-zinc-500">
                <EyeIcon
                  className="flex-none w-5 h-5 text-rose-300"
                  aria-hidden="true"
                />
                <span className="ml-2">
                  The perfect eyelash extension alternative
                </span>
              </figcaption>
              <p>
                At Moët Lashes, we tint your natural eyelashes using a safe,
                semi-permanent, black vegetable dye.
              </p>
            </div>
          </div>
        </div>
        <AfterCare />
        <Faqs />
        <ExtensionsCTA />
      </main>
    </Layout>
  );
}
