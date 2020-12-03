import React, { useState, useCallback } from 'react';
import { SearchFormContainer, SearchFormGroup } from './styles';
import TextInput from '../../blocks/TextInput';
import GenericButton from '../../blocks/GenericButton';
import CustomAlert from '../../blocks/Alerts';

const SearchForm = () => {
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
      <SearchFormContainer onSubmit={e => onSubmit(e)}>
        {isAlertWindow && (
          <CustomAlert
            isCloseHandle
            color="warning"
            label="i am local warning alert with close handle"
            setIsAlertWindow={setIsAlertWindow}
          />
        )}
        <SearchFormGroup>
          <TextInput name="search" placeholder="search" />
        </SearchFormGroup>
        <GenericButton label="click to show warning alert" color="warning" />
      </SearchFormContainer>
    </>
  );
};

export default React.memo(SearchForm);
