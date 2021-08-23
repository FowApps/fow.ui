import { css } from 'styled-components';

type VariantTypes = 'text' | 'outlined' | 'contained';
type ColorTypes = 'grey' | 'primary' | 'info' | 'success' | 'warning' | 'error';

const setVariant = (color: ColorTypes, variant: VariantTypes): any => {
    switch (variant) {
        case 'text':
            return css`
                border: none !important;
                background-color: transparent;
                color: ${color === 'grey'
                    ? (props) => props.theme.fow.colors.grey.darker
                    : (props) => props.theme.fow.colors[color].main};

                &:hover {
                    background-color: ${(props) =>
                        props.theme.fow.colors[color].transparent8};
                }

                &:active {
                    background-color: ${(props) =>
                        props.theme.fow.colors[color].transparent16};
                }

                &:disabled {
                    background-color: transparent !important;
                    color: ${(props) =>
                        props.theme.fow.colors.grey.transparent48} !important;
                }
            `;
        case 'outlined':
            return css`
                border: 1px solid
                    ${(props) => props.theme.fow.colors[color].transparent48};
                background-color: ${(props) =>
                    props.theme.fow.colors.common.white};
                color: ${color === 'grey'
                    ? (props) => props.theme.fow.colors.grey.darker
                    : (props) => props.theme.fow.colors[color].main};

                &:hover {
                    border-color: ${(props) =>
                        props.theme.fow.colors[color].main} !important;
                    background-color: ${(props) =>
                        props.theme.fow.colors[color].transparent8};
                }

                &:active {
                    background-color: ${(props) =>
                        props.theme.fow.colors[color].transparent16};
                }

                &:disabled {
                    border-color: ${(props) =>
                        props.theme.fow.colors.grey.transparent24} !important;
                    background-color: transparent !important;
                    color: ${(props) =>
                        props.theme.fow.colors.grey.transparent48} !important;
                }
            `;
        case 'contained':
            return css`
                border: none;
                background-color: ${color === 'grey'
                    ? (props) => props.theme.fow.colors.grey.lighter
                    : (props) => props.theme.fow.colors[color].main};
                color: ${color === 'success' ||
                color === 'warning' ||
                color === 'grey'
                    ? (props) => props.theme.fow.colors.grey.darker
                    : (props) => props.theme.fow.colors.common.white};
                box-shadow: 0px 8px 16px
                    ${(props) => props.theme.fow.colors[color].transparent24};

                &:hover {
                    background-color: ${(props) =>
                        props.theme.fow.colors[color].dark};
                    color: ${(props) => props.theme.fow.colors.common.white};
                }

                &:active {
                    background-color: ${(props) =>
                        props.theme.fow.colors[color].darker};
                    color: ${(props) => props.theme.fow.colors.common.white};
                }

                &:disabled {
                    background-color: ${(props) =>
                        props.theme.fow.colors.grey.transparent24} !important;
                    color: ${(props) =>
                        props.theme.fow.colors.grey.transparent48} !important;
                    box-shadow: none !important;
                }
            `;
        default:
            return '';
    }
};

export default setVariant;
