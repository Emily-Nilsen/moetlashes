import Image from 'next/image';
import Link from 'next/link';
import Language from './language';

const navigation = [
  { name: 'Lashes', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <header className="pb-1 bg-zinc-800 lg:pb-0">
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between w-full py-6 border-b border-pink-200 lg:border-none">
          <div className="flex items-center">
            <Link href="/" passHref>
              <a>
                <span className="sr-only">Moët Lashes</span>
                <div className="w-auto h-10">
                  <Image
                    height={40}
                    width={104}
                    src="/moet-pink.svg"
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
                  className="text-base text-white transition duration-200 ease-in-out font-regular hover:text-rose-200"
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
              <a className="text-base text-white transition duration-200 ease-in-out font-regular hover:text-rose-200">
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
