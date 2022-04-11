import { css } from 'styled-components';

const setColor = (progress: number, reverse: boolean): any => {
    if (progress >= 70) {
        return css`
            background-color: ${(props) =>
                props.theme.fow.colors[reverse ? 'error' : 'success'].dark};
        `;
    }
    if (progress > 30 && progress < 70) {
        return css`
            background-color: ${(props) => props.theme.fow.colors.warning.dark};
        `;
    }
    return css`
        background-color: ${(props) =>
            props.theme.fow.colors[reverse ? 'success' : 'error'].dark};
    `;
};

export default setColor;
