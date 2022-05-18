import Image from 'next/image';
import Link from 'next/link';
import Testimonials from '../components/about/testimonials';
import AboutCTA from '../components/about/about-cta';
import { BadgeCheckIcon } from '@heroicons/react/solid';

export default function About() {
  return (
    <section>
      <div>
        {/* Hero card */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 bg-gray-100 h-1/2" />

          <div className="relative">
            <div className="absolute inset-0">
              <div className="relative object-cover w-full h-full">
                <Image
                  src="/static/home/moetlashes-about-hero.webp"
                  alt="Eyelash extensions hero image"
                  width={1000}
                  height={697}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div
                className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-t"
                aria-hidden="true"
              />
            </div>
            <div className="relative px-4 py-24 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="pt-20 mt-24 -mb-16 text-4xl font-bold tracking-tight text-left md:mt-48 sm:text-5xl lg:text-6xl">
                <span className="text-white">Professional, skilled, </span>
                <span className="italic font-normal text-rose-200">
                  experienced
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
                Orchid Plaza
              </h2>
              <h3 className="py-6 text-6xl text-zinc-800">
                <span className="font-bold">Meet </span>
                <span className="italic font-normal">Moe</span>
              </h3>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
                <figure className="pb-10 lg:-mt-40 lg:pb-0">
                  <div className="flex justify-center">
                    <Image
                      src="/static/moe.png"
                      alt="Moe"
                      width={400}
                      height={400}
                      layout="intrinsic"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </div>
                  <figcaption className="flex justify-center mt-3 text-sm text-zinc-800">
                    <BadgeCheckIcon
                      className="flex-none w-5 h-5 text-rose-300"
                      aria-hidden="true"
                    />
                    <span className="ml-2 font-medium">
                      Moe, Lash Extension Professional
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="mx-auto text-base max-w-prose lg:max-w-none">
                <p className="text-lg text-zinc-500">
                  Making you look and feel good is Moe*s passion, and this shows
                  on every client that walks out of our beauty salon.
                </p>
              </div>
              <div className="mx-auto mt-5 prose text-zinc-500 prose-rose lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>
                  Through ongoing education and training, Moe stays updated on
                  the latest styles and techniques to bring you the best
                  professional lash extensions.
                </p>
                <p>
                  Moe dedicates herself to providing you with the best eyelash
                  extensions and lash lifts in Cairns, emphasising
                  professionalism, quality and artistic flair.
                </p>
                <p>
                  Our goal at Moët Lashes is to bring out your best and have you
                  leave our salon feeling confident and glamorous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <AboutCTA />
    </section>
  );
}
