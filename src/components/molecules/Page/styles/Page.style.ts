import styled from 'styled-components';
import Space from '../../../atoms/Space';

export const PageWrapper = styled(Space)`
    background-color: white;
`;
export const SidebarWrapper = styled(Space)`
    width: 240px;
    height: 100vh;
    box-shadow: inset -1px 0px 0px rgba(145, 158, 171, 0.24);
`;
export const HeaderWrapper = styled(Space)`
    margin-bottom: 16px;
`;
export const BodyWrapper = styled(Space)`
    padding: 0 48px;
    overflow-y: auto;
`;
