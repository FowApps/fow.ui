import styled from 'styled-components';

type ColorPickerProps = {
    color: string;
};

export const ColorPicker = styled.div<ColorPickerProps>`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.fow.colors.common.white};
    background-color: ${(props) => props.theme.fow.colors[props.color].dark};
    cursor: pointer;
`;

export const ContainerMenu = styled.div`
    display: inline-flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.fow.colors.common.white};
    box-shadow: ${(props) => props.theme.fow.shadows.z12};
    border-radius: 8px;
`;

export const TopWrapper = styled.div`
    padding: ${(props) => props.theme.fow.spacing.medium};
    padding-bottom: 0;
`;

export const BottomWrapper = styled.div`
    padding: ${(props) => props.theme.fow.spacing.medium};
    padding-top: 0;
`;
