import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { CategoryModule } from './category/category.module';
import { CommentsModule } from './comments/comments.module';
import { MessagesModule } from './messages/messages.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PostsModule } from './posts/posts.module';
import { LikesController } from './likes/likes.controller';
import { LikesService } from './likes/likes.service';
import { LikesModule } from './likes/likes.module';
import configuration from './config/configuration';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    UsersModule,
    CategoryModule,
    CommentsModule,
    MessagesModule,
    NotificationsModule,
    PostsModule,
    LikesModule,
  ],
  controllers: [AppController, LikesController],
  providers: [AppService, LikesService],
})
export class AppModule {}
