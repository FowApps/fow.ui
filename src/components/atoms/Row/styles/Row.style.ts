import styled, { css } from 'styled-components';
import config, { DIMENSIONS } from '../../../../config/gridConfig';

type RowProps = {
    debug: boolean;
};

export const StyledRow = styled.div<RowProps>`
    display: flex;
    flex: 1 1 auto;
    flex-wrap: wrap;
    box-sizing: border-box;

    ${({ theme }) => css`
        ${DIMENSIONS.map(
            (d) =>
                config(theme).container[d] &&
                config(theme).media[d]`
                margin-left: -${config(theme).gutterWidth[d] / 2}rem;
                margin-right: -${config(theme).gutterWidth[d] / 2}rem;
            `,
        )}
    `}

    + .row {
        margin-top: 1.6rem;
    }

    ${({ debug }) =>
        debug &&
        css`
            background-color: #5901ad40;
            outline: #fff solid 1px;
        `}
`;
