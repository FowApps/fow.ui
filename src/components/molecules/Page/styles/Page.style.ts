import styled from 'styled-components';
import Space from '../../../atoms/Space';

export const PageWrapper = styled(Space)`
    background-color: white;
`;
export const SidebarWrapper = styled(Space)`
    width: 240px;
    height: 100vh;
    box-shadow: inset -1px 0px 0px ${(props) => props.theme.fow.colors.grey.transparent24};
`;
export const HeaderWrapper = styled(Space)``;
export const FooterWrapper = styled(Space)``;
export const BodyWrapper = styled(Space)`
    overflow-y: auto;
`;
export const ContentWrapper = styled(Space)`
    border-top: 1px solid
        ${(props) => props.theme.fow.colors.grey.transparent24};
    border-bottom: 1px solid
        ${(props) => props.theme.fow.colors.grey.transparent24};
`;
