import { css } from 'styled-components';

const lowercase = css`
    text-transform: lowercase;
`;

const capitalize = css`
    text-transform: capitalize;
`;

const uppercase = css`
    text-transform: uppercase;
`;

const none = css`
    text-transform: none;
`;

const textTransform = {
    lowercase,
    capitalize,
    uppercase,
    none,
};

export default textTransform;
