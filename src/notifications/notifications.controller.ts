import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly appService: NotificationsService) {}

  @Get()
  getPosts() {
      return this.appService.getAllNotifications();
  }

  @Get('/:id')
  getNotificationByID(@Param() id: string): {} {
    return this.appService.getNotificationById(id);
  }
  
  @Post()
  create(@Body() createLikeDto: any) {
    return this.appService.createNotification(createLikeDto);
  }

  @Delete('/:id')
  deleteNotificationByID(@Param() id: string | number): Promise<any> {
      return this.appService.deleteNotificationById(id);
  }

}