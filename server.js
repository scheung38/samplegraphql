var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query {
        foo: String
    }
`);

var root = {
    foo: () => {
        return 'Hello world!';
    }

};

graphql(schema, '{ foo }', root).then(response => console.log(response));


// #
// $ node server.js returns:
// { data: { hello: 'Hello world!' } }
