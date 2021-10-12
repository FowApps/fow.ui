import styled, { css } from 'styled-components';

interface ContainerProps {
    isDestroyOnClose: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;

    ${(props) =>
        props.isDestroyOnClose &&
        css`
            opacity: 0;
            transition: opacity 0.3s;
        `}
`;

export const Header = styled.header`
    padding: ${(props) => props.theme.fow.spacing.small};
    border-bottom: 1px solid ${(props) => props.theme.fow.colors.divider};
`;

export const Body = styled.div`
    flex-grow: 1;
    overflow: auto;
    padding: ${(props) => props.theme.fow.spacing.small};
    word-wrap: break-word;
`;

export const Footer = styled.footer`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: ${(props) => props.theme.fow.spacing.small};
    border-top: 1px solid ${(props) => props.theme.fow.colors.divider};
`;
