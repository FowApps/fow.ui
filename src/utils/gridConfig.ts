/* eslint-disable @typescript-eslint/ban-types */
import { css, DefaultTheme } from 'styled-components';

export const DIMENSIONS = ['xs', 'sm', 'md', 'lg', 'xl'];

export const BASE_CONF = {
    mediaQuery: 'only screen',
    columns: {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12,
    },
    gutterWidth: {
        xs: 1.6,
        sm: 1.6,
        md: 2.4,
        lg: 2.4,
        xl: 2.4,
    },
    paddingWidth: {
        xs: 1.6,
        sm: 1.6,
        md: 2.4,
        lg: 2.4,
        xl: 2.4,
    },
    container: {
        xs: 'full', // 'full' = max-width: 100%
        sm: 'full', // 'full' = max-width: 100%
        md: 'full', // 'full' = max-width: 100%
        lg: 144, // max-width: 1440px
        xl: 144, // max-width: 1440px
    },
    breakpoints: {
        xs: 1,
        sm: 48, // 768px
        md: 64, // 1024px
        lg: 90, // 1440px
        xl: 120, // 1920px
    },
    media: {},
};

function makeMedia(media) {
    return (...args: any[]) => css`
        @media ${media} {
            ${css.call(undefined, ...args)}
        }
    `;
}

const resolveConfig = (theme: DefaultTheme) => {
    const themeConf: DefaultTheme | object = theme || {};

    const conf = {
        ...BASE_CONF,
        ...themeConf,
    };

    conf.media = Object.keys(conf.breakpoints).reduce((media, breakpoint) => {
        const breakpointWidth = conf.breakpoints[breakpoint];
        media[breakpoint] = makeMedia(
            [
                conf.mediaQuery,
                breakpointWidth >= 0 && `(min-width: ${breakpointWidth}rem)`,
            ]
                .filter(Boolean)
                .join(' and '),
        );
        return media;
    }, {});

    return conf;
};

export default function config(theme: DefaultTheme) {
    const conf = resolveConfig(theme);
    return conf;
}
