import { css, DefaultTheme, StyledComponent } from 'styled-components';

export const setAlignment = (
    hasIcon: boolean,
    align: 'left' | 'right' | 'center',
    component: StyledComponent<'div', DefaultTheme>,
) => {
    switch (align) {
        case 'right':
            return css`
                justify-content: flex-start;
                width: 100%;
                padding-left: ${hasIcon ? 0 : 1.2}rem;
                ${component} {
                    &:before {
                        left: ${hasIcon ? -4 : -2.2}rem;
                    }
                }
            `;
        case 'left':
            return css`
                justify-content: flex-end;
                width: 100%;
                padding-right: ${hasIcon ? 0 : 1.2}rem;
                ${component} {
                    &:before {
                        right: ${hasIcon ? -4 : -2.2}rem;
                    }
                }
            `;
        default:
            return css`
                right: ${hasIcon ? -3 : -1.2}rem;
                justify-content: flex-end;
                width: 50%;
                &:nth-child(odd) {
                    left: ${hasIcon ? -2 : -0}rem;
                    align-self: flex-end;
                    align-self: flex-end;
                    justify-content: flex-start;

                    ${component} {
                        &:before {
                            left: ${hasIcon ? -4 : -2.2}rem;
                        }
                    }
                }

                ${component} {
                    &:before {
                        right: ${hasIcon ? -4 : -2.2}rem;
                    }
                }
            `;
    }
};
