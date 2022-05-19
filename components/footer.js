import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { PhoneIcon } from '@heroicons/react/outline';

const navigation = {
  links: [
    { name: `Lashes`, href: '/lashes' },
    { name: `Pricing`, href: '/pricing' },
    { name: `About`, href: '/about' },
    { name: `Contact`, href: '/contact' },
  ],

  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/moetlashes/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/moet_lashes/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-zinc-50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="w-auto h-10">
              <Image
                height={40}
                width={104}
                src="/moet-zinc.svg"
                alt="Moët Lashes logo"
              />
            </div>
            <p className="max-w-xl text-base text-zinc-500">
              Whether you are looking to add subtle eye definition or a dramatic
              and defined lash line, we have your look covered.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition duration-300 ease-in-out text-rose-300 hover:text-rose-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-medium leading-6 text-zinc-600">
                  Moët Lashes
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.links.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} passHref>
                        <a className="text-base transition duration-300 ease-in-out text-zinc-500 hover:text-rose-400">
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-lg font-medium leading-6 text-zinc-600">
                  Cairns City
                </h3>
                <div className="mt-2 text-base text-zinc-500">
                  <p>Shop 19 (Salon Elixir)</p>
                  <p className="mt-1">Orchid Plaza</p>
                  <p className="mt-1">58 Lake St.</p>
                  <p className="mt-1">Cairns City, Qld 4870</p>
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-medium leading-6 text-zinc-600">
                  Hours
                </h3>
                <div className="mt-2 text-base text-zinc-500">
                  <p>Mon-Fri 9am to 6pm</p>
                  <p className="mt-1">Sundays by appointment only</p>
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-lg font-medium leading-6 text-zinc-600">
                  Telephone
                </h3>
                <div className="mt-2 text-base text-zinc-500">
                  <a href="tel:61466609975" rel="noopener noreferrer">
                    <div className="flex group">
                      <div className="flex-shrink-0">
                        <PhoneIcon
                          className="w-6 h-6 transition duration-300 ease-in-out text-rose-300 group-hover:text-rose-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="ml-3 text-base transition duration-300 ease-in-out text-zinc-500 group-hover:text-rose-400">
                        <p>+61 (0) 466 609 975</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-12 border-t border-rose-200">
          <p className="text-sm text-zinc-400 xl:text-center">
            © {new Date().getFullYear()} Moët Lashes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
