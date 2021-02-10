import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import RepoModule from './repo.module';
import AuthorResolver from './resolvers/author.resolver';

const GraphQLImport = [AuthorResolver];

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RepoModule,
    ...GraphQLImport,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
