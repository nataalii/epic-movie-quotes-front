import { Button, Gendolf, Union } from 'components';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
export default function Forbidden() {
  const router = useRouter();
  return (
    <Fragment>
      <div className='h-screen w-screen flex flex-col items-center pt-40 gap-12  text-center'>
        <div className=' relative'>
          <div className='absolute ml-[0.8rem]'>
            <Gendolf />
          </div>
          <div className=' mt-14'>
            <Union />
          </div>
        </div>
        <h1 className='text-2xl font-semibold text-white lg:text-5xl'>
          You shall not pass!
        </h1>
        <h2 className='text-base lg:text-2xl font-semibold text-white  w-[85%] max-w-[700px]'>
          Sorry, but you don’t have permission to access this page
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
