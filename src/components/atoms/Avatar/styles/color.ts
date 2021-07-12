import { css } from 'styled-components';
import { theme } from '../../../../theme/theme';

const setColor = (variant: string): any => {
    switch (variant) {
        case 'primary':
            return css`
                background-color: ${theme.fow.colors.primary.main};
                h3 {
                    color: ${theme.fow.colors.common.white};
                }
            `;
        default:
            return css`
                background-color: ${theme.fow.colors.grey.light};

                h3 {
                    color: ${theme.fow.colors.text.secondary};
                }
            `;
    }
};

export default setColor;
