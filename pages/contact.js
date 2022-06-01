import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { LocationMarkerIcon, PhoneIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';

export default function Contact() {
  const { t } = useTranslation();

  const faqs = [
    {
      id: 1,
      question: `${t('contact:faq_1')}`,
      sent_1: `${t('contact:answer_1_1')}`,
      sent_2: `${t('contact:answer_1_2')}`,
    },
    {
      id: 2,
      question: `${t('contact:faq_2')}`,
      sent_1: `${t('contact:answer_2_1')}`,
      sent_2: `${t('contact:answer_2_2')}`,
    },
    {
      id: 3,
      question: `${t('contact:faq_3')}`,
      sent_1: `${t('contact:answer_3_1')}`,
      sent_2: `${t('contact:answer_3_2')}`,
      sent_3: `${t('contact:answer_3_3')}`,
      sent_4: `${t('contact:answer_3_4')}`,
      sent_5: `${t('contact:answer_3_5')}`,
      sent_6: `${t('contact:answer_3_6')}`,
    },
  ];

  return (
    <Layout
      title={t('layout:contact_title')}
      description={t('layout:contact_description')}
      keywords={t('layout:contact_keywords')}
      className="bg-rose-50"
    >
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
            We’d love to hear from you! Book in for an eyelash treatment today,
            or let us help answer any questions you have.
          </p>
        </div>
      </header>

      <main>
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
                className="flex flex-col bg-white shadow-xl rounded-2xl"
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
                        <p>+61 (0) 466 609 975</p>
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
                className="flex flex-col bg-white shadow-xl rounded-2xl"
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
                  delay: 0.5,
                  ease: 'easeOut',
                }}
                className="flex flex-col shadow-xl bg-rose-400 rounded-2xl"
              >
                <motion.div
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  initial={{ opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    type: 'fade',
                  }}
                  className="relative flex-1 object-cover object-center overflow-hidden rounded-2xl aspect-w-12 aspect-h-7 hover:mix-blend-luminosity"
                >
                  <a
                    href="https://goo.gl/maps/bZ8DPQgVW6a6Ux296"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="transition duration-700 ease-in-out"
                  >
                    <Image
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653665499/Mo%C3%ABt%20Lashes/general/map-rose_wldetk.webp"
                      alt="Attaching individual eyelash extensions"
                      unoptimized={true}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      priority={true}
                    />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* FAQ offset */}
          <div
            id="faqs"
            className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-20 lg:px-8"
          >
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="space-y-4">
                <h3 className="text-4xl font-extrabold text-zinc-800">
                  {t('contact:frequently')}
                  <span className="italic font-medium text-rose-400">
                    {t('contact:questions')}{' '}
                  </span>
                </h3>
                <p className="text-lg text-zinc-500">
                  Can’t find the answer you’re looking for? Reach out and{' '}
                  <a
                    href="tel:61466609975"
                    rel="noopener noreferrer"
                    className="font-medium transition duration-300 ease-in-out text-rose-400 hover:text-rose-500 hover:underline"
                  >
                    contact
                  </a>{' '}
                  us.
                </p>
              </div>
              <div className="mt-12 lg:mt-0 lg:col-span-2">
                <dl className="space-y-12">
                  {faqs.map((faq) => (
                    <div key={faq.id}>
                      <dt className="text-lg font-medium leading-6 text-zinc-800">
                        {faq.question}
                      </dt>
                      <dd className="mt-4 text-base text-zinc-500">
                        {faq.sent_1}
                      </dd>
                      <dd className="mt-4 text-base text-zinc-500">
                        {faq.sent_2}
                      </dd>
                      <dd className="mt-4 text-base text-zinc-500">
                        {faq.sent_3}
                      </dd>
                      <dd className="mt-4 text-base text-zinc-500">
                        {faq.sent_4}
                      </dd>
                      <dd className="mt-4 text-base text-zinc-500">
                        {faq.sent_5}
                      </dd>
                      <dd className="mt-4 text-base text-zinc-500">
                        {faq.sent_6}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
