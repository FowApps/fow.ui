import { css } from 'styled-components';

const primary = css`
    background-color: ${(props) =>
        props.theme.fow.colors.primary.transparent16};
    > span {
        background-color: ${(props) => props.theme.fow.colors.primary.main};
    }
`;

const info = css`
    background-color: ${(props) => props.theme.fow.colors.info.transparent16};
    > span {
        background-color: ${(props) => props.theme.fow.colors.info.main};
    }
`;

const warning = css`
    background-color: ${(props) =>
        props.theme.fow.colors.warning.transparent16};
    > span {
        background-color: ${(props) => props.theme.fow.colors.warning.main};
    }
`;

const success = css`
    background-color: ${(props) =>
        props.theme.fow.colors.success.transparent16};
    > span {
        background-color: ${(props) => props.theme.fow.colors.success.main};
    }
`;

const error = css`
    background-color: ${(props) => props.theme.fow.colors.error.transparent16};
    > span {
        background-color: ${(props) => props.theme.fow.colors.error.main};
    }
`;

const color = {
    primary,
    info,
    warning,
    success,
    error,
};

export default color;
