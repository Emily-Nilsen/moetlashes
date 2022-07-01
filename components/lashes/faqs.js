import useTranslation from 'next-translate/useTranslation';

export default function Faqs() {
  const { t } = useTranslation();

  const faqs = [
    {
      id: 1,
      question: `${t('lashes:faq_1')}`,
      sent_1: `${t('lashes:answer_1_1')}`,
      sent_2: `${t('lashes:answer_1_2')}`,
    },
    {
      id: 2,
      question: `${t('lashes:faq_2')}`,
      sent_1: `${t('lashes:answer_2_1')}`,
      sent_2: `${t('lashes:answer_2_2')}`,
    },
    {
      id: 3,
      question: `${t('lashes:faq_3')}`,
      sent_1: `${t('lashes:answer_3_1')}`,
      sent_2: `${t('lashes:answer_3_2')}`,
      sent_3: `${t('lashes:answer_3_3')}`,
      sent_4: `${t('lashes:answer_3_4')}`,
      sent_5: `${t('lashes:answer_3_5')}`,
      sent_6: `${t('lashes:answer_3_6')}`,
    },
  ];

  return (
    <div className="bg-rose-50">
      {/* FAQ offset */}
      <div
        id="faqs"
        className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-20 lg:px-8"
      >
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="space-y-4">
            <h3 className="text-4xl font-extrabold text-zinc-800">
              {t('lashes:frequently')}
              <span className="italic font-medium text-rose-400">
                {t('lashes:questions')}{' '}
              </span>
            </h3>
            <p className="text-lg text-zinc-500">
              Can’t find the answer you’re looking for? Reach out and{' '}
              <a
                href="tel:61466609975"
                rel="noopener noreferrer"
                className="font-medium transition duration-300 ease-in-out text-rose-400 hover:text-rose-500 hover:underline"
              >
                contact
              </a>{' '}
              us.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-lg font-medium leading-6 text-zinc-800">
                    {faq.question}
                  </dt>
                  <dd className="mt-4 text-base text-zinc-500">{faq.sent_1}</dd>
                  <dd className="mt-4 text-base text-zinc-500">{faq.sent_2}</dd>
                  <dd className="mt-4 text-base text-zinc-500">{faq.sent_3}</dd>
                  <dd className="mt-4 text-base text-zinc-500">{faq.sent_4}</dd>
                  <dd className="mt-4 text-base text-zinc-500">{faq.sent_5}</dd>
                  <dd className="mt-4 text-base text-zinc-500">{faq.sent_6}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
