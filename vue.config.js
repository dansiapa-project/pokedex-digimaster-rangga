module.exports = {
    lintOnSave: true,
    crossorigin: 'anonymous',
    integrity: true,
    pages: {
        index: {
            entry: 'src/main.js',
            title: 'Pokedex Digimaster',
        },
    },
    devServer: {
        disableHostCheck: true,
        useLocalIp: false,
        proxy: {
            '': {
                // Configure with your DMS domain
                target: 'https://pokeapi.co',
                changeOrigin: true,
            },
        },
    },
};