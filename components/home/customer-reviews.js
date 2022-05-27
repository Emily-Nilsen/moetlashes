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
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653665459/flowers-1_kqgq1t.jpg',
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>Great to have eyelash extensions because I don’t need to wear mascara and eyeliner anymore.  I have been experiencing eyelash extensions over 10 years and very satisfied with this beauty technique. Moet lashes is a very friendly place with good technical skill for eyelash extensions. She listens to clients and have the eyelash extensions done based on clients preferences. Never felt disappointed here. Highly recommend.</p>
      `,
      author: 'Su Lyisa Miles-Cadman',
      avatarSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653665479/flowers-2_zmi5fi.jpg',
    },
    {
      id: 3,
      rating: 5,
      content: `
        <p>Moe's eyelash extension was very thorough and perfect with great care. she was very friendly and kind to me, I had a wonderful time feeling at ease. I'd like to visit there again and really recommend her to others definitely! Thank you very much for lovely time.</p>
      `,
      author: 'Yumie Seki',
      avatarSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653665480/flowers-3_thxbvw.jpg',
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
                    <div className="w-12 h-12 rounded-full">
                      <Image
                        width={48}
                        height={48}
                        src={review.avatarSrc}
                        alt={`${review.author}.`}
                        className="rounded-full"
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
