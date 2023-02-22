import { Button, Error, ErrorElipse } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
export default function Forbidden() {
  const router = useRouter();
  return (
    <Fragment>
      <div className='h-screen w-screen flex flex-col items-center text-center pt-60 gap-8'>
        <div className=' flex flex-col gap-6'>
          <Error />
          <ErrorElipse />
        </div>
        <h1 className='text-2xl font-semibold text-white lg:text-5xl '>
          Whoops!
        </h1>
        <h2 className=' text-base lg:text-2xl font-semibold text-white w-[90%] max-w-[700px]'>
          We can&apos;t see the page you are looking for
        </h2>
        <Button
          item='Return Home'
          color='red'
          onClick={() => {
            router.push('/');
          }}
        />
      </div>
    </Fragment>
  );
}
export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['errors'])),
    },
  };
}
