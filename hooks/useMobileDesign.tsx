import { useMobileToast } from 'components';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from 'services';
import { setUserData } from 'stores/userDataSlice';
import { RootState } from 'types/stateTypes';

const useMobileDesign = () => {
  const { image, name, email } = useSelector((store: RootState) => store.user);
  const [selectedImage, setSelectedImage] = useState('');
  const [editAvatar, setEditAvatar] = useState(false);
  const methods = useForm({ mode: 'all' });
  const { notification } = useMobileToast();
  const { t } = useTranslation('profile');
  const router = useRouter();
  const queryClient = useQueryClient();
  const setImage = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      setSelectedImage(e.target.result);
    };
    if (file && file.type.match('image.*')) {
      reader.readAsDataURL(file);
    }
    setEditAvatar(true);
  };
  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append('thumbnail', data.mobileAvatar[0]);
    await updateUser(formData).then((res) => {
      dispatch(setUserData(res.data));
    });
    setEditAvatar(false);
    queryClient.invalidateQueries('user');
    notification('Image changed succsessfully');
  };

  const { updateUsernameModal, updatePasswordModal, updateEmailsModal } =
    useSelector((store: RootState) => store.modal);
  const dispatch = useDispatch();
  return {
    image,
    name,
    email,
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
    updateEmailsModal,
    t,
    router,
    queryClient,
  };
};

export default useMobileDesign;
