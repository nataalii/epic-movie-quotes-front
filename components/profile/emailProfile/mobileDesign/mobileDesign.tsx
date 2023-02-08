/* eslint-disable @next/next/no-img-element */
import { Button } from 'components/button';
import { BackArrow, ForwardArrow } from 'components/icons';
import { FormProvider } from 'react-hook-form';
import { updatePassword, updateUsername } from 'stores/modalSlice';
import { PasswordUpdate } from '../passwordUpdate';
import { UsernameUpdate } from '../usernameUpdate';
import useMobileDesign from './useMobileDesign';

const MobileDesign = () => {
  const {
    image,
    name,
    selectedImage,
    setSelectedImage,
    editAvatar,
    setEditAvatar,
    methods,
    setImage,
    onSubmit,
    updateUsernameModal,
    updatePasswordModal,
    dispatch,
  } = useMobileDesign();

  return (
    <div className='w-[100%] flex flex-col'>
      {updateUsernameModal && <UsernameUpdate />}
      {updatePasswordModal && <PasswordUpdate />}
      <div className='m-6 cursor-pointer'>
        <BackArrow />
      </div>
      <div className=' bg-blue-500'>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className='flex flex-col'
          >
            <div className=' flex flex-col  gap-10 items-center pt-10 pb-24'>
              <div>
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
                  Upload new Photo
                </label>
              </div>
              <div className='flex flex-col w-[90%] sm:w-[80%] gap-2'>
                <h2 className=''>Username</h2>
                <div className='flex justify-between '>
                  <h1 className=' text-lg'>{name}</h1>
                  <h2
                    className='cursor-pointer text-[#CED4DA]'
                    onClick={() => dispatch(updateUsername())}
                  >
                    Edit
                  </h2>
                </div>

                <hr className='h-px  bg-gray border-0 ' />
              </div>
              <div className='flex flex-col w-[90%] sm:w-[80%] gap-2'>
                <h2>Password</h2>
                <div className='flex justify-between '>
                  <h1 className=' text-lg'>••••••••••••</h1>
                  <h2
                    className='cursor-pointer text-[#CED4DA]'
                    onClick={() => dispatch(updatePassword())}
                  >
                    Edit
                  </h2>
                </div>

                <hr className='h-px  bg-gray border-0 ' />
              </div>
              <div className='flex justify-between w-[90%] sm:w-[80%]'>
                <h1 className=' text-sm'>EMAIL</h1>
                <div className='cursor-pointer'>
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
                    Cancel
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
