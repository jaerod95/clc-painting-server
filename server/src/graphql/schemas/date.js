const graphql = require('graphql');
const graphqlLanguage = require('graphql/language');

const { GraphQLScalarType } = graphql;
const { Kind } = graphqlLanguage;

export const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'MYSQL encoded DateTime Type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value; // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        const sanitizedUNIXDate = parseInt(
          ast.value.split('.')[0].replace(/[^0-9]+/g, ''),
          10,
        );
        return new Date(sanitizedUNIXDate);
      }
      return new Date(ast);
    },
  }),
};

export const typeDefs = `
  scalar Date  
`;
