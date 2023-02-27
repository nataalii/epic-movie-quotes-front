import { Button, Error, ErrorElipse } from 'components';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
export default function Forbidden() {
  const router = useRouter();
  const { t } = useTranslation('errors');
  return (
    <Fragment>
      <Head>
        <title>Not Found</title>
      </Head>
      <div className='h-screen w-screen flex flex-col items-center text-center pt-60 gap-8'>
        <div className=' flex flex-col gap-6'>
          <Error />
          <ErrorElipse />
        </div>
        <h1 className='text-2xl font-semibold text-white lg:text-5xl '>
          {t('whoops')}
        </h1>
        <h2 className=' text-base lg:text-2xl font-semibold text-white w-[90%] max-w-[700px]'>
          {t('not_found')}
        </h2>
        <Button
          item={t('return_home')}
          color='red'
          onClick={() => {
            router.push('/');
          }}
        />
      </div>
    </Fragment>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['errors'])),
    },
  };
}
