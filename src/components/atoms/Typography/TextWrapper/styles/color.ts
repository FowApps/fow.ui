import { css } from 'styled-components';

const black = css`
    color: ${(props) => props.theme.fow.colors.text.primary};
`;

const white = css`
    color: ${(props) => props.theme.fow.colors.common.white};
`;

const primary = css`
    color: ${(props) => props.theme.fow.colors.primary.main};
`;

const secondary = css`
    color: ${(props) => props.theme.fow.colors.text.secondary};
`;

const disabled = css`
    color: ${(props) => props.theme.fow.colors.text.disabled};
`;

const warning = css`
    color: ${(props) => props.theme.fow.colors.warning.dark};
`;

const success = css`
    color: ${(props) => props.theme.fow.colors.success.dark};
`;

const error = css`
    color: ${(props) => props.theme.fow.colors.error.dark};
`;

const color = {
    primary,
    secondary,
    disabled,
    black,
    white,
    warning,
    success,
    error,
};

export default color;
