import { FowThemeProvider } from '../src/theme';

export const decorators = [
    (Story) => (
        <FowThemeProvider>
            <Story />
        </FowThemeProvider>
    ),
];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
