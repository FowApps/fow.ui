import styled from 'styled-components';

export const ColorPicker = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: ${(props) => props.theme.fow.colors[props.color].dark};
    margin-right: ${(props) => props.theme.fow.spacing.xsmall};
`;

export const LabelInputs = styled.div``;
