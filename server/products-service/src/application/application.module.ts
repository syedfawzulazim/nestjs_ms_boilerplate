import { GetProductsByIdHandler } from './query/handler/get-products-by-id.handler';
import { QueryHandlers } from './query/handler/index';
import { InfrastructureModule } from './../infrastructure/infrastructure.module';
import { DomainModule } from './../domain/domain.module';
import { CqrsModule, QueryHandler } from '@nestjs/cqrs';
import { Module } from '@nestjs/common';

@Module({
    imports: [CqrsModule, DomainModule, InfrastructureModule],
    providers: [GetProductsByIdHandler],
    exports: [GetProductsByIdHandler],
})
export class ApplicationModule {}