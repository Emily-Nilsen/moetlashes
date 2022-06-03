import useTranslation from 'next-translate/useTranslation';

export default function AboutMoe() {
  const { t } = useTranslation();

  return (
    <div className="relative py-16 overflow-hidden bg-white">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full mx-auto text-lg max-w-prose"
          aria-hidden="true"
        >
          <svg
            className="absolute transform translate-x-32 top-12 left-full"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
                  className="text-rose-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
                  className="text-rose-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-lg max-w-prose">
          <h1>
            <span className="block text-base font-semibold tracking-wide text-center uppercase text-rose-500">
              <h2>{t('about:orchid_plaza')}</h2>
            </span>
            <span className="block py-4 mt-2 text-6xl font-extrabold leading-8 tracking-tight text-center text-zinc-900">
              <span className="font-bold">{t('about:meet')} </span>
              <span className="italic font-medium text-rose-400">
                {t('about:moe')}
              </span>
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-zinc-500">
            {t('about:sent_1')}
          </p>
        </div>
        <div className="mx-auto mt-6 prose prose-lg prose-rose text-zinc-500">
          <p>
            {t('about:sent_2_start')}{' '}
            <span className="font-medium text-rose-400">
              {t('about:professional')}
            </span>
            {t('about:sent_2_end')}
          </p>
          <p>
            {t('about:sent_3_start')}{' '}
            <span className="font-medium text-rose-400">
              {t('about:cairns')}
            </span>
            {t('about:sent_3_end')}{' '}
          </p>
          <p>{t('about:sent_4')}</p>
        </div>
      </div>
    </div>
  );
}
