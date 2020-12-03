import React, { useState, useCallback, useEffect } from 'react';
import { AlertsContainer } from './styles';

const CustomAlert = ({ label, color, isCloseHandle, setIsAlertWindow }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isCloseHandle) {
      setTimeout(() => {
        setIsVisible(!isVisible);
        setIsAlertWindow(false);
      }, 2000);
    }
  }, []);

  const onDismiss = useCallback(() => {
    setIsVisible(!isVisible);
    setIsAlertWindow(false);
  }, [isVisible]);

  return (
    <>
      {isCloseHandle ? (
        <AlertsContainer color={color} isOpen={isVisible} toggle={onDismiss}>
          {label}
        </AlertsContainer>
      ) : (
        <AlertsContainer color={color} isOpen={isVisible}>
          {label}
        </AlertsContainer>
      )}
    </>
  );
};

export default React.memo(CustomAlert);
