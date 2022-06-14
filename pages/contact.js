import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import Map from '../components/contact/map';
import About from '../components/contact/about';
import useTranslation from 'next-translate/useTranslation';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  LocationMarkerIcon,
  PhoneIcon,
  ViewListIcon,
} from '@heroicons/react/outline';
import { motion } from 'framer-motion';
// To use the interceptor
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export default function Contact() {
  const { t } = useTranslation();
  // Specify a number between 0 and 1
  const { ref, inView } = useInView({
    threshold: 0.6,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: '-100vw' });
    }
  }, [inView, animation]);

  return (
    <Layout
      title={t('layout:contact_title')}
      description={t('layout:contact_description')}
      keywords={t('layout:contact_keywords')}
    >
      <main className="bg-white">
        <header className="relative bg-rose-300 pb-36">
          <div className="absolute inset-0">
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                type: 'fade',
              }}
              className="object-cover w-full h-full"
            >
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653665551/Mo%C3%ABt%20Lashes/general/moet-hero_gkhyyy.webp"
                alt="Moët Lashes"
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
          <Popover as="div" className="relative z-10">
            <div className="relative flex items-center justify-between px-4 pt-6 pb-2 mx-auto max-w-7xl sm:px-6 lg:px-8"></div>
          </Popover>

          <div className="relative max-w-md px-4 pt-32 pb-16 mx-auto mt-24 sm:max-w-3xl sm:px-6 md:mt-32 lg:max-w-7xl lg:px-8">
            <h1 className="max-w-lg text-5xl font-extrabold tracking-tight text-white md:text-6xl">
              {t('contact:get_in')}
              <span className="italic font-medium text-rose-200">
                {t('contact:touch')}
              </span>
            </h1>
            <p className="max-w-lg mt-6 text-xl text-zinc-200">
              We’d love to hear from you! Book in for an eyelash treatment
              today, or let us help answer any questions you have.
            </p>
          </div>
        </header>

        <section>
          <div className="bg-white">
            {/* Cards */}
            <section
              className="relative z-10 max-w-md px-4 mx-auto -mt-32 sm:max-w-3xl sm:px-6 md:max-w-7xl md:px-8"
              aria-labelledby="contact-heading"
            >
              <h2 className="sr-only" id="contact-heading">
                Contact us
              </h2>
              <div className="grid grid-cols-1 gap-y-6 sm:gap-y-12 md:grid-cols-3 md:gap-y-0 md:gap-x-8">
                {/* card 1 */}
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
                  className="flex flex-col bg-white shadow md:shadow-xl rounded-2xl"
                >
                  <div className="relative flex-1 px-6 pt-10 pb-8 md:px-8">
                    <div>
                      <h3 className="text-2xl font-medium leading-6 text-zinc-800">
                        {t('contact:opening')}
                        <span className="italic font-normal text-rose-400">
                          {t('contact:hours')}
                        </span>
                      </h3>
                      <div className="mt-2 text-base text-zinc-500">
                        <p>{t('footer:opening_hours')}</p>
                        <p className="mt-1">{t('footer:sundays')}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 transition duration-500 ease-in-out rounded-bl-2xl rounded-br-2xl md:px-8 group hover:bg-rose-400 bg-rose-50">
                    <a href="tel:61466609975" rel="noopener noreferrer">
                      <div className="flex group">
                        <div className="flex-shrink-0">
                          <PhoneIcon
                            className="w-6 h-6 transition duration-300 ease-in-out text-rose-400 group-hover:text-rose-100"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-3 text-base font-medium transition duration-300 ease-in-out text-zinc-700 group-hover:text-white">
                          <p>0466 609 975</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </motion.div>
                {/* card 2 */}
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
                  className="flex flex-col bg-white shadow md:shadow-xl rounded-2xl"
                >
                  <div className="relative flex-1 px-6 pt-10 pb-8 md:px-8">
                    <div>
                      <h3 className="text-2xl font-medium leading-6 text-zinc-800">
                        Find{' '}
                        <span className="italic font-normal text-rose-400">
                          us
                        </span>
                      </h3>
                      <div className="mt-2 text-base text-zinc-500">
                        <p>Shop 19 (Salon Elixir)</p>
                        <p className="mt-1">Orchid Plaza, 58 Lake St.</p>
                        <p className="mt-1">Cairns City, Qld 4870, Australia</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 transition duration-500 ease-in-out rounded-bl-2xl rounded-br-2xl md:px-8 group hover:bg-rose-400 bg-rose-50">
                    <a
                      href="https://goo.gl/maps/bZ8DPQgVW6a6Ux296"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="flex group">
                        <div className="flex-shrink-0">
                          <LocationMarkerIcon
                            className="w-6 h-6 transition duration-300 ease-in-out text-rose-400 group-hover:text-rose-100"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-3 text-base font-medium transition duration-300 ease-in-out text-zinc-700 group-hover:text-white">
                          <p>Moët Lashes</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </motion.div>
                {/* card 3 */}
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
                  className="flex flex-col bg-white shadow md:shadow-xl rounded-2xl"
                >
                  <div className="relative flex-1 px-6 pt-10 pb-8 md:px-8">
                    <div>
                      <h3 className="text-2xl font-medium leading-6 text-zinc-800">
                        Pricing{' '}
                        <span className="italic font-normal text-rose-400">
                          list
                        </span>
                      </h3>
                      <div className="mt-2 text-base text-zinc-500">
                        <p>Eyelash extensions</p>
                        <p className="mt-1">Lifts & tints</p>
                        <p className="mt-1">Infills</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 transition duration-500 ease-in-out rounded-bl-2xl rounded-br-2xl md:px-8 group hover:bg-rose-400 bg-rose-50">
                    <Link href="/pricing" passHref>
                      <a>
                        <div className="flex group">
                          <div className="flex-shrink-0">
                            <ViewListIcon
                              className="w-6 h-6 transition duration-300 ease-in-out text-rose-400 group-hover:text-rose-100"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="ml-3 text-base font-medium transition duration-300 ease-in-out text-zinc-700 group-hover:text-white">
                            <p>Pricing</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </section>

            <Map />
          </div>
          <About />
        </section>
      </main>
    </Layout>
  );
}
