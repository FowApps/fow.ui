import styled from 'styled-components';

export const StyledSlider = styled.div`
    .rc-slider {
        height: 40px;
        border-radius: 10px;

        .rc-slider-rail {
            width: 102%;
            height: 2rem;
            border: 1px solid
                ${(props) => props.theme.fow.colors.grey.transparent24};
            border-radius: 1rem;
            background-color: ${(props) =>
                props.theme.fow.colors.background.neutral};
        }

        &.rc-slider-with-marks {
            margin: 0 !important;
        }

        .rc-slider-step {
            height: 1.5rem;
            margin: 1rem 0 0 0.5rem;
            border-radius: 1rem;
        }

        .rc-slider-track {
            height: 1.2rem;
            margin: 0.4rem 0 0 0.5rem;
            border-radius: 1rem;
            background-color: rgba(255, 114, 94, 1);
        }

        .rc-slider-handle {
            display: none;
        }

        &:hover .rc-slider-track {
            background-color: rgba(255, 114, 94, 1);
        }

        &:hover .rc-slider-rail {
            background-color: #efefef;
        }

        .rc-slider-dot {
            top: 2.3rem;
            width: 0.6rem;
            height: 0.6rem;
            border: none;
            background-color: #b3b3b3;
        }

        .rc-slider-dot-active {
            border: none;
            background-color: rgba(255, 114, 94, 1);
        }

        .rc-slider-mark-text {
            top: 0.7rem;
            display: none;
            color: #b3b3b3;
            font-weight: 700;
            transform: translateX(40%) !important;
        }

        .rc-slider-mark-text:last-child {
            transform: translateX(-130%) !important;
        }
    }
`;
