module.exports = (distRoot, optimize) => ({
    mode: 'production',
    optimization: {
        minimize: !!optimize,
    },
    entry: './src/index.ts',
    output: {
        path: distRoot,
        filename: optimize ? 'bundle.min.js' : 'bundle.js',
        library: 'ExampleLibrary',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        envName: `dist-${optimize ? 'prod' : 'dev'}`,
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    externals: [
        {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react',
            },
        },
        {
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom',
            },
        },
        { 'styled-components': 'styled-components' },
        { process: 'process' },
        {
            '@fortawesome/fontawesome-svg-core':
                '@fortawesome/fontawesome-svg-core',
        },
        {
            '@fortawesome/free-regular-svg-icons':
                '@fortawesome/free-regular-svg-icons',
        },
        {
            '@fortawesome/free-solid-svg-icons':
                '@fortawesome/free-solid-svg-icons',
        },
        {
            '@fortawesome/react-fontawesome': '@fortawesome/react-fontawesome',
        },
        { 'framer-motion': 'framer-motion' },
        { 'braft-editor': 'braft-editor' },
        { 'braft-extensions': 'braft-extensions' },
        { 'braft-utils': 'braft-utils' },
        { 'draftjs-utils': 'draftjs-utils' },
    ],
});
