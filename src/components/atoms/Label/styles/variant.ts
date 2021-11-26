import { css } from 'styled-components';

const setVariant = (color: string, variant: string): any => {
    switch (variant) {
        case 'outlined':
            return css`
                border: 1px solid
                    ${(props) => props.theme.fow.colors[color].dark};
                background-color: ${(props) =>
                    props.theme.fow.colors.common.white};
                color: ${(props) => props.theme.fow.colors[color].dark};
            `;
        case 'filled':
            return css`
                border: none;
                line-height: 18px;
                background-color: ${(props) =>
                    props.theme.fow.colors[color].dark};
                color: ${(props) => props.theme.fow.colors.common.white};
                /* box-shadow: 0px 8px 16px
                    ${(props) =>
                    props.theme.fow.colors[color].transparent24}; */
            `;
        case 'ghost':
            return css`
                border: none;
                line-height: 18px;
                background-color: ${(props) =>
                    props.theme.fow.colors[color].lighter};
                color: ${(props) => props.theme.fow.colors[color].darker};
            `;
        default:
            return '';
    }
};

export default setVariant;
