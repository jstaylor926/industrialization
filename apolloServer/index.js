const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    # Book type defines queryable field
    type Book {
        title: String;
        author: String;
    }

    type Query {
        books: [Book];
    }
`;

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];
  
  // Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      books: () => books,
    },
  };
  
  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => {
      console.log(`🚀 Server readt at ${ url }`)
  })