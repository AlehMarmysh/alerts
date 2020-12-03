import styled from 'styled-components';
import { Alert } from 'reactstrap';

export const AlertsContainer = styled(Alert)`
  width: ${({isGlobalAlert}) => isGlobalAlert ? '250px' : '100%'};
  border-radius: 4px;
  height: 140px;
  padding: 10px 15px;
  position: ${({isGlobalAlert}) => isGlobalAlert && 'fixed'};
  top: ${({isGlobalAlert}) => isGlobalAlert && '0'};
  right: ${({isGlobalAlert}) => isGlobalAlert && '0'};
    
  &.alert-dismissible .close {
    position: relative;
    padding: 0.10rem 0.25rem;
  }
`;
