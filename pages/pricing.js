import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';
import Lifts from '../components/pricing/lifts-pricing';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  CheckIcon as CheckIconSolid,
  ChevronDownIcon,
} from '@heroicons/react/solid';
import { PhoneIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  const { t } = useTranslation();

  const tiers = [
    {
      name: `${t('pricing:classic')}`,
      price: 60,
      description: `${t('pricing:classic_description')}`,
      features: [
        `${t('pricing:classic_result_1')}`,
        `${t('pricing:classic_result_2')}`,
      ],
    },
    {
      name: `${t('pricing:double')}`,
      price: 70,
      description: `${t('pricing:double_description')}`,
      features: [
        `${t('pricing:double_result_1')}`,
        `${t('pricing:double_result_2')}`,
      ],
    },
    {
      name: `${t('pricing:hybrid')}`,
      price: 80,
      description: `${t('pricing:hybrid_description')}`,
      features: [
        `${t('pricing:hybrid_result_1')}`,
        `${t('pricing:hybrid_result_2')}`,
      ],
    },
    {
      name: `${t('pricing:volume')}`,
      price: 90,
      description: `${t('pricing:volume_description')}`,
      features: [
        `${t('pricing:volume_result_1')}`,
        `${t('pricing:volume_result_2')}`,
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
        <div className="absolute inset-x-0 bottom-0 bg-gray-100 h-1/2" />

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
                src="/static/home/moetlashes-img-4.webp"
                alt="Eyelash extensions hero image"
                width={1000}
                height={697}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                priority={true}
                blurDataURL="data:..."
                placeholder="blur"
              />
            </motion.div>
            <div
              className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-t"
              aria-hidden="true"
            />
          </div>
          <div className="relative px-4 py-24 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="pt-20 mt-10 -mb-10 text-5xl font-extrabold tracking-tight text-left sm:text-6xl lg:text-7xl sm:text-center">
              <span className="text-white">Our </span>
              <span className="italic font-medium text-rose-200">pricing</span>
            </h1>
          </div>
        </div>
      </div>
      {/* Pricing with four tiers and toggle */}
      <div className="py-16 bg-rose-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h2 className="pb-2 text-base font-semibold leading-6 tracking-wider uppercase sm:text-lg sm:text-center text-rose-400">
              price tiers
            </h2>
            <h1 className="text-5xl font-extrabold text-zinc-900 sm:text-center">
              Pricing for premium eyelash{' '}
              <span className="italic font-medium text-rose-400">
                extensions{' '}
              </span>
            </h1>
            <p className="max-w-4xl mx-auto mt-5 text-lg text-zinc-500 sm:text-center sm:text-xl">
              Our premium{' '}
              <span className="font-medium text-rose-400">Nagaraku</span>{' '}
              eyelashes’ unique material ensures that each lash is soft,
              lightweight and flat at the base for maximum adhesion. We
              skillfully attach each ellipse eyelash to your individual lashes
              for an entirely natural and stunning look.
            </p>
          </div>
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
            {tiers.map((tier, i) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 50,
                  transition: { delay: 2 },
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  initialDelay: 2,
                  duration: 0.7,
                  delay: i * 0.3,
                  ease: 'easeOut',
                }}
                key={i}
                className="bg-white border divide-y rounded-lg shadow-lg border-rose-200 divide-rose-200"
              >
                <div className="p-6">
                  <h1 className="text-xl font-medium leading-6 text-zinc-800">
                    {tier.name}
                  </h1>
                  <p className="mt-4 text-sm text-zinc-500">
                    {tier.description}
                  </p>
                  <h1 className="mt-8">
                    <span className="flex items-start text-5xl tracking-tight text-zinc-800">
                      <h1>
                        <span className="mt-2 mr-2 text-3xl font-medium">
                          $
                        </span>
                        <span className="font-extrabold">{tier.price}</span>
                      </h1>
                    </span>
                  </h1>
                  <a
                    href="tel:61466609975"
                    className="flex items-center justify-center w-full px-6 py-3 mt-8 text-sm font-semibold text-center text-white transition duration-300 ease-in-out border border-transparent rounded-full shadow bg-rose-400 hover:bg-rose-500 group"
                  >
                    {' '}
                    <p className="text-base font-medium">{tier.name}</p>
                    <span>
                      <PhoneIcon
                        className="w-5 h-5 ml-3 text-rose-200 group-hover:text-rose-100"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </div>
                <div className="px-6 pt-6 pb-8">
                  <h2 className="text-xs font-bold tracking-wide uppercase text-zinc-800">
                    The result
                  </h2>
                  <ul role="list" className="mt-6 space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex space-x-3">
                        <CheckIconSolid
                          className="flex-shrink-0 w-5 h-5 text-lime-500"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-zinc-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lifts Hero card */}
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 bg-gray-100 h-1/2" />

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
                src="/static/home/lift-prices-hero.webp"
                alt="Eyelash extensions hero image"
                width={1000}
                height={697}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                priority={true}
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
