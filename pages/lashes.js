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
            <div className="absolute inset-x-0 bottom-0 bg-gray-100 h-1/2" />

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
                  <span className="italic font-normal text-rose-200">
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
                  <span className="block text-base font-semibold tracking-wide uppercase text-rose-400">
                    <h2>Premium</h2>
                  </span>
                  <span className="block mt-2 text-4xl italic font-normal tracking-tight leading-tighter text-zinc-800 sm:text-5xl">
                    Nagaraku{' '}
                    <span className="block not-italic font-extrabold">
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
                    <figcaption className="flex mt-3 text-sm text-gray-500">
                      <EyeIcon
                        className="flex-none w-5 h-5 text-rose-300"
                        aria-hidden="true"
                      />
                      <span className="ml-2">
                        Attaching individual eyelash extensions
                      </span>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="mx-auto text-base max-w-prose lg:max-w-none">
                  <p className="text-lg text-gray-500">
                    Sagittis scelerisque nulla cursus in enim consectetur quam.
                    Dictum urna sed consectetur neque tristique pellentesque.
                    Blandit amet, sed aenean erat arcu morbi.
                  </p>
                </div>
                <div className="mx-auto mt-5 prose text-gray-500 prose-indigo lg:max-w-none lg:row-start-1 lg:col-start-1">
                  <p>
                    Sollicitudin tristique eros erat odio sed vitae, consequat
                    turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                    Eros eu viverra donec ut volutpat donec laoreet quam urna.
                  </p>
                  <p>
                    Bibendum eu nulla feugiat justo, elit adipiscing. Ut
                    tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh
                    leo. Dictum et et et sit. Faucibus sed non gravida lectus
                    dignissim imperdiet a.
                  </p>
                  <p>
                    Dictum magnis risus phasellus vitae quam morbi. Quis lorem
                    lorem arcu, metus, egestas netus cursus. In.
                  </p>
                  <ul role="list">
                    <li>Quis elit egestas venenatis mattis dignissim.</li>
                    <li>
                      Cras cras lobortis vitae vivamus ultricies facilisis
                      tempus.
                    </li>
                    <li>
                      Orci in sit morbi dignissim metus diam arcu pretium.
                    </li>
                  </ul>
                  <p>
                    Rhoncus nisl, libero egestas diam fermentum dui. At quis
                    tincidunt vel ultricies. Vulputate aliquet velit faucibus
                    semper. Pellentesque in venenatis vestibulum consectetur
                    nibh id. In id ut tempus egestas. Enim sit aliquam nec, a.
                    Morbi enim fermentum lacus in. Viverra.
                  </p>
                  <h3>How we helped</h3>
                  <p>
                    Tincidunt integer commodo, cursus etiam aliquam neque, et.
                    Consectetur pretium in volutpat, diam. Montes, magna cursus
                    nulla feugiat dignissim id lobortis amet. Laoreet sem est
                    phasellus eu proin massa, lectus. Diam rutrum posuere donec
                    ultricies non morbi. Mi a platea auctor mi.
                  </p>
                  <p>
                    Sagittis scelerisque nulla cursus in enim consectetur quam.
                    Dictum urna sed consectetur neque tristique pellentesque.
                    Blandit amet, sed aenean erat arcu morbi.
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
