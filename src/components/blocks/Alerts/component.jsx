import React, { useState, useCallback, useEffect } from 'react';
import { AlertsContainer } from './styles';

const CustomAlert = ({ label, color, isCloseHandle, setIsAlertWindow, isGlobalAlert }) => {
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
      <AlertsContainer
        color={color}
        isOpen={isVisible}
        toggle={isCloseHandle && onDismiss}
        isGlobalAlert={isGlobalAlert}
      >
        {label}
      </AlertsContainer>
    </>
  );
};

export default React.memo(CustomAlert);
