import Image from 'next/image';
import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section
      className="relative bg-rose-50 lg:pb-20"
      aria-labelledby="join-heading"
    >
      <div
        className="absolute inset-x-0 hidden h-1/2 bg-rose-50 lg:block"
        aria-hidden="true"
      />
      <div className="mx-auto bg-zinc-800 max-w-7xl lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
            <div
              className="absolute inset-x-0 h-1/2 bg-rose-50 lg:hidden"
              aria-hidden="true"
            />
            <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <div className="object-cover object-center overflow-hidden shadow-2xl rounded-3xl">
                  <Image
                    width={600}
                    height={300}
                    src="/static/home/moetlashes-img-1.webp"
                    alt="Moët Lashes Cairns City"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="bottom"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-zinc-800 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
            <div
              className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
              aria-hidden="true"
            >
              <svg
                className="absolute transform bottom-full left-full translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={2}
                      height={2}
                      className="opacity-40 text-rose-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
              <svg
                className="absolute transform top-full -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-rose-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
            </div>
            <div className="relative max-w-md px-4 py-12 mx-auto space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
              <h2
                className="text-3xl font-extrabold text-rose-200"
                id="join-heading"
              >
                Join our team
              </h2>
              <p className="text-lg text-zinc-200">
                Varius facilisi mauris sed sit. Non sed et duis dui leo,
                vulputate id malesuada non. Cras aliquet purus dui laoreet diam
                sed lacus, fames.
              </p>
              <Link href="/lashes">
                <a className="block w-full px-5 py-3 text-base font-medium text-center bg-white border border-transparent rounded-full shadow-md text-rose-400 hover:bg-blue-gray-50 sm:inline-block sm:w-auto">
                  Our lashes
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
