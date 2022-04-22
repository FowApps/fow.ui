import styled from 'styled-components';

type WrapperProps = {
    noGutter?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
    padding: ${(props) =>
        props.noGutter ? '0' : props.theme.fow.spacing.xxxlarge};
    text-align: center;
`;
