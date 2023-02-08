import { Button } from 'components/button';
import {
  AddMovieIcon,
  BackArrow,
  NotVerifiedEmail,
  PrimaryEmail,
} from 'components/icons';
import { Message, MobileMessage } from 'components/toasts';
import { addNewEmail, updateEmails } from 'stores/modalSlice';
import useEmailUpdate from './useEmailUpdate';
import { toast } from 'react-toastify';
import { useMyProfile } from '../desktopDesign';
import { AddNewEmail } from '../emailAdd';
const EmailUpdate = () => {
  const { dispatch, addNewEmailModal, email, emails } = useEmailUpdate();
  const { deleteEmail, makePrimary } = useMyProfile();
  return (
    <div className='flex flex-col inset-0  bg-[#181623] mt-20 mb-10 z-50 fixed  overflow-y-scroll'>
      <div
        className=' m-6 cursor-pointer w-14'
        onClick={() => {
          dispatch(updateEmails());
        }}
      >
        <BackArrow />
      </div>
      <div className=' bg-blue-500 flex flex-col gap-14 w-full items-center py-10'>
        <div className='flex flex-col md:w-[70%] w-[85%] gap-2 relative'>
          <label htmlFor='primaryEmail' className='text-light-gray text-xs'>
            Primary Email
          </label>
          <input
            type='text'
            name='primaryEmail'
            className=' p-2 border-[#198754] border bg-green-700 bg-opacity-20 rounded-md  outline-none'
            readOnly
            value={email}
          />
          <div className='absolute right-4 top-[40px]'>
            <PrimaryEmail />
          </div>
          <hr className='h-px bg-gray border-0 mt-3' />
        </div>
        {emails?.map((email: any) =>
          email.email_verified_at === null ? (
            <div
              className='flex flex-col  md:w-[70%] w-[85%] gap-4 '
              key={email.id}
            >
              <h1 className=' uppercase text-xs'>Change primary email</h1>
              <p>{email.email}</p>
              <div className='flex justify-between text-sm text-light-gray'>
                <span className='italic flex items-center gap-2 text-not-verified-yellow'>
                  <NotVerifiedEmail /> Not verified
                </span>
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
              <hr className='h-px bg-gray border-0 mt-3' />
            </div>
          ) : (
            <div
              className='flex flex-col  md:w-[70%] w-[85%] gap-4 '
              key={email.id}
            >
              <p>{email.email}</p>
              <div className='flex justify-between'>
                <Button
                  item='Make this primary'
                  color='transparent'
                  size=' text-sm px-3'
                  onClick={() => {
                    makePrimary(email.id);
                    toast(
                      <MobileMessage text='Primary email changed succsessfully!' />
                    );
                  }}
                />
                <h2
                  className=' cursor-pointer  text-sm text-light-gray'
                  onClick={() => {
                    deleteEmail(email.id);
                    toast(<MobileMessage text='Your email Removed!' />);
                  }}
                >
                  Remove
                </h2>
              </div>
              <hr className='h-px bg-gray border-0 mt-3' />
            </div>
          )
        )}
        <div className='flex flex-col md:w-[70%] w-[85%] gap-4 relative'>
          <h1 className=' uppercase text-sm'>Add new Email</h1>
          <Button
            item={
              <div className='flex items-center justify-center gap-2 '>
                <AddMovieIcon />
                Add
              </div>
            }
            color='transparent'
            size=' w-full m-auto'
            onClick={() => dispatch(addNewEmail())}
          />
        </div>
        {addNewEmailModal && <AddNewEmail />}
      </div>
    </div>
  );
};

export default EmailUpdate;
