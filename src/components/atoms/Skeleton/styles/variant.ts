import { css } from 'styled-components';

type VariantTypes = 'flat' | 'pill' | 'circle';

const setVariant = (variant: VariantTypes): any => {
    switch (variant) {
        case 'flat':
            return css`
                border-radius: ${(props) => props.theme.fow.spacing.xsmall};
            `;
        case 'pill':
            return css`
                border-radius: 5rem;
            `;
        case 'circle':
            return css`
                border-radius: 50%;
            `;
        default:
            return '';
    }
};

export default setVariant;
