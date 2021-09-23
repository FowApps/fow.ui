import { css } from 'styled-components';

const black = css`
    &:hover {
        color: ${(props) => props.theme.fow.colors.text.primary};
    }
`;

const white = css`
    &:hover {
        color: ${(props) => props.theme.fow.colors.common.white};
    }
`;

const primary = css`
    &:hover {
        color: ${(props) => props.theme.fow.colors.primary.main};
    }
`;

const secondary = css`
    &:hover {
        color: ${(props) => props.theme.fow.colors.text.secondary};
    }
`;

const disabled = css`
    &:hover {
        color: ${(props) => props.theme.fow.colors.text.disabled};
    }
`;

const warning = css`
    &:hover {
        color: ${(props) => props.theme.fow.colors.warning.main};
    }
`;

const success = css`
    &:hover {
        color: ${(props) => props.theme.fow.colors.success.main};
    }
`;

const error = css`
    &:hover {
        color: ${(props) => props.theme.fow.colors.error.main};
    }
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
