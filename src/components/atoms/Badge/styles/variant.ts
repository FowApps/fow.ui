import { css } from 'styled-components';

const setVariant = (color: string, variant: string): any => {
    switch (variant) {
        case 'outlined':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors[color].transparent16};
                color: ${(props) => props.theme.fow.colors[color].main};
                ${color === 'grey' &&
                css`
                    background: ${(props) =>
                        props.theme.fow.colors.greyDark.transparent16};
                    color: ${(props) => props.theme.fow.colors.greyDark.main};
                `}
            `;
        case 'filled':
            return css`
                border: none;
                line-height: 18px;
                background-color: ${(props) =>
                    props.theme.fow.colors[color].dark};
                color: ${(props) => props.theme.fow.colors.common.white};
                ${color === 'grey' &&
                css`
                    background: ${(props) =>
                        props.theme.fow.colors.greyDark.main};
                `}
            `;
        default:
            return '';
    }
};

export default setVariant;
