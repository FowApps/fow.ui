import { css } from 'styled-components';

const setColor = (variant: string): any => {
    switch (variant) {
        case 'primary':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.primary.main};
                h3 {
                    color: ${(props) => props.theme.fow.colors.common.white};
                }
            `;
        default:
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.grey.light};

                h3 {
                    color: ${(props) => props.theme.fow.colors.text.secondary};
                }
            `;
    }
};

export default setColor;
