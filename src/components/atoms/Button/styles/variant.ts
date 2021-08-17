import { css } from 'styled-components';

type VariantTypes = 'text' | 'outlined' | 'contained';
type ColorTypes = 'grey' | 'primary' | 'info' | 'success' | 'warning' | 'error';

const setVariant = (color: ColorTypes, variant: VariantTypes): any => {
    switch (variant) {
        case 'text':
            return css`
                color: ${color === 'grey'
                    ? (props) => props.theme.fow.colors.grey.darker
                    : (props) => props.theme.fow.colors[color].main};
                background-color: transparent;
                border: none !important;

                &:hover {
                    background-color: ${(props) =>
                        props.theme.fow.colors[color].transparent8};
                }

                &:active {
                    background-color: ${(props) =>
                        props.theme.fow.colors[color].transparent16};
                }

                &:disabled {
                    color: ${(props) =>
                        props.theme.fow.colors.grey.transparent48} !important;
                    background-color: transparent !important;
                }
            `;
        case 'outlined':
            return css`
                color: ${color === 'grey'
                    ? (props) => props.theme.fow.colors.grey.darker
                    : (props) => props.theme.fow.colors[color].main};
                background-color: ${(props) =>
                    props.theme.fow.colors.common.white};
                border: 1px solid
                    ${(props) => props.theme.fow.colors[color].transparent48};

                &:hover {
                    background-color: ${(props) =>
                        props.theme.fow.colors[color].transparent8};
                    border-color: ${(props) =>
                        props.theme.fow.colors[color].main} !important;
                }

                &:active {
                    background-color: ${(props) =>
                        props.theme.fow.colors[color].transparent16};
                }

                &:disabled {
                    color: ${(props) =>
                        props.theme.fow.colors.grey.transparent48} !important;
                    background-color: transparent !important;
                    border-color: ${(props) =>
                        props.theme.fow.colors.grey.transparent24} !important;
                }
            `;
        case 'contained':
            return css`
                color: ${color === 'success' ||
                color === 'warning' ||
                color === 'grey'
                    ? (props) => props.theme.fow.colors.grey.darker
                    : (props) => props.theme.fow.colors.common.white};
                background-color: ${color === 'grey'
                    ? (props) => props.theme.fow.colors.grey.lighter
                    : (props) => props.theme.fow.colors[color].main};
                border: none;
                box-shadow: 0px 8px 16px
                    ${(props) => props.theme.fow.colors[color].transparent24};

                &:hover {
                    color: ${(props) => props.theme.fow.colors.common.white};
                    background-color: ${(props) =>
                        props.theme.fow.colors[color].dark};
                }

                &:active {
                    color: ${(props) => props.theme.fow.colors.common.white};
                    background-color: ${(props) =>
                        props.theme.fow.colors[color].darker};
                }

                &:disabled {
                    color: ${(props) =>
                        props.theme.fow.colors.grey.transparent48} !important;
                    background-color: ${(props) =>
                        props.theme.fow.colors.grey.transparent24} !important;
                    box-shadow: none !important;
                }
            `;
        default:
            return '';
    }
};

export default setVariant;
