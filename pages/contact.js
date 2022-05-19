import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { LocationMarkerIcon, PhoneIcon } from '@heroicons/react/outline';

const faqs = [
  {
    id: 1,
    question: `How long does an average eyelash extension or lash lift session take?`,
    sent_1: `We use tailored Nagaraku eyelash glue to attach the ellipse eyelashes to each of your natural lashes. Since individual eyelash extensions are very delicate, initial eyelash extension treatments last for approximately 90 minutes.`,
    sent_2: `Lash lifts involve a perming treatment to curl the eyelashes and then setting them in position. A lash lift treatment takes approximately 60 to 90 minutes to complete.`,
  },
  {
    id: 2,
    question: `Will eyelash extensions damage my natural lashes?`,
    sent_1: `It is a common misconception that eyelash extensions damage your natural lashes. However, correct minimal glue application at the natural lash base, 0.5mm-1mm away from the eyelid, will not harm your natural lashes.`,
    sent_2: `Since your eyes are closed for the whole duration of the treatment, glue cannot physically enter your eyes. During your treatment, however, the glue's fumes may cause a temporary stinging sensation. Just let your lash technician know so that they can use a fan or air blower to disperse the fumes.`,
  },
  {
    id: 3,
    question: `How long will my lash extensions last?`,
    sent_1: `Your new eyelash extensions will last between 2-6 weeks, depending on how well you take care of them. Eyelash extensions will shed faster with naturally oily skin.`,
    sent_2: `Due to natural breakages, you may want to return to the salon every three to four weeks to have your lashes filled. Regular filling of lashes will maintain your defined and glamorous look.`,
    sent_3: `Avoiding oil-based products and make-up remover will also help to maintain your eyelash extensions. Oil-based products can cause the glue to break down and your eyelash extensions to fall out prematurely.`,
    sent_4: `Also, avoid rubbing your eyes or pulling at your extensions after your treatment.`,
  },
];

export default function Contact() {
  return (
    <div className="bg-rose-50">
      <header className="relative bg-green-800 pb-36">
        <div className="absolute inset-0">
          <div className="object-cover w-full h-full">
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
          <div
            className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-t"
            aria-hidden="true"
          />
        </div>
        <Popover as="div" className="relative z-10">
          <div className="relative flex items-center justify-between px-4 pt-6 pb-2 mx-auto max-w-7xl sm:px-6 lg:px-8"></div>
        </Popover>

        <div className="relative max-w-md px-4 pt-32 pb-16 mx-auto mt-24 sm:max-w-3xl sm:px-6 md:mt-32 lg:max-w-7xl lg:px-8">
          <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">
            Get in{' '}
            <span className="italic font-normal text-rose-200">touch</span>
          </h1>
          <p className="max-w-3xl mt-6 text-xl text-zinc-200">
            We skillfully attach premium Nagaraku eyelashes to your individual
            lashes for an entirely natural and stunning look. We also offer lash
            lifts and tints.
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
              <div className="flex flex-col bg-white shadow-xl rounded-2xl">
                <div className="relative flex-1 px-6 pt-10 pb-8 md:px-8">
                  <div>
                    <h3 className="text-2xl font-medium leading-6 text-zinc-800">
                      Opening{' '}
                      <span className="italic font-normal text-rose-400">
                        hours
                      </span>
                    </h3>
                    <div className="mt-2 text-base text-zinc-500">
                      <p>Mon-Fri 9am to 6pm</p>
                      <p className="mt-1">Sundays by appointment only</p>
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
                      <div className="ml-3 text-base transition duration-300 ease-in-out text-zinc-700 group-hover:text-white">
                        <p>+61 (0) 466 609 975</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/* card 2 */}
              <div className="flex flex-col bg-white shadow-xl rounded-2xl">
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
                      <div className="ml-3 text-base transition duration-300 ease-in-out text-zinc-700 group-hover:text-white">
                        <p>Moët Lashes</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/* card 3 */}
              <div className="flex flex-col shadow-xl bg-rose-400 rounded-2xl">
                <div className="relative flex-1 object-cover object-center overflow-hidden rounded-2xl aspect-w-12 aspect-h-7 hover:mix-blend-luminosity">
                  <a
                    href="https://goo.gl/maps/bZ8DPQgVW6a6Ux296"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="transition duration-700 ease-in-out"
                  >
                    <Image
                      src="/static/map-rose.webp"
                      alt="Attaching individual eyelash extensions"
                      width={1310}
                      height={922}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </a>
                </div>
              </div>
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
                  Frequently asked{' '}
                  <span className="italic font-normal text-rose-400">
                    questions{' '}
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
                      <dd className="mt-2 text-base text-zinc-500">
                        {faq.sent_1}
                      </dd>
                      <dd className="mt-2 text-base text-zinc-500">
                        {faq.sent_2}
                      </dd>
                      <dd className="mt-2 text-base text-zinc-500">
                        {faq.sent_3}
                      </dd>
                      <dd className="mt-2 text-base text-zinc-500">
                        {faq.sent_4}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <ContactCTA /> */}
      </main>
    </div>
  );
}
