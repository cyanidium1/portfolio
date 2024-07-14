module.exports = {
    reactStrictMode: true,
    webpack: (config) => {
        config.resolve.alias['react-dom'] = 'react-dom';
        return config;
    },
};
