import styled from 'styled-components';
import { Form, FormGroup } from 'reactstrap';

export const LoginFormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  border: 1px solid black;
  padding: 20px;
`;

export const LoginFormGroup = styled(FormGroup)`
  width: 100%;
`;
