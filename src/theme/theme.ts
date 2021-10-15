import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
    fow: {
        colors: {
            primary: {
                darker: '#A53526',
                dark: '#FF5841',
                main: '#FD725F',
                light: '#FFD8D2',
                lighter: '#FFE7D9',
                transparent8: 'rgba(253, 114, 95, 0.08)',
                transparent12: 'rgba(253, 114, 95, 0.12)',
                transparent16: 'rgba(253, 114, 95, 0.16)',
                transparent24: 'rgba(253, 114, 95, 0.24)',
                transparent32: 'rgba(253, 114, 95, 0.32)',
                transparent48: 'rgba(253, 114, 95, 0.48)',
            },
            info: {
                darker: '#053858',
                dark: '#127EC0',
                main: '#64C4FF',
                light: '#C0E7FF',
                lighter: '#E6F5FF',
                transparent8: 'rgba(100, 196, 255, 0.08)',
                transparent12: 'rgba(100, 196, 255, 0.12)',
                transparent16: 'rgba(100, 196, 255, 0.16)',
                transparent24: 'rgba(100, 196, 255, 0.24)',
                transparent32: 'rgba(100, 196, 255, 0.32)',
                transparent48: 'rgba(100, 196, 255, 0.48)',
            },
            success: {
                darker: '#296207',
                dark: '#54B51A',
                main: '#AAF27F',
                light: '#D2FFB8',
                lighter: '#E5FFD6',
                transparent8: 'rgba(170, 242, 127, 0.08)',
                transparent12: 'rgba(170, 242, 127, 0.12)',
                transparent16: 'rgba(170, 242, 127, 0.16)',
                transparent24: 'rgba(170, 242, 127, 0.24)',
                transparent32: 'rgba(170, 242, 127, 0.32)',
                transparent48: 'rgba(170, 242, 127, 0.48)',
            },
            warning: {
                darker: '#664A01',
                dark: '#E0A100',
                main: '#FFD531',
                light: '#FFE16A',
                lighter: '#FFEEAA',
                transparent8: 'rgba(255, 213, 49, 0.08)',
                transparent12: 'rgba(255, 213, 49, 0.12)',
                transparent16: 'rgba(255, 213, 49, 0.16)',
                transparent24: 'rgba(255, 213, 49, 0.24)',
                transparent32: 'rgba(255, 213, 49, 0.32)',
                transparent48: 'rgba(255, 213, 49, 0.48)',
            },
            error: {
                darker: '#7A0C2E',
                dark: '#EF4933',
                main: '#FF4B33',
                light: '#FFBBB3',
                lighter: '#FFE1DD',
                transparent8: 'rgba(253, 114, 95, 0.08)',
                transparent12: 'rgba(253, 114, 95, 0.12)',
                transparent16: 'rgba(253, 114, 95, 0.16)',
                transparent24: 'rgba(253, 114, 95, 0.24)',
                transparent32: 'rgba(253, 114, 95, 0.32)',
                transparent48: 'rgba(253, 114, 95, 0.48)',
            },
            grey: {
                darker: '#212B36', // 800
                dark: '#637381', // 600
                main: '#919EAB', // 500
                light: '#C4CDD5', // 400
                lighter: '#DFE3E8', // 300
                transparent8: 'rgba(145, 158, 171, 0.08)',
                transparent12: 'rgba(145, 158, 171, 0.12)',
                transparent16: 'rgba(145, 158, 171, 0.16)',
                transparent24: 'rgba(145, 158, 171, 0.24)',
                transparent32: 'rgba(145, 158, 171, 0.32)',
                transparent48: 'rgba(145, 158, 171, 0.48)',
            },
            text: {
                primary: '#212B36',
                secondary: '#637381',
                disabled: '#919EAB',
            },
            divider: 'rgba(145, 158, 171, 0.24)',
            background: {
                paper: '#FFFFFF',
                default: '#FFFFFF',
                neutral: '#F4F6F8',
            },
            common: {
                white: '#FFFFFF',
                white48: 'rgba(255, 255, 255, 0.48)',
                black: '#000000',
                black48: 'rgba(0, 0, 0, 0.48)',
            },
        },
        spacing: {
            xxsmall: '0.4rem',
            xsmall: '0.8rem',
            small: '1.2rem',
            medium: '1.6rem',
            large: '2.0rem',
            xlarge: '2.4rem',
            xxlarge: '3.2rem',
            xxxlarge: '3.6rem',
        },
        shadows: {
            z1: '0px 1px 2px rgba(145, 158, 171, 0.24)',
            z8: '0px 8px 16px rgba(145, 158, 171, 0.24)',
            z12: '0px 0px 2px rgba(145, 158, 171, 0.24), 0px 12px 24px rgba(145, 158, 171, 0.24)',
            z16: '0px 0px 2px rgba(145, 158, 171, 0.24), 0px 16px 32px -4px rgba(145, 158, 171, 0.24)',
            z20: '0px 0px 2px rgba(145, 158, 171, 0.24), 0px 20px 40px -4px rgba(145, 158, 171, 0.24)',
            z24: '0px 0px 4px rgba(145, 158, 171, 0.24), 0px 24px 48px rgba(145, 158, 171, 0.24)',
        },
    },
};
