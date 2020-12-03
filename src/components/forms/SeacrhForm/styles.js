import styled from 'styled-components';
import { Form, FormGroup } from 'reactstrap';

export const SearchFormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  border: 1px solid black;
  padding: 20px;
  margin-right: 50px;
`;

export const SearchFormGroup = styled(FormGroup)`
  width: 100%;
`;
