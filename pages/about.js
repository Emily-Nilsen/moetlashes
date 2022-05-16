import Image from 'next/image';
import Link from 'next/link';
import Testimonials from '../components/about/testimonials';
import AboutCTA from '../components/about/about-cta';
import { BadgeCheckIcon } from '@heroicons/react/solid';

export default function About() {
  return (
    <section>
      <div className="overflow-hidden bg-rose-50">
        <div className="relative px-4 py-16 pt-32 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="absolute top-0 bottom-0 hidden w-screen bg-rose-100 lg:block left-3/4" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div className="pt-16 lg:pt-0">
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
                <figure className="pb-10 lg:-mt-16 lg:pb-0">
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
