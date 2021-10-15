import { createGlobalStyle } from 'styled-components';

export const PopoverStyles = createGlobalStyle`
    .popover {
        filter: drop-shadow(0px 2px 8px #ccc);
        opacity: 1;

        &.rc-tooltip-placement-bottom .rc-tooltip-arrow, 
        &.rc-tooltip-placement-bottomLeft .rc-tooltip-arrow, 
        &.rc-tooltip-placement-bottomRight .rc-tooltip-arrow {
                border-bottom-color: #fff;
        }

        &.rc-tooltip-placement-left .rc-tooltip-arrow, 
        &.rc-tooltip-placement-leftTop .rc-tooltip-arrow, 
        &.rc-tooltip-placement-leftBottom .rc-tooltip-arrow {
            border-left-color: #fff;
        }

        &.rc-tooltip-placement-right .rc-tooltip-arrow, 
        &.rc-tooltip-placement-rightTop .rc-tooltip-arrow, 
        &.rc-tooltip-placement-rightBottom .rc-tooltip-arrow {
            border-right-color: #fff;
        }

        &.rc-tooltip-placement-top .rc-tooltip-arrow, 
        &.rc-tooltip-placement-topLeft .rc-tooltip-arrow, 
        &.rc-tooltip-placement-topRight .rc-tooltip-arrow {
            border-top-color: #fff;
        }
        
        .rc-tooltip-inner {
            padding: 0;
            background-color: #fff;
            color: #212B36;
            box-shadow: none;
        }
    }
`;
