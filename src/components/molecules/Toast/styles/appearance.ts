import { css } from 'styled-components';

const setAppearance = (
    appearance?: 'default' | 'success' | 'info' | 'warning' | 'error',
) => {
    switch (appearance) {
        case 'default':
            return css`
                background-color: ${(props) =>
                    props.theme.fow.colors.grey.darker};
            `;
        default:
            return ``;
    }
};

export default setAppearance;
