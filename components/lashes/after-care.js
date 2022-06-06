import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Tab } from '@headlessui/react';
import Step1 from './step-1';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function AfterCare() {
  const { t } = useTranslation();
  const tabs = [
    {
      name: `1`,
      features: [
        {
          component: <Step1 />,
        },
      ],
    },
    {
      name: `2`,
      features: [
        {
          // component: <MegaSet />,
        },
      ],
    },
    {
      name: `3`,
      features: [
        {
          // component: <MegaSet />,
        },
      ],
    },
    {
      name: `4`,
      features: [
        {
          // component: <MegaSet />,
        },
      ],
    },
    {
      name: `5`,
      features: [
        {
          // component: <MegaSet />,
        },
      ],
    },
    {
      name: `6`,
      features: [
        {
          // component: <MegaSet />,
        },
      ],
    },
    {
      name: `7`,
      features: [
        {
          // component: <MegaSet />,
        },
      ],
    },
    {
      name: `8`,
      features: [
        {
          // component: <MegaSet />,
        },
      ],
    },
  ];

  return (
    <section className="bg-rose-50">
      <div className="px-4 pt-16 mx-auto max-w-7xl sm:pt-24 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* <h2 className="text-base font-semibold tracking-wide uppercase text-rose-500">
          Pricing
        </h2> */}
          <h1 className="mt-1 text-4xl font-extrabold text-zinc-800 sm:text-5xl sm:tracking-tight lg:text-6xl">
            <span className="italic text-rose-400">8 </span>
            Aftercare Steps
          </h1>
          <p className="max-w-xl mx-auto mt-5 text-xl text-zinc-500">
            Keep your new eyelash extensions looking long, voluminous and
            perfectly manicured with these eight easy steps!
          </p>
          <section
            aria-labelledby="features-heading"
            className="z-20 py-4 mx-auto max-w-7xl sm:py-8 sm:px-2 lg:px-8"
          >
            <div className="max-w-2xl px-0 mx-auto lg:px-0 lg:max-w-none">
              <Tab.Group as="div" className="mt-4">
                <div className="relative self-center mt-6 bg-t rounded-full p-1 px-1.2 flex sm:mt-8 w-fit min-w-[238px] mx-auto pb-[4px]">
                  <Tab.List className="flex justify-between w-full -mb-px lg:justify-evenly">
                    {tabs.map((tab) => (
                      <Tab
                        key={tab.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? 'focus:outline-none focus:ring-1 focus:ring-rose-400 focus:z-10 border-rose-400 border-2'
                              : ' text-zinc-500 hover:text-zinc-700 hover:border-rose-300 focus:outline-none focus:ring-0 bg-rose-100',
                            'relative w-1/2 py-2 text-sm font-medium rounded-full shadow-none text-zinc-800 border-rose-200 whitespace-nowrap sm:w-auto sm:px-1 bg-white border-2'
                          )
                        }
                      >
                        {' '}
                        <p className="px-3 sm:px-4 sm:py-2 mr-0.5 ml-0.5 rounded-full bg-t">
                          {tab.name}
                        </p>
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
    </section>
  );
}
