import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';
import Lifts from '../components/lashes/lifts';
import ExtensionsCTA from '../components/lashes/extensions-cta';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { PhoneIcon } from '@heroicons/react/outline';
import { EyeIcon } from '@heroicons/react/solid';

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
                <div className="relative object-cover w-full h-full">
                  <Image
                    src="/static/home/moetlashes-img-3-gradient.webp"
                    alt="Eyelash extensions hero image"
                    width={1000}
                    height={697}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
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
        {/* Premium Nagaraku extensions */}
        <div className="overflow-hidden bg-zinc-50">
          <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="absolute top-0 bottom-0 hidden w-screen lg:block bg-rose-50 left-3/4" />
            <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
              <div>
                <h1>
                  <span className="block text-base font-semibold tracking-wide uppercase text-zinc-800">
                    <h2>Premium</h2>
                  </span>
                  <span className="block mt-2 text-4xl italic font-medium tracking-tight leading-tighter text-rose-400 sm:text-5xl">
                    Nagaraku{' '}
                    <span className="block not-italic font-extrabold text-zinc-800">
                      eyelash extensions
                    </span>
                  </span>
                </h1>
              </div>
            </div>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative lg:row-start-1 lg:col-start-2">
                <svg
                  className="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="de316486-4a29-4312-bdfc-fbce2132a2c1"
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
                    fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                  />
                </svg>
                {/* Attaching individual eyelash extensions */}
                <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
                  <figure>
                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                      <div className="object-cover object-center overflow-hidden rounded-lg shadow-lg">
                        <Image
                          src="/static/home/moetlashes-img-5.webp"
                          alt="Attaching individual eyelash extensions"
                          width={1310}
                          height={922}
                          layout="responsive"
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </div>
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
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="mx-auto text-base max-w-prose lg:max-w-none">
                  <p className="text-lg text-zinc-500">
                    Our premium Nagaraku eyelashes’ unique material ensures that
                    each lash is soft, lightweight and flat at the base for
                    maximum adhesion.
                  </p>
                </div>
                <div className="mx-auto mt-5 prose text-zinc-500 prose-indigo lg:max-w-none lg:row-start-1 lg:col-start-1">
                  <p>
                    We skillfully attach each ellipse eyelash to your individual
                    lashes for an entirely natural and stunning look.
                  </p>
                  <p>
                    Nagaraku eyelash extensions are made from premium,
                    high-quality PBT material. They are very soft, lightweight,
                    natural and comfortable to wear.
                  </p>

                  <ul role="list">
                    <li>
                      SGS and MSDS certify the premium quality of Nagaraku
                      eyelash extensions.
                    </li>
                    <li>
                      The unique curvature technique provides a long-lasting
                      curl.
                    </li>
                    <li>
                      The high-temperature processing method sterilises each
                      eyelash.
                    </li>
                  </ul>
                  <p>
                    Our eyelash extensions are the best option to lengthen,
                    define and add volume to your natural eyelashes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ExtensionsCTA />
        {/* Lifts and tints */}
        <Lifts />
      </main>
    </Layout>
  );
}
