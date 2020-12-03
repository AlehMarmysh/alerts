import React, { useCallback } from 'react';
import SearchForm from '../forms/SeacrhForm';
import { AppContainer, CustomGlobalAlert } from './styles';
import LoginForm from '../forms/LoginForm';
import CustomAlert from '../blocks/Alerts';
import { useDispatch, useSelector } from 'react-redux';
import { getIsVisibleGlobalAlert, setIsVisibleGlobalAlert } from '../../store/globalAlert';

const App = () => {
  const isVisibleGlobalAlert = useSelector(getIsVisibleGlobalAlert);
  const dispatch = useDispatch();

  const hideGlobalAlert = useCallback(isOpen => {
    dispatch(setIsVisibleGlobalAlert(isOpen));
  }, []);

  return (
    <AppContainer>
      {isVisibleGlobalAlert && (
        <CustomAlert
          isGlobalAlert
          isCloseHandle
          color="danger"
          label="i am local warning alert witch closes automatically"
          setIsAlertWindow={hideGlobalAlert}
        />
      )}
      <SearchForm />
      <LoginForm />
    </AppContainer>
  );
};

export default React.memo(App);
