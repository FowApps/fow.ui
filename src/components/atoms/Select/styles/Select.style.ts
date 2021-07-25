import styled from 'styled-components';
import { theme } from '../../../../theme/theme';
import Body from '../../Typography/Body';
import Caption from '../../Typography/Caption';

export const themeColors = {
    primary25: theme.fow.colors.primary.transparent12,
    primary50: theme.fow.colors.primary.lighter,
    primary75: theme.fow.colors.primary.light,
    primary: theme.fow.colors.primary.main,
    danger: theme.fow.colors.error.main,
    dangerLight: theme.fow.colors.error.light,
};

export const renderControlStyles = (isFocused: boolean, hasError: boolean) => {
    const commonStyles = {
        transition: 'all 0.3s ease',
        minHeight: '4rem',
        fontSize: '1.6rem',
        lineHeight: '2.4rem',
        marginBottom: '2.4rem',
    };
    if (hasError) {
        return {
            ...commonStyles,
            borderColor: theme.fow.colors.error.main,
            boxShadow: `0 0 0 1px ${theme.fow.colors.error.main}`,
        };
    }
    if (isFocused) {
        return {
            ...commonStyles,
            borderColor: theme.fow.colors.primary.main,
            boxShadow: `0 0 0 1px ${theme.fow.colors.primary.main}`,
        };
    }
    return commonStyles;
};

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const Label = styled(Body)`
    margin-bottom: ${(props) => props.theme.fow.spacing.xxsmall};
`;

export const ValidationMessage = styled(Caption)`
    position: absolute;
    bottom: 0;
    align-self: flex-end;
`;
