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
        display: none;
    }
    .slick-next:before {
        display: none;
    }
`;
