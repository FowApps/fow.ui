import { css } from 'styled-components';

const setVariant = (color: string, variant: string): any => {
    switch (variant) {
        case 'outlined':
            return css`
                border: 1px solid
                    ${(props) => props.theme.fow.colors[color].transparent48};
                background-color: ${(props) =>
                    props.theme.fow.colors.common.white};
                color: ${(props) => props.theme.fow.colors[color].main};
            `;
        case 'filled':
            return css`
                border: none;
                background-color: ${(props) =>
                    props.theme.fow.colors[color].main};
                color: ${(props) => props.theme.fow.colors.common.white};
                box-shadow: 0px 8px 16px
                    ${(props) => props.theme.fow.colors[color].transparent24};
            `;
        case 'ghost':
            return css`
                border: none;
                background-color: ${(props) =>
                    props.theme.fow.colors[color].transparent16};
                color: ${(props) => props.theme.fow.colors[color].dark};
            `;
        default:
            return '';
    }
};

export default setVariant;
