import Image from 'next/image';
import Link from 'next/link';
// import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';
import AboutMoe from '../../components/about/about-moe';
import Moe from '../../components/about/moe';
import AboutCTA from '../../components/about/about-cta';
import { BadgeCheckIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
// To use the interceptor
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

export default function About() {
  const { t } = useTranslation();

  return (
    <section>
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
                className="absolute inset-0 bg-gradient-to-t from-zinc-800 to-t mix-blend-hard-light"
                aria-hidden="true"
              />
            </div>
            <div className="relative px-4 py-24 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="pt-20 mt-24 -mb-16 text-4xl font-bold tracking-tight text-center md:mt-48 sm:text-5xl lg:text-6xl">
                <span className="text-white">{t('contact:title_1')}</span>
                <span className="italic font-medium text-rose-200">
                  {t('contact:title_2')}
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <AboutMoe />
      <Moe />
      <AboutCTA />
    </section>
  );
}
