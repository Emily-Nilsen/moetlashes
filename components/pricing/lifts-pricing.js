import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/outline';
import { PhoneIcon, ClockIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

const tintFeatures = [
  `Adds depth and a deep black colour`,
  `We use a safe, semi-permanent, black vegetable dye`,
  `Recommended for those who want an alternative to eyelash extensions`,
];
const liftFeatures = [
  `Eyelashes are curled and set into a styled position`,
  `It achieves a more defined lash line`,
  `Recommended for those who want an alternative to eyelash extensions`,
];
const liftTintFeatures = [
  `Eyelashes are curled and set into a styled position`,
  `It achieves a more defined lash line`,
  `Adds depth and a deep black colour`,
  `We use a safe, semi-permanent, black vegetable dye`,
  `Recommended for those who want an alternative to eyelash extensions`,
];

export default function LiftsPricing() {
  return (
    <div id="lifts" className="bg-rose-50">
      <div className="px-4 pt-12 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2 className="pb-2 text-lg font-semibold leading-6 tracking-wider uppercase text-rose-400">
            Pricing
          </h2>
          <h1 className="pb-2 text-4xl font-extrabold sm:text-5xl text-zinc-900 sm:text-center">
            Price tiers for lash{' '}
            <span className="italic font-medium text-rose-400">lifts </span>
            and tints
          </h1>
          <p className="max-w-4xl mx-auto mt-3 text-lg text-zinc-500 sm:mt-5 sm:text-xl">
            We use a perming treatment to curl your natural lashes and tint them
            using a safe, semi-permanent, black vegetable dye.
          </p>
        </div>
      </div>

      <div className="pb-12 mt-16 bg-zinc-50 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-rose-50 lg:h-2/3" />
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              {/* Tint only */}
              <div className="max-w-md mx-auto lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
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
                  className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg"
                >
                  <div className="flex flex-col flex-1">
                    <div className="px-6 py-10 bg-white">
                      <div>
                        <h3
                          className="text-2xl font-medium text-center text-zinc-800"
                          id="tier-tint"
                        >
                          Tint
                        </h3>
                        <div className="flex items-center justify-center mt-4">
                          <span className="flex items-start px-3 text-6xl tracking-tight text-rose-400">
                            <h1>
                              <span className="mt-2 mr-2 text-4xl font-medium">
                                $
                              </span>
                              <span className="font-extrabold">30</span>
                            </h1>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-6 border-t-2 border-rose-200 bg-zinc-50 sm:p-10 lg:p-6 xl:p-10">
                      <h2 className="flex pb-6 text-xs font-bold tracking-wide align-center text-rose-400">
                        <span>
                          <ClockIcon
                            className="w-4 h-4 mr-1 text-rose-300"
                            aria-hidden="true"
                          />
                        </span>
                        30 min
                      </h2>
                      <ul role="list" className="space-y-4">
                        {tintFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="flex-shrink-0 w-6 h-6 text-lime-500"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-normal text-zinc-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-full shadow">
                          <a
                            href="tel:61466609975"
                            className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-center transition duration-300 ease-in-out bg-white border border-transparent rounded-full text-rose-400 hover:bg-rose-300 hover:text-white group"
                            aria-describedby="tier-tint"
                          >
                            <p className="text-base font-medium">Tint</p>
                            <span>
                              <PhoneIcon
                                className="w-5 h-5 ml-3 text-rose-200 group-hover:text-rose-50"
                                aria-hidden="true"
                              />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* Lift & Tint */}
              <div className="max-w-lg mx-auto mt-10 lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.4,
                    ease: 'easeOut',
                  }}
                  className="relative z-10 rounded-lg shadow-xl"
                >
                  <div
                    className="absolute inset-0 border-2 rounded-lg pointer-events-none border-rose-400"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 top-0 transform translate-y-px">
                    <div className="flex justify-center transform -translate-y-1/2">
                      <span className="inline-flex px-4 py-1 text-sm font-semibold tracking-wider text-white uppercase rounded-full bg-rose-400">
                        Most popular
                      </span>
                    </div>
                  </div>
                  <div className="px-6 pt-12 pb-10 bg-white rounded-t-lg">
                    <div>
                      <h3
                        className="text-3xl font-semibold text-center text-zinc-800 sm:-mx-6"
                        id="tier-liftTint"
                      >
                        Lift & Tint
                      </h3>
                      <div className="flex items-center justify-center mt-4">
                        <span className="flex items-start px-3 text-6xl tracking-tight text-rose-400 sm:text-6xl">
                          <h1>
                            <span className="mt-2 mr-2 text-4xl font-medium">
                              $
                            </span>
                            <span className="font-extrabold">80</span>
                          </h1>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pt-10 pb-8 border-t-2 rounded-b-lg border-rose-200 bg-zinc-50 sm:px-10 sm:py-10">
                    <h2 className="flex pb-6 text-xs font-bold tracking-wide align-center text-rose-400">
                      <span>
                        <ClockIcon
                          className="w-4 h-4 mr-1 text-rose-300"
                          aria-hidden="true"
                        />
                      </span>
                      90 min
                    </h2>
                    <ul role="list" className="space-y-4">
                      {liftTintFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="flex-shrink-0 w-6 h-6 text-lime-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base font-normal text-zinc-500">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10">
                      <div className="rounded-full shadow">
                        <a
                          href="tel:61466609975"
                          className="flex items-center justify-center w-full px-6 py-4 text-xl font-medium leading-6 text-center text-white transition duration-300 ease-in-out border border-transparent rounded-full bg-rose-400 hover:bg-rose-500 group"
                          aria-describedby="tier-liftTint"
                        >
                          {' '}
                          <p>Lift & Tint</p>
                          <span>
                            <PhoneIcon
                              className="w-5 h-5 ml-3 text-rose-200 group-hover:text-rose-100"
                              aria-hidden="true"
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* Lift only */}
              <div className="max-w-md mx-auto mt-10 lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.5,
                    ease: 'easeOut',
                  }}
                  className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-r-lg"
                >
                  <div className="flex flex-col flex-1">
                    <div className="px-6 py-10 bg-white">
                      <div>
                        <h3
                          className="text-2xl font-medium text-center text-zinc-800"
                          id="tier-lift"
                        >
                          Lift
                        </h3>
                        <div className="flex items-center justify-center mt-4">
                          <span className="flex items-start px-3 text-6xl tracking-tight text-rose-400">
                            <h1>
                              <span className="mt-2 mr-2 text-4xl font-medium">
                                $
                              </span>
                              <span className="font-extrabold">60</span>
                            </h1>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-6 border-t-2 border-rose-200 bg-zinc-50 sm:p-10 lg:p-6 xl:p-10">
                      <h2 className="flex pb-6 text-xs font-bold tracking-wide align-center text-rose-400">
                        <span>
                          <ClockIcon
                            className="w-4 h-4 mr-1 text-rose-300"
                            aria-hidden="true"
                          />
                        </span>
                        60 min
                      </h2>
                      <ul role="list" className="space-y-4">
                        {liftFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="flex-shrink-0 w-6 h-6 text-lime-500"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-normal text-zinc-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-full shadow">
                          <a
                            href="tel:61466609975"
                            className="flex items-center justify-center w-full px-6 py-3 text-center transition duration-300 ease-in-out bg-white border border-transparent rounded-full text-rose-400 hover:bg-rose-300 hover:text-white group"
                            aria-describedby="tier-lift"
                          >
                            <p className="text-base font-medium">Lift</p>
                            <span>
                              <PhoneIcon
                                className="w-5 h-5 ml-3 text-rose-200 group-hover:text-rose-50"
                                aria-hidden="true"
                              />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
