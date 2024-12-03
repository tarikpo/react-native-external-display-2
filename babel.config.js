// babel.config.js
module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-flow', // Add this line to handle Flow syntax
        '@babel/preset-react',
        // '@babel/preset-typescript', // Uncomment if using TypeScript
    ],
};
