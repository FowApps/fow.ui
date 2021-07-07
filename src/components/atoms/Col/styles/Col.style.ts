/* eslint-disable @typescript-eslint/ban-types */
import styled, { css } from 'styled-components';
import config, { DIMENSIONS } from '../../../../utils/gridConfig';

type ColProps = {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    noGutter?: boolean;
    offset?: object | number;
    debug?: boolean;
};

export const StyledCol = styled.div<ColProps>`
    box-sizing: border-box;
    flex: 1 0 auto;
    max-width: 100%;
    display: flex;
    flex-direction: column;

    ${({ theme, ...rest }) => css`
        ${DIMENSIONS.map(
            (d) =>
                rest[d] &&
                config(theme).breakpoints[d] &&
                config(theme).media[d]`
      flex: 1 1 ${(rest[d] / config(theme).columns[d]) * 100}%;
      max-width: ${(rest[d] / config(theme).columns[d]) * 100}%;
    `,
        )}
    `}

    ${({ theme, noGutter }) =>
        !noGutter &&
        css`
            ${DIMENSIONS.map(
                (d) =>
                    config(theme).breakpoints[d] &&
                    config(theme).media[d]`padding: ${
                        config(theme).gutterWidth[d] / 2
                    }rem;
                `,
            )}
        `}

    ${({ theme, offset }) =>
        offset &&
        css`
            ${DIMENSIONS.map(
                (d) =>
                    config(theme).breakpoints[d] &&
                    config(theme).media[d]`
                ${
                    typeof offset === 'object'
                        ? offset[d] !== undefined &&
                          `margin-left: ${
                              offset[d] > 0
                                  ? (offset[d] / config(theme).columns[d]) * 100
                                  : 0
                          }%`
                        : `margin-left: ${
                              (offset / config(theme).columns.xs) * 100
                          }%`
                };
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
