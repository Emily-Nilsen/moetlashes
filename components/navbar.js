import Image from 'next/image';
import Link from 'next/link';
import Language from './language';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { t } = useTranslation();
  const navigation = [
    { name: `${t('navbar:lashes')}`, href: '/lashes' },
    { name: `${t('navbar:pricing')}`, href: '/pricing' },
    { name: `${t('navbar:about')}`, href: '/about' },
    { name: `${t('navbar:contact')}`, href: '/contact' },
  ];
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
                    src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653670637/moet-pink_svy7es.svg"
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
                  className="text-base text-white transition duration-300 ease-in-out font-regular hover:text-rose-200"
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
              <a className="text-sm text-white transition duration-300 ease-in-out font-regular hover:text-rose-200">
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
