import { CacheModule, Module, CacheInterceptor  } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: 'redis.cache',
      port: 6379,
    }),
    DatabaseModule,
    ArticlesModule
  ],
  controllers: [AppController],
  providers: [
      {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    AppService
  ],
})
export class AppModule {}
