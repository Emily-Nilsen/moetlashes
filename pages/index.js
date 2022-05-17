import Image from 'next/image';
import Layout from '../components/layout';
import Features from '../components/home/features';
import Link from 'next/link';
import Lashes from '../components/home/lashes';
import Lifts from '../components/home/lifts';
import HomeCTA from '../components/home/home-cta';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  MenuIcon,
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
  XIcon,
} from '@heroicons/react/outline';

const features = [
  {
    name_start: `Eyelash `,
    name_end: `extensions`,
    description: `Make your lash fringe longer, fuller and darker with our extensive selection of eyelash extension treatments.`,
    href: `/#extensions`,
    link_name: `Extensions`,
    icon: `/static/home/icon-1.svg`,
  },
  {
    name_start: `Lash lift & `,
    name_end: `style`,
    description: `Enhance and style your natural lashes with a lash lift treatment.`,
    href: `/#lifts`,
    link_name: `Lifts`,
    icon: `/static/home/icon-2.svg`,
  },
  {
    name_start: `Aftercare `,
    name_end: `advice`,
    description: `Receive friendly advice about how best to care for your eyelash extensions.`,
    href: `/contact/#faqs`,
    link_name: `FAQs`,
    icon: `/static/home/icon-3.svg`,
  },
];

export default function Home() {
  return (
    <div className="bg-rose-50">
      <header className="relative pb-36 bg-blue-gray-800">
        <div className="absolute inset-0">
          <div className="object-cover w-full h-full">
            <Image
              src="/static/home/moe-hero.webp"
              alt="Moët Lashes"
              width={1500}
              height={1000}
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
        <Popover as="div" className="relative z-10">
          <div className="relative flex items-center justify-between px-4 pt-6 pb-2 mx-auto max-w-7xl sm:px-6 lg:px-8"></div>
        </Popover>

        <div className="relative max-w-md px-4 pt-32 pb-16 mx-auto mt-24 sm:max-w-3xl sm:px-6 md:mt-32 lg:max-w-7xl lg:px-8">
          <h2 id="features-heading" className="font-medium text-white">
            Cairns City
          </h2>
          <h3 className="py-6 text-6xl text-rose-200">
            <span className="font-bold">Eyelash </span>
            <span className="italic font-normal">Extensions</span>
          </h3>
          <p className="max-w-md mt-3 text-lg font-normal text-white sm:text-xl md:mt-5 md:max-w-xl">
            We skillfully attach each premium{' '}
            <span className="font-medium"> Nagaraku</span> eyelash to your
            individual lashes for an entirely natural and stunning look. We also
            offer lash lifts and tints.
          </p>
        </div>
      </header>

      <main className="pb-16">
        <div className="bg-rose-50">
          {/* Cards */}
          <section
            className="relative z-10 max-w-md px-4 mx-auto -mt-32 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
            aria-labelledby="contact-heading"
          >
            <h2 className="sr-only" id="contact-heading">
              Contact us
            </h2>
            <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="flex flex-col bg-white shadow-xl rounded-2xl"
                >
                  <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                    <div className="absolute top-0 inline-block p-5 transform -translate-y-1/2 shadow-lg bg-rose-100 rounded-xl">
                      <div className="w-9 h-9">
                        <Image
                          src={feature.icon}
                          alt={feature.name}
                          width={70}
                          height={70}
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-medium text-zinc-800">
                      {feature.name_start}
                      <span className="italic font-normal">
                        {feature.name_end}
                      </span>
                    </h3>
                    <p className="mt-4 text-base text-zinc-500">
                      {feature.description}
                    </p>
                  </div>
                  <div className="p-6 text-base font-medium transition duration-300 ease-in-out text-rose-400 bg-zinc-50 rounded-bl-2xl rounded-br-2xl md:px-8 hover:text-white hover:bg-rose-300">
                    <a href={feature.href} className="">
                      {feature.link_name}
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        {/* Lashes */}
        <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* <h2 className="text-base font-semibold tracking-wide uppercase text-rose-400">
              Beautiful Lashes
            </h2> */}
            <h1 className="max-w-3xl mx-auto mt-1 text-5xl font-normal text-rose-400 sm:text-6xl sm:tracking-tight lg:text-7xl">
              Treat yourself and
              <span className="italic font-semibold text-zinc-900">
                {' '}
                enhance
              </span>{' '}
              <span className="block">your eyes.</span>
              <span className="italic font-normal"></span>
            </h1>
            {/* <p className="max-w-xl mx-auto mt-5 text-xl text-zinc-500">
              Enhance your natural beauty and achieve your most becoming look
              with an eyelash extension or a lash lift treatment.
            </p> */}
          </div>
        </div>
        <Lashes />
        <Lifts />
        <HomeCTA />
      </main>
    </div>
  );
}
