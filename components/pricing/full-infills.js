import useTranslation from 'next-translate/useTranslation';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  CheckIcon as CheckIconSolid,
  ChevronDownIcon,
} from '@heroicons/react/solid';
import { PhoneIcon, ClockIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function FullInfills() {
  const { t } = useTranslation();

  const tiers = [
    {
      name: `Classic Full Infills`,
      price: 50,
      description: `For customers returning within three weeks of their Classic Full Set treatment.`,
      features: [
        `${t('pricing:classic_result_1')}`,
        `${t('pricing:classic_result_2')}`,
      ],
    },
    {
      name: `Double Full Infills`,
      price: 60,
      description: `For customers returning within three weeks of their Double Full Set treatment.`,
      features: [
        `${t('pricing:double_result_1')}`,
        `${t('pricing:double_result_2')}`,
      ],
    },
    {
      name: `Hybrid Full Infills`,
      price: 70,
      description: `For customers returning within three weeks of their Hybrid Full Set treatment.`,
      features: [
        `${t('pricing:hybrid_result_1')}`,
        `${t('pricing:hybrid_result_2')}`,
      ],
    },
    {
      name: `Volume Full Infills`,
      price: 80,
      description: `For customers returning within three weeks of their Volume Full Set treatment.`,
      features: [
        `${t('pricing:volume_result_1')}`,
        `${t('pricing:volume_result_2')}`,
      ],
    },
  ];

  return (
    <div>
      <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
        {tiers.map((tier, i) => (
          <motion.div
            // initial={{
            //   opacity: 0,
            //   y: 50,
            //   transition: { delay: 2 },
            // }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            // transition={{
            //   initialDelay: 2,
            //   duration: 0.7,
            //   delay: i * 0.3,
            //   ease: 'easeOut',
            // }}
            key={i}
            className="bg-white border divide-y rounded-lg shadow-lg border-rose-200 divide-rose-200"
          >
            <div className="p-6">
              <h1 className="text-3xl font-medium leading-6 text-zinc-800">
                {tier.name}
              </h1>
              <h2 className="flex pt-4 text-xs font-bold tracking-wide align-center text-rose-300">
                <span>
                  <ClockIcon
                    className="w-4 h-4 mr-1 text-rose-200"
                    aria-hidden="true"
                  />
                </span>
                60 min
              </h2>
              <p className="mt-4 text-sm text-zinc-500">{tier.description}</p>
              <h1 className="mt-8">
                <span className="flex items-start text-6xl tracking-tight text-zinc-800">
                  <h1>
                    <span className="mt-2 mr-2 text-4xl font-medium">$</span>
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
  );
}