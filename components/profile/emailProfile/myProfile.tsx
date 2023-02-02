import { Button } from 'components/button';
import {
  AddMovieIcon,
  Circle,
  EyeClosed,
  EyeOpen,
  PrimaryEmail,
  ProfileIcon,
} from 'components/icons';
import NotVerifiedEmail from 'components/icons/NotVerifiedEmail';
import useMyProfile from './useMyProfile';

const MyProfile = () => {
  const {
    name,
    email,
    passwordVisibility,
    setPasswordVisibility,
    passConfVisbility,
    setConfPassVisibility,
  } = useMyProfile();
  return (
    <div className='w-[90rem] '>
      <h1 className='text-2xl ml-20'>My Profile</h1>

      <div className='max-w-[60rem] bg-blue-600 rounded-2xl my-28 m-10 pb-16'>
        <form action=''>
          <div className=' flex flex-col gap-2 items-center justify-center -translate-y-16 z-0'>
            <ProfileIcon size={150} />
            <input type='file' className='hidden' name='avatar' id='avatar' />
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
                  name='name'
                  className=' p-2 bg-light-gray rounded-md text-[#212529] outline-none'
                  readOnly
                  value={name}
                />
                <hr className='h-px mt-8 bg-gray border-0' />
              </div>
              <h1 className=' mx-6 -mt-4 text-light-gray'>Edit</h1>
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
            <div className='flex w-full gap-5  '>
              <div className='flex flex-col w-[55%] gap-2 relative'>
                <label htmlFor='notVerifiedEmail'>Email</label>
                <input
                  type='text'
                  id='notVerifiedEmail'
                  name='notVerifiedEmail'
                  className=' p-2 border-[#EC9524] border bg-yellow-700 bg-opacity-20 rounded-md  outline-none'
                  readOnly
                  value={email}
                />
                <div className='absolute right-4 top-[47px]'>
                  <NotVerifiedEmail />
                </div>
              </div>
              <div className=' mt-10 text-light-gray flex gap-5'>
                <h2>Not verified</h2>
                <h2 className=''>Remove</h2>
              </div>
            </div>
            <div className='flex w-full gap-5 '>
              <div className='flex flex-col w-[55%] gap-2'>
                <label htmlFor='email'>Email</label>
                <input
                  type='text'
                  id='email'
                  name='email'
                  className=' p-2 bg-light-gray rounded-md text-[#212529] outline-none'
                  readOnly
                  value={email}
                />
              </div>
              <div className='mt-10  text-light-gray flex gap-4'>
                <h2>Make this Primary</h2>
                <h2>Remove</h2>
              </div>
            </div>

            <div className='flex flex-col w-[55%] gap-7'>
              <div className='px-6 py-2 text-white rounded-md outline-1 outline-white outline -outline-offset-1 w-48 flex gap-2 cursor-pointer items-center'>
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
              <div className='mt-10  text-light-gray flex gap-4'>
                <h2>Edit</h2>
              </div>
            </div>
            <div className=' flex flex-col gap-3 w-[55%] bg-transparent border-[1px] border-gray border-opacity-70 rounded-md p-5'>
              <h1>Passwords should contain:</h1>
              <ul>
                <li className='flex items-center gap-2 text-[#9C9A9A] text-sm '>
                  <Circle color='gray' />8 or more characters
                </li>
                <li className='flex items-center gap-2 text-sm'>
                  <Circle color='#198754' />
                  15 lowercase characters
                </li>
              </ul>
            </div>
            <div className='flex flex-col w-[55%] gap-8'>
              <div className='flex flex-col gap-2 relative'>
                <label htmlFor='newPassword'>New Password</label>
                <input
                  type={passwordVisibility ? 'text' : 'password'}
                  id='newPassword'
                  name='newPassword'
                  className=' p-2 bg-light-gray rounded-md text-[#212529] outline-none'
                />
                <div
                  className='absolute right-4 top-[45px] cursor-pointer'
                  onClick={() =>
                    setPasswordVisibility((visibility) => !visibility)
                  }
                >
                  {passwordVisibility ? <EyeOpen /> : <EyeClosed />}
                </div>
              </div>
              <div className='flex flex-col gap-2 relative'>
                <label htmlFor='confNewPassword'>Confirm New Password</label>
                <input
                  type={passConfVisbility ? 'text' : 'password'}
                  id='confNewPassword'
                  name='confNewPassword'
                  className=' p-2 bg-light-gray rounded-md text-[#212529] outline-none'
                />
                <div
                  className='absolute right-4 top-[45px] cursor-pointer'
                  onClick={() =>
                    setConfPassVisibility((visibility) => !visibility)
                  }
                >
                  {passConfVisbility ? <EyeOpen /> : <EyeClosed />}
                </div>
              </div>
            </div>
            <div className='relative '>
              <div className='absolute right-0 mt-24 flex gap-5 items-center'>
                <h1>Cancel</h1>
                <Button item='Save changes' color='red' />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
