import { css } from 'styled-components';
import { theme } from '../../../../theme/theme';

const setColor = (variant: string): any => {
    switch (variant) {
        case 'primary':
            return css`
                background-color: ${theme.colors.primary.main};
                p {
                    color: ${theme.colors.common.white};
                }
            `;
        default:
            return css`
                background-color: ${theme.colors.grey.light};

                p {
                    color: ${theme.colors.text.secondary};
                }
            `;
    }
};

export default setColor;
