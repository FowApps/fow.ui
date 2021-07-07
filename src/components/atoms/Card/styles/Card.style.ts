import styled from 'styled-components';

export const StyledCard = styled.div`
    box-sizing: border-box;
    padding: ${(props) => props.theme.fow.spacing.large};
    background-color: ${(props) => props.theme.fow.colors.common.white};
    border: 1px solid ${(props) => props.theme.fow.colors.grey.transparent16};
    border-radius: 0.8rem;
`;
