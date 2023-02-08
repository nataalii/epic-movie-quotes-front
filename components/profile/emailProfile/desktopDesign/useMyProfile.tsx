import useEmails from 'hooks/useEmails';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Message } from 'components/toasts';
import {
  makePrimaryEmail,
  removeEmail,
  updateUser,
  verifyEmail,
} from 'services';
import { RootState } from 'types/stateTypes';

const useMyProfile = () => {
  const { name, email, image } = useSelector((store: RootState) => store.user);
  const { addEmailModal } = useSelector((store: any) => store.modal);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [passConfVisbility, setConfPassVisibility] = useState(false);
  const dispatch = useDispatch();
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [resetPassword, setResetPassword] = useState(false);
  const [editAvatar, setEditAvatar] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleEdit = () => {
    setIsReadOnly(false);
    setValue('name', name);
  };
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });
  const cancelButtonHandler = () => {
    setValue('name', name);
    setValue('newPassword', '');
    setValue('confNewPassword', '');
    clearErrors(['confNewPassword', 'newPassword', 'name']);
    setResetPassword(false);
    setIsReadOnly(true);
    setEditAvatar(false);
    setSelectedImage(image);
  };
  const { emails } = useEmails();
  const { mutate: submitForm } = useMutation(updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
      cancelButtonHandler();
    },
    onError: (errors: any) => {
      const error = errors.response.data.errors?.name;
      setError('name', {
        type: 'nameExists',
        message: error[0],
      });
    },
  });

  const onSubmit = async () => {
    const data = {
      name: getValues('name'),
      password: getValues('newPassword'),
      thumbnail: getValues('avatar')[0],
    };
    console.log(data);
    submitForm(data, {});
    toast(<Message text='Changes updated succsessfully!' />);
  };

  // delete email
  const { mutate: remove } = useMutation(removeEmail, {
    onSuccess: () => {
      queryClient.invalidateQueries('emails');
    },
  });
  const deleteEmail = async (id: string) => {
    remove(id);
  };

  //verify email
  const { mutate: submit } = useMutation(verifyEmail, {
    onSuccess: () => {
      queryClient.invalidateQueries('emails');
      router.push('/profile');
      toast(<Message text='Email Verified Successfully!' />);
    },
  });
  useEffect(() => {
    const verify = async () => {
      if (router.query?.token) {
        submit(router.query?.token);
      }
    };

    verify();
  }, [router, router.query, submit]);

  //make email primary
  const { mutate: makePrimary } = useMutation(makePrimaryEmail, {
    onSuccess: () => {
      queryClient.invalidateQueries('emails');
    },
  });

  return {
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
    setSelectedImage,
    selectedImage,
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
  };
};

export default useMyProfile;