import styled from 'styled-components';
import LoadingOverlay, { LoadingOverlayProps } from 'react-loading-overlay';

interface OverlayProps extends LoadingOverlayProps {
    fullPage?: boolean;
    hasChildren: boolean;
}

interface StaticPlaceholderProps {
    height?: number;
}

export const StyledLoader = styled(LoadingOverlay)<OverlayProps>`
    &.fow-loader-overlay_wrapper {
        width: 100%;
        height: 100%;
    }
    .fow-loader-overlay_overlay {
        position: ${(props) => (props.fullPage ? 'fixed' : 'absolute')};
        background: ${(props) =>
            props.hasChildren ? 'rgba(255, 255, 255, 0.75)' : 'transparent'};
    }
    .fow-loader-overlay_content {
        color: ${(props) => props.theme.fow.colors.primary.dark} !important;
    }
    .fow-loader-overlay_spinner {
        width: 2.5rem;
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
