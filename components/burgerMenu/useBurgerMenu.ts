import { useNavBar } from 'components/navBar';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'types/stateTypes';

const useBurgerMenu = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { name, image } = useSelector((store: RootState) => store.user);
  const { logoutHandler } = useNavBar();

  return { router, dispatch, name, image, logoutHandler };
};

export default useBurgerMenu;
