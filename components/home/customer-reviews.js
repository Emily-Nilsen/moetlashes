import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/solid';

const reviews = {
  average: 5,
  totalCount: 13,
  counts: [
    { rating: 5, count: 13 },
    { rating: 4, count: 0 },
    { rating: 3, count: 0 },
    { rating: 2, count: 0 },
    { rating: 1, count: 0 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>I have had eyelash extensions and eyelash perm many times with Moët Lashes. Both times they have always lasted a very long time and has come out very nice and natural. She is very quick, polite service for the customers, and fun! The location of the shop is very convenient. If my friends look for a good eyelash artist, I will definitely recommend her.</p>
      `,
      author: 'Misato Liu',
      avatarSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653665459/Mo%C3%ABt%20Lashes/flowers/flowers-1_kqgq1t.jpg',
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>Great to have eyelash extensions because I don’t need to wear mascara and eyeliner anymore.  I have been experiencing eyelash extensions over 10 years and very satisfied with this beauty technique. Moet lashes is a very friendly place with good technical skill for eyelash extensions. She listens to clients and have the eyelash extensions done based on clients preferences. Never felt disappointed here. Highly recommend.</p>
      `,
      author: 'Su Lyisa Miles-Cadman',
      avatarSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653665479/Mo%C3%ABt%20Lashes/flowers/flowers-2_zmi5fi.jpg',
    },
    {
      id: 3,
      rating: 5,
      content: `
        <p>Moe's eyelash extension was very thorough and perfect with great care. she was very friendly and kind to me, I had a wonderful time feeling at ease. I'd like to visit there again and really recommend her to others definitely! Thank you very much for lovely time.</p>
      `,
      author: 'Yumie Seki',
      avatarSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653665480/Mo%C3%ABt%20Lashes/flowers/flowers-3_thxbvw.jpg',
    },
    {
      id: 4,
      rating: 5,
      content: `
        <p>Highly recommended.
        She does very professional job. The eye lashes last longer compare to other salons.
        Also Moe always remembers our eyelashes condition and give us some advice to keep healthy eyelash.</p>
      `,
      author: 'Yuka Avard',
      avatarSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653968475/Mo%C3%ABt%20Lashes/flowers/flowers-4_jwnnuc.jpg',
    },
    {
      id: 5,
      rating: 5,
      content: `
        <p>Best eyelash extensions and lush lift in Cairns with prompt treatment and great quality which lasted longer. Moe is very professional and always welcoming. Definitely recommend to others!</p>
      `,
      author: 'Chika Ritchie',
      avatarSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653968475/Mo%C3%ABt%20Lashes/flowers/flowers-5_c1rg9z.jpg',
    },
    {
      id: 6,
      rating: 5,
      content: `
        <p>I have done eyelashes lift and eyelashes extensions many times in here. Her treatment was really gentle and high quality. My eyelashes became gorgeous!! I like this salon.</p>
      `,
      author: 'Natsumi Ota',
      avatarSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653968475/Mo%C3%ABt%20Lashes/flowers/flowers-6_s6cfdz.jpg',
    },
    {
      id: 7,
      rating: 5,
      content: `
        <p>Moe does very good looking eyelash extensions !
        Always last quite long for me.
        I’m always happy with her service.
        She is very warm and  friendly!</p>
      `,
      author: 'Yukie KloostermanHaneda',
      avatarSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653968475/Mo%C3%ABt%20Lashes/flowers/flowers-7_o6qg5s.jpg',
    },
    {
      id: 8,
      rating: 5,
      content: `
        <p>I get treated for classic lashes regularly. Always looks great and I’m always so relaxed during the treatment.I highly recommend Moe to everyone.</p>
      `,
      author: 'Sarah & Reina',
      avatarSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653968476/Mo%C3%ABt%20Lashes/flowers/flowers-8_kgvook.jpg',
    },
    {
      id: 9,
      rating: 5,
      content: `
        <p>My eyelashes has done with her many times.
        She is always quick, beautiful and punctual.
        I strongly believe that she is the best eyelash artist in Far North Queensland.</p>
      `,
      author: 'Yuko Haintz',
      avatarSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653968475/Mo%C3%ABt%20Lashes/flowers/flowers-9_tfh3jf.jpg',
    },
    {
      id: 10,
      rating: 5,
      content: `
        <p>I had lash done by Moët lashes and she was very gentle and I slept most of the time. Eyelash extensions was looking awesome too.</p>
      `,
      author: 'Masako Yamada',
      avatarSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653968475/Mo%C3%ABt%20Lashes/flowers/flowers-10_pumgy8.jpg',
    },
    {
      id: 11,
      rating: 5,
      content: `
        <p>I Finally found good eyelash salon!!!!
        Totally recommend Moët lashes.
        Great skills and very professional.</p>
      `,
      author: 'Tomomi Killian',
      avatarSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653968476/Mo%C3%ABt%20Lashes/flowers/flowers-11_wmhazs.jpg',
    },
    {
      id: 12,
      rating: 5,
      content: `
        <p>I treated my wife with a full set of volume lashes. She was pretty before, but now she's stunning. Great work!</p>
      `,
      author: 'Bernt Nilsen',
      avatarSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653968501/Mo%C3%ABt%20Lashes/flowers/flowers-12_nkyabh.jpg',
    },
    {
      id: 13,
      rating: 5,
      content: `
        <p></p>
      `,
      author: 'nikita yonzone',
      avatarSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653968501/Mo%C3%ABt%20Lashes/flowers/flowers-13_syzof9.jpg',
    },
    // More reviews...
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CustomerReviews() {
  return (
    <div className="bg-rose-50">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-4">
          <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl text-neutral-900">
            Customer Reviews
          </h3>

          <div className="flex items-center mt-3">
            <div>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating
                        ? 'text-rose-400'
                        : 'text-neutral-300',
                      'flex-shrink-0 h-5 w-5'
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-neutral-900">
              Based on {reviews.totalCount} reviews
            </p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Review data</h3>

            <dl className="space-y-3">
              {reviews.counts.map((count) => (
                <div key={count.rating} className="flex items-center text-sm">
                  <dt className="flex items-center flex-1">
                    <p className="w-3 font-medium text-neutral-900">
                      {count.rating}
                      <span className="sr-only"> star reviews</span>
                    </p>
                    <div
                      aria-hidden="true"
                      className="flex items-center flex-1 ml-1"
                    >
                      <StarIcon
                        className={classNames(
                          count.count > 0
                            ? 'text-rose-400'
                            : 'text-neutral-300',
                          'flex-shrink-0 h-5 w-5'
                        )}
                        aria-hidden="true"
                      />

                      <div className="relative flex-1 ml-3">
                        <div className="h-3 border rounded-full bg-neutral-50 border-neutral-200" />
                        {count.count > 0 ? (
                          <div
                            className="absolute inset-y-0 border rounded-full bg-rose-400 border-rose-400"
                            style={{
                              width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                            }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                  <dd className="w-10 ml-3 text-sm text-right tabular-nums text-neutral-900">
                    {Math.round((count.count / reviews.totalCount) * 100)}%
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-medium text-neutral-900">
              Share your thoughts
            </h3>
            <p className="mt-1 text-sm text-neutral-600">
              Please feel free to write your own Google review!
            </p>

            <a
              href="https://www.google.com/search?q=moet+lashes+cairns&sxsrf=ALiCzsbHz1T1TU9NE5phVzZgocO6-tS8vg%3A1653657673106&source=hp&ei=SNCQYqCwOrqRxc8Pye2b2Ak&iflsig=AJiK0e8AAAAAYpDeWbYSzNNWZTtLSBEl7vu2H1U9uIqJ&oq=moe&gs_lcp=Cgdnd3Mtd2l6EAEYADIECCMQJzIECAAQQzIKCC4QxwEQ0QMQQzIOCC4QgAQQxwEQ0QMQ1AIyCwguEIAEEMcBENEDMgUILhCABDIICC4QgAQQ1AIyCwguEIAEEMcBEK8BMgsILhCABBDHARCvATIFCAAQgAQ6BAguECc6CwguEIAEEMcBEKMCUABY2ANgxSFoAHAAeACAAW2IAasCkgEDMS4ymAEAoAEB&sclient=gws-wiz#lrd=0x697867d234fcefb7:0x6a54fdadd7fc308d,1,,,"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-full px-8 py-2 mt-6 text-sm font-medium transition duration-300 ease-in-out bg-white border rounded-full border-neutral-300 text-neutral-900 hover:bg-rose-400 sm:w-auto lg:w-full hover:text-white"
            >
              Write a review
            </a>
          </div>
        </div>

        <div className="mt-16 lg:mt-0 lg:col-start-6 lg:col-span-7">
          <h3 className="sr-only">Recent reviews</h3>

          <div className="flow-root">
            <div className="-my-12 divide-y divide-neutral-200">
              {reviews.featured.map((review) => (
                <div key={review.id} className="py-12">
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full">
                      <Image
                        src={review.avatarSrc}
                        alt={`${review.author}.`}
                        className="rounded-full"
                        unoptimized={true}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-sm font-bold text-neutral-900">
                        {review.author}
                      </h2>
                      <div className="flex items-center mt-1">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              review.rating > rating
                                ? 'text-rose-400'
                                : 'text-neutral-300',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">{review.rating} out of 5 stars</p>
                    </div>
                  </div>

                  <div
                    className="mt-4 space-y-6 text-base italic text-neutral-600"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
