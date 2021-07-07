import styled, { css } from 'styled-components';
import config, { DIMENSIONS } from '../../../../utils/gridConfig';

type ContainerProps = {
    fluid: boolean;
    debug: boolean;
};

export const StyledContainer = styled.div<ContainerProps>`
    box-sizing: border-box;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;

    ${({ theme }) => css`
        ${DIMENSIONS.map(
            (d) =>
                config(theme).container[d] &&
                config(theme).media[d]`
                    padding-left: ${config(theme).paddingWidth[d] / 2}rem;
                    padding-right: ${config(theme).paddingWidth[d] / 2}rem;
                `,
        )}
    `}

    ${({ theme, fluid }) =>
        !fluid &&
        css`
            ${DIMENSIONS.map(
                (d) =>
                    config(theme).container[d] &&
                    config(theme).media[d]`
        ${
            typeof config(theme).container[d] === 'number'
                ? `width: ${config(theme).container[d]}rem;`
                : `width: 100%;`
        }
    `,
            )}
        `}

    ${({ debug }) =>
        debug &&
        css`
            background-color: #5901ad40;
            outline: #fff solid 1px;
        `}
`;
