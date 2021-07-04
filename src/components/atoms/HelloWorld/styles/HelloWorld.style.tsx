import styled from 'styled-components';

type MessageProps = {
    isActive?: boolean;
};

export const Message = styled.span<MessageProps>`
    font-size: 24px;
    color: ${(props) => props.theme.colors.primary.main};
    display: ${(props) => (props.isActive ? 'block' : 'none')};
`;
