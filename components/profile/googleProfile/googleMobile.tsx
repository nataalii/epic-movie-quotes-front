/* eslint-disable @next/next/no-img-element */
import { Button } from 'components/button';
import { BackArrow } from 'components/icons';
import { UsernameUpdate } from 'components/profile/';
import { useMobileDesign } from 'hooks';
import React from 'react';
import { FormProvider } from 'react-hook-form';
import { updateUsername } from 'stores/modalSlice';

const GoogleMobile = () => {
  const {
    dispatch,
    methods,
    name,
    email,
    image,
    setImage,
    selectedImage,
    setSelectedImage,
    onSubmit,
    editAvatar,
    setEditAvatar,
    updateUsernameModal,
    router,
    t,
  } = useMobileDesign();
  return (
    <div className='flex flex-col inset-0  bg-[#181623] mt-20 z-100 fixed '>
      <div
        className=' m-6 cursor-pointer w-14'
        onClick={() => router.replace('/news-feed')}
      >
        <BackArrow />
      </div>
      <div>
        {updateUsernameModal && <UsernameUpdate />}

        <div className=' bg-blue-500'>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className='flex flex-col'
            >
              <div className=' flex flex-col  gap-10 items-center pt-10 pb-24'>
                <div className='flex flex-col  items-center'>
                  <img
                    src={selectedImage || `${image}`}
                    alt='avatar'
                    className=' w-40 h-40 rounded-full object-cover'
                  />
                  <input
                    type='file'
                    className='hidden'
                    id='mobileAvatar'
                    {...methods.register('mobileAvatar', {
                      onChange: (e) => {
                        setImage(e);
                      },
                    })}
                  />
                  <label
                    className='text-xl cursor-pointer'
                    htmlFor='mobileAvatar'
                  >
                    {t('upload_new_photo')}
                  </label>
                </div>
                <div className='flex flex-col w-[90%] sm:w-[70%] gap-2'>
                  <h2 className=''>{t('username')}</h2>
                  <div className='flex justify-between '>
                    <h1 className=' text-lg'>{name}</h1>
                    <h2
                      className='cursor-pointer text-[#CED4DA]'
                      onClick={() => dispatch(updateUsername())}
                    >
                      {t('edit')}
                    </h2>
                  </div>

                  <hr className='h-px  bg-gray border-0 ' />
                </div>

                <div className='flex flex-col gap-3 justify-between w-[90%] sm:w-[70%]'>
                  <h1 className=' text-sm'>{t('email')}</h1>
                  <h2>{email}</h2>
                  <hr className='h-px  bg-gray border-0 ' />
                </div>
              </div>

              {editAvatar && (
                <div className='relative '>
                  <div className='absolute mt-10 right-0 sm:right-10 w-60 flex gap-5 items-center cursor-pointer'>
                    <h1
                      onClick={() => {
                        setEditAvatar(false);
                        setSelectedImage(image);
                      }}
                    >
                      {t('cancel')}
                    </h1>
                    <Button item={t('save_changes')} color='red' />
                  </div>
                </div>
              )}
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default GoogleMobile;
