import Image from 'next/image';
import Link from 'next/link';
import Lifts from '../components/pricing/lifts';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckIcon as CheckIconOutline,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline';
import {
  CheckIcon as CheckIconSolid,
  ChevronDownIcon,
} from '@heroicons/react/solid';

const solutions = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
];
const resources = [
  {
    id: 1,
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    id: 2,
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    id: 3,
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    id: 4,
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
  },
  { id: 3, name: 'Improve your customer experience', href: '#' },
];
const tiers = [
  {
    name: 'Hobby',
    href: '#',
    priceMonthly: 12,
    description: 'All the basics for starting a new business',
    features: [
      'Potenti felis, in cras at at ligula nunc.',
      'Orci neque eget pellentesque.',
    ],
  },
  {
    name: 'Freelancer',
    href: '#',
    priceMonthly: 24,
    description: 'All the basics for starting a new business',
    features: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
    ],
  },
  {
    name: 'Startup',
    href: '#',
    priceMonthly: 32,
    description: 'All the basics for starting a new business',
    features: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
      'Faucibus volutpat magna.',
    ],
  },
  {
    name: 'Enterprise',
    href: '#',
    priceMonthly: 48,
    description: 'All the basics for starting a new business',
    features: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
      'Faucibus volutpat magna.',
      'Id sed tellus in varius quisque.',
      'Risus egestas faucibus.',
      'Risus cursus ullamcorper.',
    ],
  },
];
const features = [
  {
    name: 'Invite team members',
    description:
      'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    name: 'Notifications',
    description:
      'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
  },
  {
    name: 'List view',
    description:
      'Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.',
  },
  {
    name: 'Boards',
    description:
      'Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.',
  },
  {
    name: 'Keyboard shortcuts',
    description:
      'Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.',
  },
  {
    name: 'Reporting',
    description:
      'Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.',
  },
  {
    name: 'Calendars',
    description:
      'Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.',
  },
  {
    name: 'Mobile app',
    description:
      'Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.',
  },
];
const logos = [
  {
    name: 'Tuple',
    url: 'https://tailwindui.com/img/logos/tuple-logo-purple-200.svg',
  },
  {
    name: 'Mirage',
    url: 'https://tailwindui.com/img/logos/mirage-logo-purple-200.svg',
  },
  {
    name: 'StaticKit',
    url: 'https://tailwindui.com/img/logos/statickit-logo-purple-200.svg',
  },
  {
    name: 'Transistor',
    url: 'https://tailwindui.com/img/logos/transistor-logo-purple-200.svg',
  },
  {
    name: 'Workcation',
    url: 'https://tailwindui.com/img/logos/workcation-logo-purple-200.svg',
  },
];
const faqs = [
  {
    id: 1,
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 2,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: 'What do you call someone with no body and no nose?',
    answer:
      'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 4,
    question: 'Why do you never see elephants hiding in trees?',
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  return (
    <div id="extensions" className="bg-white">
      {/* Pricing with four tiers and toggle */}
      <div className="pt-24 pb-16 lg:pb-24 lg:pt-16 bg-gradient-to-b from-rose-50 to-rose-200">
        <div className="px-4 pt-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h1 className="text-5xl font-extrabold text-zinc-900 sm:text-center">
              Pricing Plans
            </h1>
            <p className="mt-5 text-xl text-zinc-500 sm:text-center">
              Start building for free, then add a site plan to go live. Account
              plans unlock additional features.
            </p>
          </div>
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="bg-white border divide-y rounded-lg shadow-sm border-rose-200 divide-rose-200"
              >
                <div className="p-6">
                  <h2 className="text-lg font-medium leading-6 text-zinc-900">
                    {tier.name}
                  </h2>
                  <p className="mt-4 text-sm text-zinc-500">
                    {tier.description}
                  </p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold text-zinc-900">
                      ${tier.priceMonthly}
                    </span>{' '}
                    <span className="text-base font-medium text-zinc-500">
                      /mo
                    </span>
                  </p>
                  <a
                    href={tier.href}
                    className="block w-full py-2 mt-8 text-sm font-semibold text-center text-white border border-transparent rounded-md bg-rose-400 hover:bg-purple-700"
                  >
                    Buy {tier.name}
                  </a>
                </div>
                <div className="px-6 pt-6 pb-8">
                  <h3 className="text-xs font-medium tracking-wide uppercase text-zinc-900">
                    Whats included
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex space-x-3">
                        <CheckIconSolid
                          className="flex-shrink-0 w-5 h-5 text-green-500"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-zinc-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lifts */}
      <Lifts />
    </div>
  );
}
