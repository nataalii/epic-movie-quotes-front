/* eslint-disable @next/next/no-img-element */
import { Button } from 'components/button';
import { useMyProfile } from '../emailProfile';

const GoogleDektop = () => {
  const {
    handleSubmit,
    onSubmit,
    selectedImage,
    image,
    isReadOnly,
    handleEdit,
    name,
    email,
    editAvatar,
    cancelButtonHandler,
    register,
    errors,
    setImage,
  } = useMyProfile();
  return (
    <div className='w-[90rem] '>
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
                onChange: (e) => {
                  setImage(e);
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
            <div className='flex flex-col w-[55%] gap-2 relative'>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                name='email'
                className=' p-2 bg-light-gray rounded-md text-[#212529] outline-none'
                readOnly
                value={email}
              />
            </div>

            {(!isReadOnly || editAvatar) && (
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
export default GoogleDektop;
