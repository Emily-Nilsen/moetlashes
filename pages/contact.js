import Image from 'next/image';
import Link from 'next/link';
import ContactCTA from '../components/contact/contact-cta';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  MenuIcon,
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
  XIcon,
} from '@heroicons/react/outline';

const supportLinks = [
  {
    name: 'Sales',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: PhoneIcon,
  },
  {
    name: 'Technical Support',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: SupportIcon,
  },
  {
    name: 'Media Inquiries',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: NewspaperIcon,
  },
];
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: 'Why do you never see elephants hiding in trees?',
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 4,
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      'Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 5,
    question: 'What do you call someone with no body and no nose?',
    answer:
      'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 6,
    question: 'Why did the invisible man turn down the job offer?',
    answer:
      "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

export default function Contact() {
  return (
    <div className="bg-rose-50">
      <header className="relative pb-36 bg-blue-gray-800">
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
            Get in touch
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
              {supportLinks.map((link) => (
                <div
                  key={link.name}
                  className="flex flex-col bg-white shadow-xl rounded-2xl"
                >
                  <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                    <div className="absolute top-0 inline-block p-5 transform -translate-y-1/2 shadow-lg bg-rose-100 rounded-xl">
                      <link.icon
                        className="w-6 h-6 text-rose-300"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-xl font-medium text-blue-gray-900">
                      {link.name}
                    </h3>
                    <p className="mt-4 text-base text-blue-gray-500">
                      {link.description}
                    </p>
                  </div>
                  <div className="p-6 bg-blue-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                    <a
                      href={link.href}
                      className="text-base font-medium text-blue-700 hover:text-blue-600"
                    >
                      Contact us<span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ offset */}
          <div
            id="faqs"
            className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-20 lg:px-8"
          >
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-extrabold text-zinc-900">
                  Frequently asked questions
                </h2>
                <p className="text-lg text-zinc-500">
                  Can’t find the answer you’re looking for? Reach out to our{' '}
                  <a
                    href="#"
                    className="font-medium text-rose-400 hover:text-purple-500"
                  >
                    customer support
                  </a>{' '}
                  team.
                </p>
              </div>
              <div className="mt-12 lg:mt-0 lg:col-span-2">
                <dl className="space-y-12">
                  {faqs.map((faq) => (
                    <div key={faq.id}>
                      <dt className="text-lg font-medium leading-6 text-zinc-900">
                        {faq.question}
                      </dt>
                      <dd className="mt-2 text-base text-zinc-500">
                        {faq.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <ContactCTA />
      </main>
    </div>
  );
}
