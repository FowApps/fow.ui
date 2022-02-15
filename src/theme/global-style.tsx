import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
    ${normalize};

    * {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.4rem;
        font-family: 'Inter', sans-serif;
        line-height: unset;
        letter-spacing: unset !important;
    }

    a {
        color: unset !important;
        text-decoration: none;
        transition: none !important;
    }

    label {
        margin-bottom: 0;
    }

    &::-webkit-scrollbar-track {
        border-radius: 1rem;
        background-color: transparent;
    }

    &::-webkit-scrollbar {
        width: 0.4rem;
        height: 0.4rem;
        background-color: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background-color: ${(props) => props.theme.fow.colors.greyDark.lighter};
    }

    .rc-pagination-item {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border:none;
        background-color: transparent !important;
        font-family: inherit;
        line-height: inherit;
    }

    .rc-pagination-disabled {
        color: ${(props) => props.theme.fow.colors.greyDark.lighter};
    }

    .rc-pagination-prev svg, .rc-pagination-next svg {
        font-size: 12px;
    }

    .rc-pagination-item-active {
        border-radius: 100px;
        background-color: ${(props) =>
            props.theme.fow.colors.greyDark.main} !important;

        span {
            color: ${(props) => props.theme.fow.colors.common.white};
            font-size: 12px;
            line-height: 20px;
        }
    }

    .drawer {
        z-index: 802 !important;
    }
    
    .drawer-mask, .drawer-content-wrapper {
        z-index: 1068 !important;
    }

    .rc-select-item {
        font-size: 14px;
        line-height: 1.5;
        padding: 4px 16px;
    }
    .rc-select-item-group {
        color: #999;
        font-weight: bold;
        font-size: 80%;
    }
    .rc-select-item-option {
        position: relative;
    }
    .rc-select-item-option-grouped {
        padding-left: 24px;
    }
    .rc-select-item-option .rc-select-item-option-state {
        position: absolute;
        right: 16px;
        top: 4px;
        pointer-events: none;
        color: ${(props) => props.theme.fow.colors.primary.dark};
    }
    .rc-select-item-option-active {
        background: ${(props) => props.theme.fow.colors.primary.transparent12};
    }
    .rc-select-item-option-disabled {
        color: #999;
    }
    .rc-select-item-empty {
        text-align: center;
        color: #999;
    }

    .rc-select-selection__choice-zoom {
        transition: all 0.3s;
    }
    .rc-select-selection__choice-zoom-appear {
        opacity: 0;
        transform: scale(0.5);
    }
    .rc-select-selection__choice-zoom-appear.rc-select-selection__choice-zoom-appear-active {
        opacity: 1;
        transform: scale(1);
    }
    .rc-select-selection__choice-zoom-leave {
        opacity: 1;
        transform: scale(1);
    }
    .rc-select-selection__choice-zoom-leave.rc-select-selection__choice-zoom-leave-active {
        opacity: 0;
        transform: scale(0.5);
    }
    .rc-select-dropdown {
        border: 1px solid
            ${(props) =>
                props.theme.fow.colors.greyDark.transparent32} !important;
        min-height: 100px;
        border-radius: 4px;
        position: absolute;
        background: #fff;
        overflow: hidden;
        z-index: 1069;
    }
    .rc-select-dropdown-hidden {
        display: none;
    }
    .rc-select-dropdown-slide-up-enter,
    .rc-select-dropdown-slide-up-appear {
        animation-duration: 0.3s;
        animation-fill-mode: both;
        transform-origin: 0 0;
        opacity: 0;
        animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
        animation-play-state: paused;
    }
    .rc-select-dropdown-slide-up-leave {
        animation-duration: 0.3s;
        animation-fill-mode: both;
        transform-origin: 0 0;
        opacity: 1;
        animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
        animation-play-state: paused;
    }
    .rc-select-dropdown-slide-up-enter.rc-select-dropdown-slide-up-enter-active.rc-select-dropdown-placement-bottomLeft,
    .rc-select-dropdown-slide-up-appear.rc-select-dropdown-slide-up-appear-active.rc-select-dropdown-placement-bottomLeft {
        animation-name: rcSelectDropdownSlideUpIn;
        animation-play-state: running;
    }
    .rc-select-dropdown-slide-up-leave.rc-select-dropdown-slide-up-leave-active.rc-select-dropdown-placement-bottomLeft {
        animation-name: rcSelectDropdownSlideUpOut;
        animation-play-state: running;
    }
    .rc-select-dropdown-slide-up-enter.rc-select-dropdown-slide-up-enter-active.rc-select-dropdown-placement-topLeft,
    .rc-select-dropdown-slide-up-appear.rc-select-dropdown-slide-up-appear-active.rc-select-dropdown-placement-topLeft {
        animation-name: rcSelectDropdownSlideDownIn;
        animation-play-state: running;
    }
    .rc-select-dropdown-slide-up-leave.rc-select-dropdown-slide-up-leave-active.rc-select-dropdown-placement-topLeft {
        animation-name: rcSelectDropdownSlideDownOut;
        animation-play-state: running;
    }
    @keyframes rcSelectDropdownSlideUpIn {
        0% {
            opacity: 0;
            transform-origin: 0% 0%;
            transform: scaleY(0);
        }
        100% {
            opacity: 1;
            transform-origin: 0% 0%;
            transform: scaleY(1);
        }
    }
    @keyframes rcSelectDropdownSlideUpOut {
        0% {
            opacity: 1;
            transform-origin: 0% 0%;
            transform: scaleY(1);
        }
        100% {
            opacity: 0;
            transform-origin: 0% 0%;
            transform: scaleY(0);
        }
    }

    .bf-modal-confirm {
        background-color: ${(props) => props.theme.fow.colors.primary.main};
    }

    .bf-modal-confirm:hover {
        background-color: ${(props) => props.theme.fow.colors.primary.main};
    }

    .braft-finder  * {
        transition: color 0.3s ease;
        transition: background-color 0.3s ease;

    }

    .braft-finder .bf-manager-footer .button-insert {
        background-color: ${(props) => props.theme.fow.colors.primary.main};
    }

    .braft-finder .bf-switch-external-type[data-type="IMAGE"] [data-type="IMAGE"], .braft-finder .bf-switch-external-type[data-type="VIDEO"] [data-type="VIDEO"], .braft-finder .bf-switch-external-type[data-type="AUDIO"] [data-type="AUDIO"], .braft-finder .bf-switch-external-type[data-type="EMBED"] [data-type="EMBED"], .braft-finder .bf-switch-external-type[data-type="FILE"] [data-type="FILE"] {
        background-color: ${(props) => props.theme.fow.colors.primary.main};
    }

    .braft-finder .bf-external-input button {
        background-color: ${(props) => props.theme.fow.colors.primary.main};
    }

    .braft-finder .bf-toggle-external-form span:hover {
        color: ${(props) => props.theme.fow.colors.primary.main};
    }

    .braft-finder .bf-item.active::after {
        background-color: ${(props) =>
            props.theme.fow.colors.primary.transparent16};
    }

    .braft-finder .bf-item.active:hover::after {
        background-color: ${(props) =>
            props.theme.fow.colors.primary.transparent48};
    }

    .braft-finder .bf-item:hover::after {
        background-color: ${(props) =>
            props.theme.fow.colors.primary.transparent32};
    }

    .braft-finder .bf-list-tools .bf-select-all:hover, .braft-finder .bf-list-tools .bf-deselect-all:hover {
        color: ${(props) => props.theme.fow.colors.primary.main};
    }

    .braft-finder .bf-manager-footer .button-insert:hover {
        background-color: ${(props) => props.theme.fow.colors.primary.darker};

    }

    .bf-container .bf-media-toolbar a {
        color: ${(props) => props.theme.fow.colors.greyLight.main} !important;
    }
`;

export default GlobalStyle;
