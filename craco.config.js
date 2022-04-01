const path = require('path');

const createAliases = (prefix) => ({
    '@images': `${prefix}/images`,
    '@sass': `${prefix}/sass`,
    '@components': `${prefix}/ts/components`,
    '@routes': `${prefix}/ts/routes`,
    '@types': `${prefix}/ts/types`,
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