import Image from 'next/image';

import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from '@heroicons/react/outline';

const features = [
  {
    name_start: `Eyelash `,
    name_end: `extensions`,
    description: `Make your lash fringe longer, fuller and darker with our extensive selection of eyelash extension treatments.`,
    href: `/#extensions`,
    link_name: `Go to extensions`,
  },
  {
    name_start: `Lash lift & `,
    name_end: `style`,
    description: `Enhance and style your natural lashes with a lash lift treatment.`,
    href: `/#lifts`,
    link_name: `Go to lifts`,
  },
  {
    name_start: `Aftercare `,
    name_end: `advice`,
    description: `Receive friendly advice about how best to care for your eyelash extensions.`,
    href: `/contact/#faqs`,
    link_name: `Go to FAQs`,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-rose-50 lg:px-6">
      <div className="max-w-xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">What we offer.</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-x-6">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="flex flex-col bg-white shadow-xl rounded-2xl"
            >
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                {/* <div className="absolute top-0 inline-block p-5 transform -translate-y-1/2 shadow-lg bg-rose-100 rounded-xl">
                <link.icon
                  className="w-6 h-6 text-rose-300"
                  aria-hidden="true"
                />
              </div> */}
                <div key={feature.name}>
                  <dt>
                    <h3 className="py-2 text-3xl text-rose-400 sm:text-3xl">
                      <span className="font-bold">{feature.name_start} </span>
                      <span className="italic font-normal">
                        {feature.name_end}
                      </span>
                    </h3>
                  </dt>
                  <dd className="mt-2 text-base lg:max-w-xs text-zinc-500">
                    {feature.description}
                  </dd>
                </div>
              </div>
              <div className="p-6 bg-blue-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a
                  href={feature.href}
                  className="text-base font-medium transition duration-300 ease-in-out text-rose-400 hover:text-rose-300"
                >
                  {feature.link_name}
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
