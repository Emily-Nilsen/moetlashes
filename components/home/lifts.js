import Image from 'next/image';

export default function Lashes() {
  return (
    <div className="bg-rose-50">
      <div aria-hidden="true" className="relative">
        <img
          src="/static/home/moetlashes-img-8.webp"
          alt=""
          className="object-cover object-center w-full h-96"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rose-50" />
      </div>
      <div className="relative pb-10 -mt-24 overflow-hidden md:-mt-16">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full mx-auto text-lg max-w-prose"
            aria-hidden="true"
          ></div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-lg max-w-prose">
            <h1>
              <span className="block text-base font-semibold tracking-wide text-center uppercase text-rose-400">
                <h2>Defining</h2>
              </span>
              <span className="block mt-2 text-4xl font-extrabold leading-8 tracking-tight text-center text-zinc-800 sm:text-5xl">
                Lash lift and style
              </span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-zinc-500">
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas ac. Diam nulla orci at in viverra
              scelerisque eget. Eleifend egestas fringilla sapien.
            </p>
          </div>
          <div className="mx-auto mt-6 prose prose-lg text-zinc-500 prose-rose">
            <p>
              Faucibus commodo massa rhoncus, volutpat.{' '}
              <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
              Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit. Faucibus commodo massa rhoncus, volutpat.
              Dignissim sed eget risus enim.{' '}
              <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
            </p>
            <ul role="list">
              <li>Quis elit egestas venenatis mattis dignissim.</li>
              <li>
                Cras cras lobortis vitae vivamus ultricies facilisis tempus.
              </li>
              <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
            </ul>
            <p>
              Quis semper vulputate aliquam venenatis egestas sagittis quisque
              orci. Donec commodo sit viverra aliquam porttitor ultrices gravida
              eu. Tincidunt leo, elementum mattis elementum ut nisl, justo,
              amet, mattis. Nunc purus, diam commodo tincidunt turpis. Amet,
              duis sed elit interdum dignissim.
            </p>

            <figure>
              <img
                className="w-full rounded-lg"
                src="/static/home/moetlashes-img-7.webp"
                alt=""
                width={1310}
                height={873}
              />
              <figcaption>
                Sagittis scelerisque nulla cursus in enim consectetur quam.
              </figcaption>
            </figure>
            <h2>Everything you need to get up and running</h2>
            <p>
              Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>.
              Amet, massa quam varius orci dapibus volutpat cras. In amet eu
              ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
              viverra ridiculus non molestie. Gravida quis fringilla amet eget
              dui tempor dignissim. Facilisis auctor venenatis varius nunc,
              congue erat ac. Cras fermentum convallis quam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
