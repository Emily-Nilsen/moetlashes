import Image from 'next/image';

export default function Lifts() {
  return (
    <div id="lifts" className="relative py-16 bg-white sm:py-24">
      <div className="bg-white">
        <div className="px-4 pb-16 mx-auto max-w-7xl sm:pb-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-rose-400">
              We also offer
            </h2>
            <h1 className="mt-1 text-5xl font-extrabold text-zinc-800 sm:text-6xl sm:tracking-tight lg:text-7xl">
              Lift, style & tint
            </h1>
            <p className="max-w-xl mx-auto mt-5 text-xl text-zinc-500">
              A lash lift and tint is the perfect alternative for those who want
              the styled look without using eyelash extensions.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 w-full right-1/2 bg-rose-50 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
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
                    className="text-rose-100"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative pt-64 pb-10 overflow-hidden shadow-xl rounded-2xl">
              <img
                className="absolute inset-0 object-cover w-full h-full"
                src="/static/home/moetlashes-img-7.webp"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h3 className="text-4xl font-extrabold tracking-tight text-zinc-800 sm:text-5xl">
              Eyelash extension{' '}
              <span className="italic font-normal text-rose-400">
                alternative
              </span>
            </h3>
            <div className="mt-6 space-y-6 text-zinc-500">
              <p className="text-lg">
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc
                nisl netus morbi vel porttitor vitae ut. Amet vitae fames
                senectus vitae.
              </p>
              <p className="text-base leading-7">
                Sollicitudin tristique eros erat odio sed vitae, consequat
                turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros
                eu viverra donec ut volutpat donec laoreet quam urna.
                Sollicitudin tristique eros erat odio sed vitae, consequat
                turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros
                eu viverra donec ut volutpat donec laoreet quam urna.
              </p>
              <p className="text-base leading-7">
                Rhoncus nisl, libero egestas diam fermentum dui. At quis
                tincidunt vel ultricies. Vulputate aliquet velit faucibus
                semper. Pellentesque in venenatis vestibulum consectetur nibh
                id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim
                fermentum lacus in. Viverra.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <div className="bg-rose-200 rounded-2xl">
              <div className="max-w-2xl px-4 py-16 mx-auto text-center sm:py-20 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Boost your productivity.</span>
                  <span className="block">Start using Workflow today.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-zinc-500">
                  Ac euismod vel sit maecenas id pellentesque eu sed
                  consectetur. Malesuada adipiscing sagittis vel nulla nec.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full px-5 py-3 mt-8 text-base font-medium transition duration-300 ease-in-out bg-white border border-transparent rounded-full text-rose-400 hover:bg-rose-400 hover:text-white sm:w-auto"
                >
                  See our pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
