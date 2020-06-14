module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'mongoose',
            settings: {
                uri: env('DATABASE_URI'),
                host: env('DATABASE_HOST', '127.0.0.1'),
                srv: env.bool('DATABASE_SRV', false),
                port: env.int('DATABASE_PORT', 27017),
                database: env('DATABASE_NAME', 'strapi'),
                username: env('DATABASE_USERNAME', ''),
                password: env('DATABASE_PASSWORD', ''),
            },
            options: {
                ssl: env.bool('DATABASE_SSL', true),
            },
        },
    },
});