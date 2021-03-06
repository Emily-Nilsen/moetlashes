import Image from 'next/image';
import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import HomeCTA from '../components/home/home-cta';
import Instagram from '../components/home/instagram';
import CustomerReviews from '../components/home/customer-reviews';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, PhoneIcon, XIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';

export default function Home() {
  const { t } = useTranslation();

  const features = [
    {
      name_start: `${t('home:eyelash')}`,
      name_end: `${t('home:extensions')}`,
      description: `${t('home:extensions_text')}`,
      href: `/lashes`,
      link_name: `${t('home:extensions')}`,
      icon: `https://res.cloudinary.com/dt3k2apqd/image/upload/v1653665549/Mo%C3%ABt%20Lashes/SVGs/icon-1_fefnul.svg`,
    },
    {
      name_start: `${t('home:lash_lift')}`,
      name_end: `${t('home:style')}`,
      description: `${t('home:lift_text')}`,
      href: `/lashes/#lifts`,
      link_name: `${t('home:lifts')}`,
      icon: `https://res.cloudinary.com/dt3k2apqd/image/upload/v1653665549/Mo%C3%ABt%20Lashes/SVGs/icon-2_rbqdgd.svg`,
    },
    {
      name_start: `${t('home:aftercare')}`,
      name_end: `${t('home:advice')}`,
      description: `${t('home:aftercare_text')}`,
      href: `/lashes/#aftercare`,
      link_name: `${t('home:faqs')}`,
      icon: `https://res.cloudinary.com/dt3k2apqd/image/upload/v1653665549/Mo%C3%ABt%20Lashes/SVGs/icon-3_qp6h7v.svg`,
    },
  ];

  return (
    <Layout
      title={t('layout:home_title')}
      description={t('layout:home_description')}
      keywords={t('layout:home_keywords')}
    >
      <div className="pb-6 bg-rose-50 sm:pb-10">
        <header className="relative bg-zinc-800 pb-36">
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
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653665549/Mo%C3%ABt%20Lashes/general/moe-hero_qq11pi.webp"
                alt="Mo??t Lashes"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                unoptimized={true}
                priority={true}
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
            <h2 id="features-heading" className="font-medium text-rose-200">
              {t('home:cairns_city')}
            </h2>
            <h3 className="py-6 text-6xl text-white">
              <span className="font-bold">{t('home:eyelash')}</span>
              <span className="italic font-medium text-rose-200">
                {t('home:extensions')}
              </span>
            </h3>
            <p className="max-w-md mt-3 text-lg font-normal text-white sm:text-xl md:mt-5 md:max-w-xl">
              {t('home:hero_text_start')}{' '}
              <span className="font-medium">{t('home:nagaraku')}</span>{' '}
              {t('home:hero_text_end')}
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
                Cairns City eyelash extensions
              </h2>
              <div className="grid grid-cols-1 gap-y-12 sm:gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                {features.map((feature, i) => (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      initialDelay: 0.3,
                      duration: 0.7,
                      delay: i * 0.3,
                      ease: 'easeOut',
                    }}
                    key={i}
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
                        <span className="italic font-normal text-rose-400">
                          {feature.name_end}
                        </span>
                      </h3>
                      <p className="mt-4 text-base text-zinc-500">
                        {feature.description}
                      </p>
                    </div>
                    <Link href={feature.href} passHref>
                      <div className="p-6 text-base font-medium capitalize transition duration-300 ease-in-out cursor-pointer text-rose-400 bg-rose-50 rounded-bl-2xl rounded-br-2xl md:px-8 hover:text-white hover:bg-rose-300">
                        <a>
                          {feature.link_name}
                          <span aria-hidden="true"> &rarr;</span>
                        </a>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
          {/* Lashes */}
          <div className="px-6 py-12 mx-auto max-w-7xl sm:py-20 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="max-w-3xl mx-auto mt-1 text-4xl font-normal text-rose-400 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Treat yourself,
                <span className="italic font-semibold text-zinc-900">
                  {' '}
                  enhance
                </span>{' '}
                <span className="block">your eyes.</span>
                <span className="italic font-normal"></span>
              </h1>
            </div>
          </div>
          <HomeCTA />
          <Instagram />
          <CustomerReviews />
        </main>
      </div>
    </Layout>
  );
}
