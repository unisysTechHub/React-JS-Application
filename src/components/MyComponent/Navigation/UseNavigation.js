// useNavigation.js
import { useHistory } from 'react-router-dom';

const useNavigation = () => {
  const history = useHistory();

  const navigateTo = (route) => {
    history.push(route);
  };

  return {
    navigateTo,
  };
};

export default useNavigation;
