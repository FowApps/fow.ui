import { css } from 'styled-components';

const horizontal = css`
    display: flex;
    clear: both;
    width: 100%;
    min-width: 100%;
`;

const vertical = css`
    position: relative;
    top: -0.084rem;
    display: inline-block;
    vertical-align: middle;
    height: 1.25em;
    border-top: 0;
    border-left: 1px solid ${(props) => props.theme.fow.colors.divider};
`;

const direction = {
    horizontal,
    vertical,
};

export default direction;
