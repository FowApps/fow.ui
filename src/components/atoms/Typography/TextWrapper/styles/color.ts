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

const tertiary = css`
    color: ${(props) => props.theme.fow.colors.text.tertiary};
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

const info = css`
    color: ${(props) => props.theme.fow.colors.info.dark};
`;

const color = {
    primary,
    secondary,
    tertiary,
    disabled,
    black,
    white,
    warning,
    success,
    error,
    info,
};

export default color;
