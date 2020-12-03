import styled from 'styled-components';
import { Alert } from 'reactstrap';

export const AlertsContainer = styled(Alert)`
  width: 100%;
  border-radius: 4px;
  height: 140px;
  padding: 10px 15px;
    
  &.alert-dismissible .close {
    position: relative;
    padding: 0.10rem 0.25rem;
  }
`;
