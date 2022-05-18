import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

export default function Testimonials() {
  return (
    <div className="pt-12 bg-zinc-800 sm:pt-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="py-6 text-4xl text-rose-200 sm:text-5xl">
            <span className="font-bold">
              What our customers are saying about{' '}
            </span>
            <span className="italic font-normal text-white">us</span>
          </h3>
        </div>
      </div>
      <div className="mt-10 bg-rose-50 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-zinc-800" />
          <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="bg-white rounded-lg shadow-lg md:grid md:grid-cols-3">
                <div className="flex flex-col p-10 text-center border-b border-rose-50 md:border-0 md:border-r">
                  <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
                    <div className="relative text-lg font-normal text-zinc-600 md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 w-8 h-8 transform -translate-x-3 -translate-y-2 text-rose-200"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative text-left">
                        Moe is the loveliest lady! She really knows her
                        eyelashes!! My lashes always come out just how I want
                        them, and Moe*s lash service is the best I have come
                        across in Cairns. Recommend 100%.
                      </p>
                    </div>
                    <footer className="mt-8">
                      <div className="flex items-start">
                        <div className="inline-flex flex-shrink-0 border-2 rounded-full border-rose-300">
                          <Image
                            className="w-12 h-12 rounded-full"
                            src="/static/flowers-1.jpeg"
                            alt="Su Lisa Miles"
                            width={48}
                            height={48}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-base font-medium text-rose-400">
                            Su Lisa Miles
                          </div>
                          <div className="text-base font-medium text-rose-300">
                            Cairns City
                          </div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
                {/* Testimonial 2 */}
                <div className="flex flex-col p-10 text-center border-t border-b border-rose-50 sm:border-0 sm:border-l sm:border-r">
                  <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
                    <div className="relative text-lg font-normal text-zinc-600 md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 w-8 h-8 transform -translate-x-3 -translate-y-2 text-rose-200"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative text-left">
                        I*ve tried many eyelash studios in Cairns, and Moët
                        Lashes is now the only salon I use. The customer service
                        is excellent, and the eyelash extensions are always done
                        beautifully with the right volume and length!
                      </p>
                    </div>
                    <footer className="mt-8">
                      <div className="flex items-start">
                        <div className="inline-flex flex-shrink-0 border-2 rounded-full border-rose-300">
                          <Image
                            className="w-12 h-12 rounded-full"
                            src="/static/flowers-2.jpeg"
                            alt="Asami Burke"
                            width={48}
                            height={48}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-base font-medium text-rose-400">
                            Asami Burke
                          </div>
                          <div className="text-base font-medium text-rose-300">
                            Edge Hill
                          </div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
                {/* Testimonial 3 */}
                <div className="flex flex-col p-10 text-center border-t border-rose-100 md:border-0 md:border-l">
                  <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
                    <div className="relative text-lg font-normal text-zinc-600 md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 w-8 h-8 transform -translate-x-3 -translate-y-2 text-rose-200"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative text-left">
                        I couldn*t be happier with my eyelash extensions!! My
                        eyelashes look really beautiful and natural, and they
                        last a long time!! I can*t wait to come back to Moët
                        Lashes!
                      </p>
                    </div>
                    <footer className="mt-8">
                      <div className="flex items-start">
                        <div className="inline-flex flex-shrink-0 border-2 rounded-full border-rose-300">
                          <Image
                            className="w-12 h-12 rounded-full"
                            src="/static/flowers-3.jpeg"
                            alt="Catie McCullash"
                            width={48}
                            height={48}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-base font-medium text-rose-400">
                            Catie McCullash
                          </div>
                          <div className="text-base font-medium text-rose-300">
                            Cairns City
                          </div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
