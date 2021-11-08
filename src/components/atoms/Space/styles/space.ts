import { css } from 'styled-components';

type Direction = 'vertical' | 'horizontal';
type Size =
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'xxxlarge';

export const setSpaceAndDirection = (
    direction: Direction,
    size: Size,
    reverse: boolean,
): any => {
    switch (direction) {
        case 'horizontal':
            return css`
                flex-direction: ${reverse ? 'row-reverse' : 'row'};
                > *:not(:last-child) {
                    ${reverse
                        ? css`
                              margin-left: ${(props) =>
                                  props.theme.fow.spacing[size]} !important;
                          `
                        : css`
                              margin-right: ${(props) =>
                                  props.theme.fow.spacing[size]} !important;
                          `};
                }
            `;
        case 'vertical':
            return css`
                flex-direction: ${reverse ? 'row-column' : 'column'};
                > *:not(:last-child) {
                    ${reverse
                        ? css`
                              margin-top: ${(props) =>
                                  props.theme.fow.spacing[size]} !important;
                          `
                        : css`
                              margin-bottom: ${(props) =>
                                  props.theme.fow.spacing[size]} !important;
                          `};
                }
            `;
        default:
            return css`
                flex-direction: ${reverse ? 'row-reverse' : 'row'};
                > *:not(:last-child) {
                    ${reverse
                        ? css`
                              margin-left: ${(props) =>
                                  props.theme.fow.spacing[size]} !important;
                          `
                        : css`
                              margin-right: ${(props) =>
                                  props.theme.fow.spacing[size]} !important;
                          `};
                }
            `;
    }
};
