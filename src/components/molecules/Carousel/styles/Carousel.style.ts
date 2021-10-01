import styled from 'styled-components';
import Slider from 'react-slick';

import { Icon } from '../../../..';

export const Dot = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.fow.colors.grey.lighter};
    transition: background-color 0.3s ease;
`;

export const StyledSlider = styled(Slider)`
    .slick-dots {
        position: relative;
        bottom: 0;

        li {
            width: 12px;
            height: 12px;

            &.slick-active ${Dot} {
                background-color: ${(props) =>
                    props.theme.fow.colors.grey.main};
            }
        }
    }
`;

export const Arrow = styled(Icon)`
    color: ${(props) => props.theme.fow.colors.text.disabled};
    cursor: pointer;
`;

export const Pagination = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    padding-top: ${(props) => props.theme.fow.spacing.small};
    background: transparent;
`;
