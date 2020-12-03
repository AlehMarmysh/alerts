import React, { useEffect, useCallback } from 'react';
import { ButtonContainer } from './styles';
import { useDispatch } from 'react-redux';
import { setIsVisibleGlobalAlert } from '../../../store/globalAlert';

const GenericButton = ({ label, color, type }) => {
  const dispatch = useDispatch();

  const alertGlobalButton = useCallback(() => {
    setTimeout(() => {
      dispatch(setIsVisibleGlobalAlert(true));
    }, 10000);
  }, [dispatch]);

  return (
    <ButtonContainer type={type} color={color} onClick={alertGlobalButton}>
      {label}
    </ButtonContainer>
  );
};

export default React.memo(GenericButton);
