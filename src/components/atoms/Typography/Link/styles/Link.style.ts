import styled, { DefaultTheme } from 'styled-components';
import { TextWrapperProps } from '../../TextWrapper';
import { setLevel } from './level';

type LinkProps = {
    level: 1 | 2 | 3;
    color: TextWrapperProps['color'];
};

const setHoverColor = (
    theme: DefaultTheme,
    color: TextWrapperProps['color'] = 'primary',
) => {
    if (theme.fow.colors?.[color]?.dark) {
        return theme.fow.colors[color].darker;
    }
    return theme.fow.colors.primary.main;
};

export const StyledLink = styled.a<LinkProps>`
    cursor: pointer;

    ${(props) => setLevel(props.level)};

    span {
        transition: color 0.3s ease;
    }

    &:hover span {
        color: ${(props) => setHoverColor(props.theme, props.color)};
    }
`;
