const Hapi = require('hapi');
const Good = require('good');
const RegisterRoutes = require('./routes.js');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });
RegisterRoutes(server);
server.register({
    register: Good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: '*',
                    log: '*',
                }],
            }, {
                module: 'good-console',
            }, 'stdout'],
        },
    },
}, (err) => {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start((error) => {
        if (error) {
            throw error;
        }
        server.log('info', `Server running at: ${server.info.uri}`);
    });
});
