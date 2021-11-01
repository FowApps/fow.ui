import { css } from 'styled-components';

const setColor = (progress: number): any => {
    if (progress >= 70) {
        return css`
            background-color: ${(props) => props.theme.fow.colors.success.dark};
        `;
    }
    if (progress > 30 && progress < 70) {
        return css`
            background-color: ${(props) => props.theme.fow.colors.warning.dark};
        `;
    }
    return css`
        background-color: ${(props) => props.theme.fow.colors.error.dark};
    `;
};

export default setColor;
