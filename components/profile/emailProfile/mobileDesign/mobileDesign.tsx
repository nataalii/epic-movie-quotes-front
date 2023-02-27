/* eslint-disable @next/next/no-img-element */
import { Button } from 'components/button';
import { BackArrow, ForwardArrow } from 'components/icons';
import { useMyProfile, UsernameUpdate } from 'components';
import { FormProvider } from 'react-hook-form';
import {
  updateEmails,
  updatePassword,
  updateUsername,
} from 'stores/modalSlice';
import { EmailUpdate } from '../emailUpdate';
import { PasswordUpdate } from '../passwordUpdate';
import { useMobileDesign } from 'hooks';

const MobileDesign = () => {
  const {
    image,
    selectedImage,
    setSelectedImage,
    editAvatar,
    setEditAvatar,
    methods,
    setImage,
    onSubmit,
    updateUsernameModal,
    updatePasswordModal,
    updateEmailsModal,
    dispatch,
    t,
    router,
  } = useMobileDesign();
  const { user } = useMyProfile();
  return (
    <div className='w-[100%] flex flex-col'>
      {updateUsernameModal && <UsernameUpdate />}
      {updatePasswordModal && <PasswordUpdate />}
      {updateEmailsModal && <EmailUpdate />}
      <div
        className='m-6 cursor-pointer'
        onClick={() => router.replace('/news-feed')}
      >
        <BackArrow />
      </div>
      <div className=' bg-blue-500'>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className='flex flex-col'
          >
            <div className=' flex flex-col  gap-10 items-center pt-10 pb-24'>
              <div className='flex flex-col justify-center items-center'>
                <img
                  src={selectedImage || `${user?.thumbnail}`}
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
                  <h1 className=' text-lg'>{user?.name}</h1>
                  <h2
                    className='cursor-pointer text-[#CED4DA]'
                    onClick={() => dispatch(updateUsername())}
                  >
                    {t('edit')}
                  </h2>
                </div>

                <hr className='h-px  bg-gray border-0 ' />
              </div>
              <div className='flex flex-col w-[90%] sm:w-[70%] gap-2'>
                <h2>{t('password')}</h2>
                <div className='flex justify-between '>
                  <h1 className=' text-lg'>••••••••••••</h1>
                  <h2
                    className='cursor-pointer text-[#CED4DA]'
                    onClick={() => dispatch(updatePassword())}
                  >
                    {t('edit')}
                  </h2>
                </div>

                <hr className='h-px  bg-gray border-0 ' />
              </div>
              <div className='flex justify-between w-[90%] sm:w-[70%]'>
                <h1 className=' text-sm'>{t('email')}</h1>
                <div
                  className='cursor-pointer'
                  onClick={() => dispatch(updateEmails())}
                >
                  <ForwardArrow />
                </div>
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
                  <Button item='Save changes' color='red' />
                </div>
              </div>
            )}
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default MobileDesign;
