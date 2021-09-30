import { css } from 'styled-components';

const overline = css`
    text-decoration: overline;
`;

const lineThrough = css`
    text-decoration: line-through;
`;

const underline = css`
    text-decoration: underline;
`;

const underlineOverline = css`
    text-decoration: underline overline;
`;

const none = css`
    text-decoration: none;
`;

const textDecoration = {
    overline,
    underline,
    underlineOverline,
    lineThrough,
    none,
};

export default textDecoration;
