import Image from 'next/image';
import Layout from '../components/layout';
import Features from '../components/home/features';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-zinc-800">
      <section aria-labelledby="features-heading" className="relative">
        <div className="relative overflow-hidden aspect-w-3 aspect-h-2 sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
          <div className="object-cover object-center w-full h-full lg:h-full lg:w-full">
            <Image
              src="/static/home/moet-hero.webp"
              alt="Moët Lashes"
              width={1500}
              height={1000}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>

        <div className="max-w-2xl px-4 pt-16 pb-24 mx-auto sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="lg:col-start-2">
            <h2 id="features-heading" className="font-medium text-white">
              Cairns City
            </h2>
            <h3 className="py-6 text-6xl text-rose-200">
              <span className="font-bold">Eyelash </span>
              <span className="italic font-normal">Extensions</span>
            </h3>
            <p className="max-w-md mx-auto mt-3 text-lg font-light text-white sm:text-xl md:mt-5 md:max-w-3xl">
              We skillfully attach premium Nagaraku eyelashes to your individual
              lashes for an entirely natural and stunning look. We also offer
              lash lifts and tints.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md">
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium transition duration-300 ease-in-out border border-transparent rounded-full bg-rose-200 text-zinc-800 hover:bg-rose-300 md:py-4 md:text-lg md:px-10 hover:text-zinc-900"
                >
                  Lashes
                </a>
              </div>
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3">
                <Link href="/pricing" passHref>
                  <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium transition duration-300 ease-in-out border rounded-full text-rose-200 border-rose-200 bg-t hover:bg-zinc-900 md:py-4 md:text-lg md:px-10 hover:text-rose-100">
                    Pricing
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Features />
    </div>
  );
}
