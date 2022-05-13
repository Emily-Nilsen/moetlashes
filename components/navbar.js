import Image from 'next/image';
import Link from 'next/link';
import Language from './language';

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: 'Lashes', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function Navbar() {
  return (
    <header className="bg-zinc-800">
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between w-full py-6 border-b border-pink-200 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Moët Lashes</span>
              <img className="w-auto h-10" src="/moet-pink.svg" alt="" />
            </a>
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
            <a
              key={link.name}
              href={link.href}
              className="text-base text-white transition duration-200 ease-in-out font-regular hover:text-rose-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
