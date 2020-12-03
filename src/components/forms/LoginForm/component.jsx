import React, { useState, useCallback } from 'react';
import { LoginFormContainer, LoginFormGroup } from './styles';
import TextInput from '../../blocks/TextInput';
import GenericButton from '../../blocks/GenericButton';
import CustomAlert from '../../blocks/Alerts';

const LoginForm = () => {
  const [isAlertWindow, setIsAlertWindow] = useState(false);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      setIsAlertWindow(true);
    },
    [isAlertWindow],
  );

  return (
    <>
      <LoginFormContainer onSubmit={e => onSubmit(e)}>
        {isAlertWindow && (
          <CustomAlert
            color="success"
            label="i am local warning alert witch closes automatically"
            setIsAlertWindow={setIsAlertWindow}
          />
        )}
        <LoginFormGroup>
          <TextInput name="email" placeholder="email" type="email" />
        </LoginFormGroup>
        <LoginFormGroup>
          <TextInput name="password" placeholder="password" type="password" />
        </LoginFormGroup>
        <GenericButton label="click to show success alert" color="success" />
      </LoginFormContainer>
    </>
  );
};

export default React.memo(LoginForm);
