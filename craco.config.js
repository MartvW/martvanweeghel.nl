const path = require('path');

const createAliases = (prefix) => ({
    '@images': `${prefix}/images`,
    '@sass': `${prefix}/sass`,
    '@api': `${prefix}/ts/api`,
    '@components': `${prefix}/ts/components`,
    '@routes': `${prefix}/ts/routes`,
    '@types': `${prefix}/ts/types`,
    '@hooks': `${prefix}/ts/hooks`,
    '@repository': `${prefix}/ts/repository`,
    '@utils': `${prefix}/ts/utils`,
});

const aliases = createAliases('./src');

const resolvedAliases = Object.fromEntries(
    Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)]),
);

module.exports = {
    webpack: {
        alias: resolvedAliases,
    },
};