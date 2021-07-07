module.exports = (api) => {
    const env = api.env();

    let dev = false;
    let modules;

    switch (env) {
        case 'dist-dev':
            dev = true;
            modules = false;
            break;
        case 'esm':
            modules = false;
            break;
        default:
            modules = 'commonjs';
    }

    return {
        presets: [
            [
                '@react-bootstrap',
                {
                    dev,
                    modules,
                    removePropTypes: !dev,
                },
            ],
            '@babel/preset-react',
            ['@babel/preset-env', { targets: { node: 'current' } }],
            '@babel/preset-typescript',
        ],
        plugins: [
            ['import', { libraryName: 'antd', style: 'css' }],
            '"@babel/transform-runtime"',
        ],
    };
};
