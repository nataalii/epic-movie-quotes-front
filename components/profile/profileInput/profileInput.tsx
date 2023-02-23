import { REGEX_EMAIL } from 'config';
import { useTranslation } from 'next-i18next';
import { useFormContext } from 'react-hook-form';
import { profileInputTypes } from 'types';

const ProfileInput: React.FC<profileInputTypes> = (props) => {
  const form = useFormContext();
  const { t } = useTranslation('errors');
  return (
    <div className='flex flex-col w-[90%] m-auto  gap-4'>
      <label htmlFor={props.name}> {props.label}</label>
      <input
        type='text'
        className=' p-2 bg-light-gray rounded-md text-[#212529] outline-none'
        placeholder={props.placeholder}
        {...form.register(props.name, {
          required: t('required') as string,
          pattern: {
            value: REGEX_EMAIL,
            message: t('email_valid'),
          },
        })}
      />
      <div className='relative'>
        <p className=' text-danger h-1 font-normal text-base '>
          {(props.error?.type === props.serverError &&
            (props.error?.message as string)) ||
            (props.error?.message as string)}
        </p>
      </div>
    </div>
  );
};

export default ProfileInput;
