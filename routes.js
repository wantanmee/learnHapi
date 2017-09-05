const registerRoutes = (server) => {
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, reply) => reply('Hello, world!'),
    });
    server.route({
        method: 'GET',
        path: '/{name}',
        handler: (request, reply) => reply(`Hello, ${encodeURIComponent(request.params.name)}!`),
    });
    server.route({
        method: 'GET',
        path: '/host',
        handler: (request, reply) => reply({
            name: 'Kate',
        }),
    });
    server.route({
        method: 'POST',
        path: '/endpoint/new',
        handler: (request, reply) => {
            server.log('info', request.payload);            
            reply({
                ...request.payload,
                code: 0,
            });
        },
    });
};

module.exports = registerRoutes;
