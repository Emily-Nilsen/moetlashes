import Image from 'next/image';
import Link from 'next/link';
import Language from './language';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

const navigation = [
  { name: 'Lashes', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { t } = useTranslation();
  return (
    <header className="absolute top-0 left-0 z-20 pb-1 lg:pb-0 bg-t">
      <nav
        className="relative w-screen px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
        aria-label="Top"
      >
        <div className="flex items-center justify-between w-full py-6 border-b border-rose-100 lg:border-none">
          <div className="flex items-center">
            <Link href="/" passHref>
              <a>
                <span className="sr-only">Moët Lashes</span>
                <div className="w-auto h-10">
                  <Image
                    height={40}
                    width={104}
                    src={
                      asPath === '/about' || asPath === '/pricing'
                        ? '/moet-zinc.svg'
                        : '/moet-pink.svg'
                    }
                    alt="Moët Lashes logo"
                  />
                </div>
              </a>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`${
                    asPath === '/about' || asPath === '/pricing'
                      ? 'text-zinc-500 hover:text-rose-400'
                      : 'text-white hover:text-rose-200'
                  } ${'text-base transition duration-300 ease-in-out font-regular'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Language />
          </div>
        </div>
        <div className="flex flex-wrap justify-center py-4 space-x-6 lg:hidden">
          {navigation.map((link) => (
            <Link key={link.name} href={link.href} passHref>
              <a
                className={`${
                  asPath === '/about' || asPath === '/pricing'
                    ? 'text-zinc-500 hover:text-rose-400'
                    : 'text-white hover:text-rose-200'
                } ${'text-sm transition duration-300 ease-in-out font-regular'}`}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
