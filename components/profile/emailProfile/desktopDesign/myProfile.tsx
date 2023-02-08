/* eslint-disable @next/next/no-img-element */
import { Button } from 'components/button';
import {
  AddMovieIcon,
  Circle,
  EyeClosed,
  EyeOpen,
  PrimaryEmail,
} from 'components/icons';
import NotVerifiedEmail from 'components/icons/NotVerifiedEmail';
import { Message } from 'components/toasts';
import { toast } from 'react-toastify';
import { openAddEmailModal } from 'stores/modalSlice';
import { AddEmail } from '../addEmail';
import useMyProfile from './useMyProfile';

const MyProfile = () => {
  const {
    name,
    email,
    image,
    passwordVisibility,
    setPasswordVisibility,
    passConfVisbility,
    setConfPassVisibility,
    addEmailModal,
    dispatch,
    isReadOnly,
    resetPassword,
    editAvatar,
    setEditAvatar,
    selectedImage,
    setSelectedImage,
    handleEdit,
    register,
    handleSubmit,
    errors,
    onSubmit,
    setResetPassword,
    getValues,
    cancelButtonHandler,
    emails,
    deleteEmail,
    makePrimary,
  } = useMyProfile();
  return (
    <div className='w-[90rem] '>
      {addEmailModal && <AddEmail />}
      <h1 className='text-2xl ml-20'>My Profile</h1>

      <div className='max-w-[60rem] bg-blue-600 rounded-2xl my-28 m-10 pb-16'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=' flex flex-col gap-2 items-center justify-center -translate-y-16 z-0'>
            <img
              src={selectedImage || `${image}`}
              alt='avatar'
              className=' w-40 h-40 rounded-full object-cover'
            />
            <input
              type='file'
              className='hidden'
              id='avatar'
              {...register('avatar', {
                onChange(event) {
                  const file = event.target.files[0];
                  const reader = new FileReader();
                  reader.onload = (e: any) => {
                    setSelectedImage(e.target.result);
                  };
                  if (file && file.type.match('image.*')) {
                    reader.readAsDataURL(file);
                  }
                  setEditAvatar(true);
                },
              })}
            />
            <label className='text-xl cursor-pointer' htmlFor='avatar'>
              Upload new Photo
            </label>
          </div>
          <div className='flex flex-col gap-7 ml-24 w-[90%]'>
            <div className='flex w-full items-center '>
              <div className='flex flex-col w-[55%] gap-2'>
                <label htmlFor='name'>Username</label>
                <input
                  type='text'
                  id='name'
                  className=' p-2 bg-light-gray rounded-md text-[#212529] outline-none'
                  readOnly={isReadOnly}
                  defaultValue={name}
                  {...register('name', {
                    required: !isReadOnly
                      ? 'Username field is required'
                      : undefined,
                    minLength: {
                      value: 3,
                      message: 'name should contain min 3 symbols',
                    },
                  })}
                />
                <div className='relative'>
                  <p className=' text-danger h-5 font-normal text-base my-1 '>
                    {(errors.name?.type === 'nameExists' &&
                      (errors.name?.message as string)) ||
                      (errors.name?.message as string)}
                  </p>
                </div>

                <hr className='h-px bg-gray border-0' />
              </div>
              {isReadOnly && (
                <h1
                  className=' mx-6 -mt-4 text-light-gray cursor-pointer'
                  onClick={handleEdit}
                >
                  Edit
                </h1>
              )}
            </div>
            <div className='flex w-full gap-5 '>
              <div className='flex flex-col w-[55%] gap-2 relative'>
                <label htmlFor='primaryEmail'>Email</label>
                <input
                  type='text'
                  id='primaryEmail'
                  name='primaryEmail'
                  className=' p-2 border-[#198754] border bg-green-700 bg-opacity-20 rounded-md  outline-none'
                  readOnly
                  value={email}
                />
                <div className='absolute right-4 top-[47px]'>
                  <PrimaryEmail />
                </div>
              </div>
              <h2 className=' mt-10  text-light-gray'>Primary Email</h2>
            </div>
            {emails?.map((email: any) =>
              email.email_verified_at === null ? (
                <div className='flex w-full gap-5  ' key={email.id}>
                  <div className='flex flex-col w-[55%] gap-2 relative'>
                    <label>Email</label>
                    <input
                      type='text'
                      name='notVerifiedEmail'
                      className=' p-2 border-[#EC9524] border bg-yellow-700 bg-opacity-20 rounded-md  outline-none'
                      readOnly
                      value={email.email}
                    />
                    <div className='absolute right-4 top-[47px]'>
                      <NotVerifiedEmail />
                    </div>
                  </div>
                  <div className=' mt-10 text-light-gray flex gap-5'>
                    <h2>Not verified</h2>
                    <h2
                      className=' cursor-pointer'
                      onClick={() => {
                        deleteEmail(email.id);
                        toast(<Message text='Your email Removed!' />);
                      }}
                    >
                      Remove
                    </h2>
                  </div>
                </div>
              ) : (
                <div className='flex w-full gap-5 ' key={email.id}>
                  <div className='flex flex-col w-[55%] gap-2'>
                    <label htmlFor='email'>Email</label>
                    <input
                      type='text'
                      name='email'
                      className=' p-2 bg-light-gray rounded-md text-[#212529] outline-none'
                      readOnly
                      value={email.email}
                    />
                  </div>
                  <div className='mt-10  text-light-gray flex gap-4 cursor-pointer'>
                    <h2
                      onClick={() => {
                        makePrimary(email.id);
                        toast(<Message text='Email changed to Primary!' />);
                      }}
                    >
                      Make this Primary
                    </h2>
                    <h2
                      className=' cursor-pointer'
                      onClick={() => {
                        deleteEmail(email.id);
                        toast(<Message text='Your email Removed!' />);
                      }}
                    >
                      Remove
                    </h2>
                  </div>
                </div>
              )
            )}

            <div className='flex flex-col w-[55%] gap-7'>
              <div
                className='px-6 py-2 text-white rounded-md outline-1 outline-white outline -outline-offset-1 w-48 flex gap-2 cursor-pointer items-center'
                onClick={() => dispatch(openAddEmailModal())}
              >
                <AddMovieIcon />
                {'Add new email'}
              </div>
              <hr className='h-px bg-gray border-0' />
            </div>
            <div className='flex w-full gap-5 '>
              <div className='flex flex-col w-[55%] gap-2'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  className=' p-2 bg-light-gray rounded-md text-[#212529] outline-none'
                  readOnly
                  value='redberiko'
                />
              </div>
              <div className='mt-10  text-light-gray flex gap-4 cursor-pointer'>
                {!resetPassword && (
                  <h2 onClick={() => setResetPassword(true)}>Edit</h2>
                )}
              </div>
            </div>

            {resetPassword && (
              <>
                <div className=' flex flex-col gap-3 w-[55%] bg-transparent border-[1px] border-gray border-opacity-70 rounded-md p-5'>
                  <h1>Passwords should contain:</h1>
                  <ul>
                    <li
                      className={`flex items-center gap-2 text-sm ${
                        getValues('newPassword')?.length >= 8
                          ? 'text-white'
                          : 'text-[#9C9A9A]'
                      }`}
                    >
                      <Circle
                        color={`${
                          getValues('newPassword')?.length >= 8
                            ? '#198754'
                            : 'gray'
                        }`}
                      />
                      8 or more characters
                    </li>
                    <li
                      className={`flex items-center gap-2 text-sm ${
                        getValues('newPassword')?.length <= 15 &&
                        /^[a-z0-9]*$/.test(getValues('newPassword'))
                          ? 'text-white'
                          : 'text-[#9C9A9A]'
                      }`}
                    >
                      <Circle
                        color={`${
                          getValues('newPassword')?.length <= 15 &&
                          /^[a-z0-9]*$/.test(getValues('newPassword'))
                            ? '#198754'
                            : 'gray'
                        }`}
                      />
                      15 lowercase character
                    </li>
                  </ul>
                </div>
                <div className='flex flex-col w-[55%] '>
                  <div className='flex flex-col gap-2 relative'>
                    <label htmlFor='newPassword'>New Password</label>
                    <input
                      type={passwordVisibility ? 'text' : 'password'}
                      id='newPassword'
                      className=' p-2 bg-light-gray rounded-md text-[#212529] outline-none'
                      {...register('newPassword', {
                        required: 'password field is required',
                        minLength: {
                          value: 8,
                          message: 'password should contain min 8 symbols',
                        },
                        maxLength: {
                          value: 15,
                          message: 'password should contain max 15 symbols',
                        },
                      })}
                    />
                    <div
                      className='absolute right-4 top-[45px] cursor-pointer'
                      onClick={() =>
                        setPasswordVisibility((visibility) => !visibility)
                      }
                    >
                      {passwordVisibility ? <EyeOpen /> : <EyeClosed />}
                    </div>
                    <div className='relative'>
                      <p className=' text-danger h-5 font-normal text-base mb-1 '>
                        {errors.newPassword?.message as string}
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-col gap-2 relative'>
                    <label htmlFor='confNewPassword'>
                      Confirm New Password
                    </label>
                    <input
                      type={passConfVisbility ? 'text' : 'password'}
                      id='confNewPassword'
                      className=' p-2 bg-light-gray rounded-md text-[#212529] outline-none'
                      {...register('confNewPassword', {
                        required: 'Confirm password field is required',
                        validate: (value) => {
                          const { newPassword } = getValues();
                          return (
                            newPassword === value || 'Passwords should match!'
                          );
                        },
                      })}
                    />
                    <div
                      className='absolute right-4 top-[45px] cursor-pointer'
                      onClick={() =>
                        setConfPassVisibility((visibility) => !visibility)
                      }
                    >
                      {passConfVisbility ? <EyeOpen /> : <EyeClosed />}
                    </div>
                    <div className='relative'>
                      <p className=' text-danger h-5 font-normal text-base mb-1 '>
                        {errors.confNewPassword?.message as string}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
            {(resetPassword || !isReadOnly || editAvatar) && (
              <div className='relative '>
                <div className='absolute right-0 mt-24 flex gap-5 items-center cursor-pointer'>
                  <h1 onClick={() => cancelButtonHandler()}>Cancel</h1>
                  <Button item='Save changes' color='red' />
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
