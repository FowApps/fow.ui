import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const StyledSlider = styled(Slider)`
    .slick-dots {
        position: initial;
    }

    .slick-dots li button:before {
        font-size: 30px;
    }

    .slick-prev:before {
        margin-left: 20px;
        color: ${(props) => props.theme.fow.colors.grey.main};
        font-weight: 900;
    }
    .slick-next:before {
        margin-right: 20px;
        color: ${(props) => props.theme.fow.colors.grey.main};
        font-weight: 900;
    }

    .slick-next {
        right: 0px;
        margin-right: 20px;
    }

    .slick-prev {
        left: 0px;
    }

    .slick-prev,
    .slick-next {
        top: 83%;
    }
`;
