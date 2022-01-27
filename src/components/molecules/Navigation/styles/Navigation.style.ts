import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface MenuProps {
    mode?: 'vertical' | 'horizontal';
    bordered?: boolean;
}

interface MenuItemProps {
    active?: boolean;
    isSub?: boolean;
    mode?: 'vertical' | 'horizontal';
}

export const MenuWrapper = styled.nav<MenuProps>`
    ${(props) =>
        props.mode === 'horizontal' &&
        css`
            width: 100%;

            ul {
                transition: all 0.3s ease;
                margin: 0;
                padding: 0;
                list-style: none;

                li {
                    transition: all 0.3s ease;
                    overflow: hidden;
                    white-space: nowrap;
                    text-align: left;
                    background-color: #fff;
                    cursor: pointer;

                    &:hover {
                        overflow: visible;

                        > a {
                            color: ${props.theme.fow.colors.primary
                                .main} !important;
                        }

                        > ul {
                            visibility: visible;
                            opacity: 1;
                        }
                    }

                    a {
                        transition: color 0.3s ease !important;
                        display: flex;
                        align-items: center;
                        transition: all 0.3s ease;
                        padding: 16px 10px;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 22px;
                    }
                }

                > li {
                    position: relative;
                }

                ul {
                    visibility: hidden;
                    opacity: 0;
                    position: absolute;
                    z-index: 1072;
                    display: block;

                    background: #ffffff;
                    box-shadow: 0px 0px 2px rgb(145 158 171 / 24%),
                        0px 16px 32px -4px rgb(145 158 171 / 24%);
                    border-radius: 4px;
                    min-width: 150px;
                    overflow: hidden;
                    padding: 8px 0;

                    li a {
                        transition: all 0.3s ease !important;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 24px;
                        padding: 12px 20px;
                    }

                    li:hover {
                        > a {
                            background-color: ${props.theme.fow.colors.primary
                                .transparent8};
                            color: ${props.theme.fow.colors.text
                                .primary} !important;
                        }
                    }
                }
            }

            li {
                margin: 0;
                padding: 0;
                list-style: none;
            }

            > ul {
                transition: all 0.3s ease;
                display: flex;
                flex-wrap: wrap;
                margin: 0;
                padding: 0;
                list-style: none;
            }
        `};

    ${(props) =>
        props.mode === 'vertical' &&
        css`
            width: 100%;

            > ul > li {
                ${props.bordered &&
                css`
                    &:first-child {
                        border-top: 1px solid ${props.theme.fow.colors.divider};
                    }
                    padding: 8px 0;
                    border-bottom: 1px solid ${props.theme.fow.colors.divider};
                `}
            }

            ul {
                margin: 0;
                padding: 0;
                list-style: none;

                li {
                    transition: all 0.3s ease;
                    overflow: hidden;
                    white-space: nowrap;
                    text-align: left;
                    background-color: #fff;
                    cursor: pointer;

                    > a {
                        border-left: 2px solid;
                        border-color: transparent;
                    }

                    &:hover {
                        > a {
                            border-color: ${props.theme.fow.colors.primary
                                .main};
                            background-color: ${props.theme.fow.colors.primary
                                .transparent8};
                            color: ${props.theme.fow.colors.primary
                                .main} !important;
                        }
                    }

                    a {
                        position: relative;
                        transition: all 0.3s ease !important;
                        display: flex;
                        align-items: center;
                        transition: all 0.3s ease;
                        padding: 8px 16px 8px 24px;
                        font-style: normal;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 22px;
                        color: ${props.theme.fow.colors.text
                            .secondary} !important;
                    }

                    ul {
                        li {
                            > a {
                                padding-top: 12px;
                                padding-bottom: 12px;
                                padding-left: 36px;

                                &:before {
                                    content: ' ';
                                    width: 2px;
                                    height: 2px;
                                    position: absolute;
                                    background-color: ${props.theme.fow.colors
                                        .text.secondary};
                                    border-radius: 50%;
                                    left: 24px;
                                }
                            }
                        }

                        li:hover {
                            > a {
                                background-color: ${props.theme.fow.colors
                                    .common.white};
                                color: ${props.theme.fow.colors.primary
                                    .main} !important;
                                border-color: transparent;

                                &:before {
                                    transform: scale(2);
                                    background-color: ${props.theme.fow.colors
                                        .primary.main};
                                }
                            }
                        }
                    }
                }
            }
        `}
`;
export const Link = styled.a``;

export const SubMenuItem = styled.li<MenuItemProps>`
    ${(props) =>
        props.mode === 'horizontal' &&
        css`
            ${props.active &&
            css`
                > a {
                    color: ${props.theme.fow.colors.primary.main} !important;
                }
            `};

            > a.active {
                color: ${props.theme.fow.colors.primary.main} !important;
            }
        `}

    ${(props) =>
        props.mode === 'vertical' &&
        css`
            ${props.active &&
            css`
                > a {
                    border-color: ${props.theme.fow.colors.primary
                        .main} !important;
                    background-color: ${props.theme.fow.colors.primary
                        .transparent8} !important;
                    color: ${props.theme.fow.colors.primary.main} !important;
                }
            `};

            > a.active {
                border-color: ${props.theme.fow.colors.primary.main} !important;
                background-color: ${props.theme.fow.colors.primary
                    .transparent8}!important;
                color: ${props.theme.fow.colors.primary.main} !important;
            }
        `}
`;

export const MenuItem = styled.li<MenuItemProps>`
    ${(props) =>
        props.mode === 'horizontal' &&
        css`
            ${props.active &&
            props.isSub &&
            css`
                > a {
                    color: ${props.theme.fow.colors.text.primary} !important;
                    background-color: ${props.theme.fow.colors.primary
                        .transparent8} !important;
                }
            `};

            ${props.active &&
            !props.isSub &&
            css`
                > a {
                    color: ${props.theme.fow.colors.primary.main} !important;
                }
            `};

            ${!props.isSub &&
            css`
                > a.active {
                    color: ${props.theme.fow.colors.primary.main} !important;
                }
            `};

            ${props.isSub &&
            css`
                > a.active {
                    color: ${props.theme.fow.colors.text.primary} !important;
                    background-color: ${props.theme.fow.colors.primary
                        .transparent8} !important;
                }
            `};
        `}

    ${(props) =>
        props.mode === 'vertical' &&
        css`
            ${props.active &&
            props.isSub &&
            css`
                > a {
                    color: ${props.theme.fow.colors.primary.main} !important;
                }
            `};

            ${props.active &&
            !props.isSub &&
            css`
                > a {
                    border-color: ${props.theme.fow.colors.primary
                        .main} !important;
                    background-color: ${props.theme.fow.colors.primary
                        .transparent8}!important;
                    color: ${props.theme.fow.colors.primary.main} !important;
                }
            `};

            ${!props.isSub &&
            css`
                > a.active {
                    border-color: ${props.theme.fow.colors.primary
                        .main} !important;
                    background-color: ${props.theme.fow.colors.primary
                        .transparent8}!important;
                    color: ${props.theme.fow.colors.primary.main} !important;
                }
            `};

            ${props.isSub &&
            css`
                > a.active {
                    color: ${props.theme.fow.colors.primary.main} !important;
                }
            `};
        `}
`;

export const SubMenuWrapper = styled(motion.ul)``;
