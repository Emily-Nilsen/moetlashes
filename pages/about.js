import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';
import Testimonials from '../components/about/testimonials';
import AboutCTA from '../components/about/about-cta';
import { BadgeCheckIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useTranslation();

  return (
    <Layout
      title={t('layout:about_title')}
      description={t('layout:about_description')}
      keywords={t('layout:about_keywords')}
    >
      <div>
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
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653665549/Mo%C3%ABt%20Lashes/general/moetlashes-about-hero_u5s6ec.webp"
                  alt="Eyelash extensions hero image"
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
            <div className="relative px-4 py-24 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="pt-20 mt-24 -mb-16 text-4xl font-bold tracking-tight text-left md:mt-48 sm:text-5xl lg:text-6xl">
                <span className="text-white">{t('about:title_1')}</span>
                <span className="italic font-medium text-rose-200">
                  {t('about:title_2')}
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* About Moe */}
      <div className="overflow-hidden">
        <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="absolute top-0 bottom-0 hidden w-screen bg-rose-50 lg:block left-3/4" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="text-base font-normal tracking-wide text-rose-400">
                {t('about:orchid_plaza')}
              </h2>
              <h3 className="py-6 text-6xl text-zinc-800">
                <span className="font-bold">{t('about:meet')} </span>
                <span className="italic font-medium text-rose-400">
                  {t('about:moe')}
                </span>
              </h3>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
                <figure className="pb-10 lg:-mt-40 lg:pb-0">
                  <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      delay: 0.3,
                      duration: 0.8,
                      type: 'fade',
                    }}
                    className="flex justify-center"
                  >
                    <Image
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653665513/Mo%C3%ABt%20Lashes/general/moe_ve5zpx.png"
                      alt="Moe"
                      width={400}
                      height={400}
                      layout="intrinsic"
                      objectFit="contain"
                      objectPosition="center"
                      priority={true}
                      unoptimized={true}
                    />
                  </motion.div>
                  <figcaption className="flex justify-center mt-3 text-sm text-zinc-800">
                    <BadgeCheckIcon
                      className="flex-none w-5 h-5 text-rose-300"
                      aria-hidden="true"
                    />
                    <span className="ml-2 font-medium">
                      {t('about:fig_caption')}
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="mx-auto text-base max-w-prose lg:max-w-none">
                <p className="text-lg text-zinc-500">{t('about:sent_1')}</p>
              </div>
              <div className="mx-auto mt-5 prose text-zinc-500 prose-rose lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>
                  {t('about:sent_2_start')}{' '}
                  <span className="font-medium text-rose-400">
                    {t('about:professional')}
                  </span>
                  {t('about:sent_2_end')}
                </p>
                <p>
                  {t('about:sent_3_start')}{' '}
                  <span className="font-medium text-rose-400">
                    {t('about:cairns')}
                  </span>
                  {t('about:sent_3_end')}{' '}
                </p>
                <p>{t('about:sent_4')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <AboutCTA />
    </Layout>
  );
}
