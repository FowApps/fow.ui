import { css } from 'styled-components';

const horizontal = css`
    display: flex;
    clear: both;
    width: 100%;
    min-width: 100%;
    margin: ${(props) => props.theme.fow.spacing.medium} 0;
`;

const vertical = css`
    position: relative;
    top: -0.084rem;
    display: inline-block;
    vertical-align: middle;
    height: 1.25em;
    margin: 0 ${(props) => props.theme.fow.spacing.xsmall};
    border-top: 0;
    border-left: 1px solid ${(props) => props.theme.fow.colors.divider};
`;

const types = {
    horizontal,
    vertical,
};

export default types;
