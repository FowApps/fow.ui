import styled from 'styled-components';
import type { Colors } from '../LabelInput';

type ColorPickerProps = {
    color: Colors;
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
`;
export const ContainerMenu = styled.div`
    display: inline-flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.fow.colors.common.white};
    box-shadow: ${(props) => props.theme.fow.shadows.z12};
    border-radius: 8px;
    padding: ${(props) => props.theme.fow.spacing.medium};
`;

export const LabelInputs = styled.div``;
