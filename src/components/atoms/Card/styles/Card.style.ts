import styled from 'styled-components';

export const StyledCard = styled.div`
    padding: ${(props) => props.theme.fow.spacing.large};
    background-color: ${(props) => props.theme.fow.colors.common.white};
    border-radius: 0.8rem;
    border: 1px solid ${(props) => props.theme.fow.colors.grey.transparent16};
    box-sizing: border-box;
`;
