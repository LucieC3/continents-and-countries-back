import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { CountryResolver } from './resolvers/CountryResolver';

async function bootstrap() {
  const connection = await createConnection();

  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });

  const server = new ApolloServer({ schema });

  const { url } = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
