import styled from 'styled-components';
import setAppearance from './appearance';

type ToastWrapperType = {
    appearance?: 'default' | 'success' | 'info' | 'warning' | 'error';
};

type CloseIconType = {
    appearance?: 'default' | 'success' | 'info' | 'warning' | 'error';
};

export const ToastContainer = styled.div`
    position: absolute;
    top: 2rem;
    right: 2rem;
`;

export const ToastWrapper = styled.div<ToastWrapperType>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 28.5rem;
    min-width: 28.5rem;
    max-width: 28.5rem;
    padding: ${(props) => props.theme.fow.spacing.small};
    border-radius: 8px;
    box-shadow: ${(props) => props.theme.fow.shadows.z8};
    ${(props) => setAppearance(props.appearance)}
`;

export const CloseIcon = styled.div<CloseIconType>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${(props) => props.theme.fow.spacing.small};
    color: ${(props) =>
        props.appearance === 'default'
            ? props.theme.fow.colors.common.white
            : props.theme.fow.colors.text.primary};
    cursor: pointer;
    opacity: 0.48;
`;
