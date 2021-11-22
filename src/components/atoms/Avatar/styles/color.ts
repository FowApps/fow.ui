import { css } from 'styled-components';

const setColor = (variant: 'primary' | 'secondary' | 'grey'): any => {
    switch (variant) {
        case 'primary':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.primary.main};
                h3 {
                    color: ${(props) => props.theme.fow.colors.common.white};
                }
            `;
        case 'secondary':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.primary.transparent16};
                border: 1px solid
                    ${(props) => props.theme.fow.colors.primary.light};
                h3,
                svg {
                    color: ${(props) => props.theme.fow.colors.common.black48};
                }
            `;
        case 'grey':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.greyLight.light};
                border: 1px solid
                    ${(props) => props.theme.fow.colors.grey.transparent32};
                h3,
                svg {
                    color: ${(props) => props.theme.fow.colors.text.secondary};
                }
            `;
        default:
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.primary.main};
                h3 {
                    color: ${(props) => props.theme.fow.colors.common.white};
                }
            `;
    }
};

export default setColor;
