import { Button } from 'components/button';
import ProfileInput from 'components/profile/profileInput/profileInput';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { addEmail } from 'services';
import { closeAddEmailModal } from 'stores/modalSlice';

const AddEmail = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });
  const { mutate: submitForm } = useMutation(addEmail, {
    onSuccess: () => {
      queryClient.invalidateQueries('emails');
      dispatch(closeAddEmailModal());
    },
  });
  const onSubmit = async (data: any) => {
    submitForm(data);
  };
  return (
    <div
      className=' mt-20 flex inset-0  bg-opacity-30 backdrop-blur-sm z-50 items-center fixed '
      onClick={() => dispatch(closeAddEmailModal())}
    >
      <div
        className=' relative sm:w-[30rem] sm:h-auto sm:pb-14 w-screen h-screen  bg-[#181623] m-auto rounded-xl max-h-[90%] overflow-auto flex flex-col gap-5'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h1 className='w-[90%] m-auto mt-5'>Add New Email</h1>
        <hr className='w-full border-[#efefef4d] ' />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ProfileInput
            label='New Email'
            name='newEmail'
            placeholder='Enter new email'
            register={register('email', {
              required: 'Field is required',
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Email should be valid',
              },
            })}
            error={errors.email}
            serverError='emailExists'
          />

          <div className=' relative mt-5'>
            <div className='flex items-center gap-4 absolute right-6 -top-1 cursor-pointer'>
              <p onClick={() => dispatch(closeAddEmailModal())}>Cancel</p>
              <Button item='Add' color='red' size='w-18' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmail;
