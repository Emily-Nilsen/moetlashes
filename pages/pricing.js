import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';
import FullSet from '../components/pricing/full-set';
import MegaSet from '../components/pricing/mega-set';
import FullInfills from '../components/pricing/full-infills';
import MegaInfills from '../components/pricing/mega-infills';
import Lifts from '../components/pricing/lifts-pricing';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  CheckIcon as CheckIconSolid,
  ChevronDownIcon,
} from '@heroicons/react/solid';
import { PhoneIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  const { t } = useTranslation();
  const tabs = [
    {
      name: `Full Set`,
      features: [
        {
          component: <FullSet />,
        },
      ],
    },
    {
      name: `Mega Set`,
      features: [
        {
          component: <MegaSet />,
        },
      ],
    },
    {
      name: `Full Infills`,
      features: [
        {
          component: <FullInfills />,
        },
      ],
    },
    {
      name: `Mega Infills`,
      features: [
        {
          component: <MegaInfills />,
        },
      ],
    },
  ];

  return (
    <Layout
      title={t('layout:pricing_title')}
      description={t('layout:pricing_description')}
      keywords={t('layout:pricing_keywords')}
      id="extensions"
      className="bg-white"
    >
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
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653665550/Mo%C3%ABt%20Lashes/general/moetlashes-img-4_qqoqgb.webp"
                alt="Eyelash extensions hero image"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
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
            <h1 className="pt-20 mt-10 -mb-10 text-5xl font-extrabold tracking-tight text-center sm:text-6xl lg:text-7xl">
              <span className="text-white">Our </span>
              <span className="italic font-medium text-rose-200">pricing</span>
            </h1>
          </div>
        </div>
      </div>
      {/* Pricing with four tiers and toggle */}
      <div className="py-12 bg-rose-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col align-center">
            <h2 className="pb-2 text-base font-semibold leading-6 tracking-wider text-center uppercase sm:text-lg text-rose-400">
              price list
            </h2>
            <h1 className="text-4xl font-extrabold text-center sm:text-5xl text-zinc-900">
              Premium eyelash extensions{' '}
            </h1>
            <p className="max-w-4xl mx-auto mt-5 text-lg text-center text-zinc-500 sm:text-xl">
              Choose between our Full Set or our ultimate Mega Set treatments.
              We also offer an infill option for customers returning within
              three weeks of their last visit.
            </p>
          </div>

          {/* Extensions and infills pricing */}

          <section
            aria-labelledby="features-heading"
            className="py-4 mx-auto overflow-x-hidden max-w-7xl sm:py-8 sm:px-2 lg:px-8"
          >
            <div className="max-w-2xl px-0 mx-auto lg:px-0 lg:max-w-none">
              <Tab.Group as="div" className="mt-4">
                <div className="relative self-center mt-6 bg-rose-200 rounded-full p-0.5 flex sm:mt-8 w-full sm:w-fit mx-auto pb-[3px]">
                  <Tab.List className="flex justify-between w-full -mb-px lg:justify-evenly">
                    {tabs.map((tab) => (
                      <Tab
                        key={tab.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? 'focus:outline-none focus:ring-2 focus:ring-rose-500 focus:z-10'
                              : 'border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300 focus:outline-none focus:ring-0 bg-rose-200',
                            'relative w-1/2 py-2 sm:text-sm text-xs font-medium bg-white rounded-full shadow-none text-zinc-800 border-rose-200 whitespace-nowrap sm:w-auto sm:px-8'
                          )
                        }
                      >
                        {tab.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>

                <Tab.Panels as={Fragment}>
                  {tabs.map((tab) => (
                    <Tab.Panel key={tab.name}>
                      {tab.features.map((feature) => (
                        <div key={feature.name}>
                          <div>{feature.component}</div>
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </section>
        </div>
      </div>

      {/* Lifts Hero card */}
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
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653665550/Mo%C3%ABt%20Lashes/general/lift-prices-hero_ghdq6p.webp"
                alt="Eyelash extensions hero image"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                priority={true}
                unoptimized={true}
              />
            </motion.div>
            <div
              className="absolute inset-0 opacity-50 bg-gradient-to-b from-zinc-800 to-t"
              aria-hidden="true"
            />
          </div>
          <div className="relative px-4 py-24 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="pt-20 text-5xl font-extrabold tracking-tight text-center mt-14 -mb-14 sm:text-6xl lg:text-7xl">
              <span className="text-white">Lift & </span>
              <span className="italic font-medium text-rose-200">style</span>
            </h1>
          </div>
        </div>
      </div>
      <Lifts />
    </Layout>
  );
}
