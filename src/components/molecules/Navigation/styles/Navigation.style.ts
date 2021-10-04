import styled from 'styled-components';
import RcMenu, { SubMenu as RcSubMenu, Item as RcItem } from 'rc-menu';
import 'rc-menu/assets/index.css';

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    transition: all 0.3s ease;
`;

export const StyledMenu = styled(RcMenu)`
    margin: 0;
    padding: 0;
    border: unset;
    border-radius: unset;
    box-shadow: unset;
    cursor: pointer;

    &.rc-menu-inline {
        > .rc-menu-item {
            padding: 16px !important;

            &.rc-menu-item-active,
            &.rc-menu-item-selected {
                background-color: ${(props) =>
                    props.theme.fow.colors.primary.transparent8};
            }

            &.rc-menu-item-selected {
                h3 {
                    font-weight: 600;
                }
            }

            &.rc-menu-item-selected:after {
                content: ' ';
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                width: 3px;
                height: 100%;
                background-color: ${(props) =>
                    props.theme.fow.colors.primary.main};
            }

            &.rc-menu-item-selected h3 span,
            &.rc-menu-item-selected svg {
                color: ${(props) => props.theme.fow.colors.primary.main};
            }

            h3 {
                overflow: hidden;
                font-weight: 500;

                span {
                    overflow: hidden;
                    padding-right: 12px;
                    text-overflow: ellipsis;
                }
            }
        }

        > .rc-menu-submenu {
            .rc-menu-submenu-title {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 16px !important;

                h3 {
                    font-weight: 500;
                }
            }

            .rc-menu-sub {
                transition: all 0.3s ease-in-out;
            }

            &.rc-menu-submenu-selected {
                background-color: ${(props) =>
                    props.theme.fow.colors.primary.transparent8};

                h3 {
                    font-weight: 600;
                }

                .rc-menu-submenu-title:after {
                    content: ' ';
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    width: 3px;
                    height: 100%;
                    background-color: ${(props) =>
                        props.theme.fow.colors.primary.main};
                }
            }

            &.rc-menu-submenu-active .rc-menu-submenu-title {
                background-color: ${(props) =>
                    props.theme.fow.colors.primary.transparent8};
            }

            &.rc-menu-submenu-selected .rc-menu-submenu-title * {
                color: ${(props) => props.theme.fow.colors.primary.main};
            }

            .rc-menu-sub > .rc-menu-item {
                padding: 16px !important;

                h3 {
                    font-weight: 500;
                }

                ${IconWrapper} {
                    font-size: 6px;
                }

                &.rc-menu-item-active {
                    background-color: transparent;

                    ${IconWrapper} {
                        color: ${(props) =>
                            props.theme.fow.colors.primary.main};
                        font-size: 10px;
                    }
                }

                &.rc-menu-item-selected {
                    background-color: transparent;

                    h3 {
                        font-weight: 600;
                    }

                    ${IconWrapper} {
                        color: ${(props) =>
                            props.theme.fow.colors.primary.main};
                        font-size: 10px;
                    }
                }
            }

            h3 {
                overflow: hidden;

                span {
                    overflow: hidden;
                    padding-right: 12px;
                    text-overflow: ellipsis;
                }
            }
        }
    }
`;
export const StyledSubMenu = styled(RcSubMenu)``;
export const StyledItem = styled(RcItem)``;
