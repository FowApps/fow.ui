import styled from 'styled-components';
import LoadingOverlay, { LoadingOverlayProps } from 'react-loading-overlay';

interface OverlayProps extends LoadingOverlayProps {
    fullPage?: boolean;
    hasChildren: boolean;
    size?: 'small' | 'medium';
    overlayColor: 'white' | 'grey';
}

interface StaticPlaceholderProps {
    height?: number;
}

const overlayColor = {
    white: 'rgba(255, 255, 255, 0.75)',
    grey: ' rgba(249, 250, 251, 0.75)',
};

export const StyledLoader = styled(LoadingOverlay)<OverlayProps>`
    &.fow-loader-overlay_wrapper {
        width: 100%;
        height: 100%;
    }
    .fow-loader-overlay_overlay {
        position: ${(props) => (props.fullPage ? 'fixed' : 'absolute')};
        background: ${(props) =>
            props.hasChildren || props.fullPage
                ? overlayColor[props.overlayColor]
                : 'transparent'};
    }
    .fow-loader-overlay_content {
        color: ${(props) => props.theme.fow.colors.primary.dark} !important;
    }
    .fow-loader-overlay_spinner {
        width: ${(props) => (props.size === 'medium' ? '2.5rem' : '1.5rem')};
        margin-bottom: ${(props) =>
            props.text ? props.theme.fow.spacing.small : 0};
        svg circle {
            stroke: ${(props) => props.theme.fow.colors.primary.dark};
        }
    }
`;

export const StaticPlaceholder = styled.div<StaticPlaceholderProps>`
    height: ${(props) => props.height || 0}px;
    background-color: transparent !important;
`;
