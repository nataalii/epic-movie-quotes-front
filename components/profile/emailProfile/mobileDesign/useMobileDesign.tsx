import { MobileMessage } from 'components/toasts';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUser } from 'services';

const useMobileDesign = () => {
  const { image, name } = useSelector((store: any) => store.user);
  const [selectedImage, setSelectedImage] = useState('');
  const [editAvatar, setEditAvatar] = useState(false);
  const methods = useForm({ mode: 'all' });
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
    await updateUser(formData);
    setEditAvatar(false);
    toast(<MobileMessage text='Image changed succsessfully' />, {
      style: { maxWidth: '340px', backgroundColor: '#D1E7DD' },
    });
  };
  const { updateUsernameModal, updatePasswordModal } = useSelector(
    (store: any) => store.modal
  );
  const dispatch = useDispatch();
  return {
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
  };
};

export default useMobileDesign;
