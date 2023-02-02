import { useState } from 'react';
import { useSelector } from 'react-redux';

const useMyProfile = () => {
  const { name, email } = useSelector((store: any) => store.user);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [passConfVisbility, setConfPassVisibility] = useState(false);

  return {
    name,
    email,
    passwordVisibility,
    setPasswordVisibility,
    passConfVisbility,
    setConfPassVisibility,
  };
};

export default useMyProfile;
