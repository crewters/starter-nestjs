import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly appService: MessagesService) {}

  @Get()
  getMessages() {
      return this.appService.getAllMessages();
  }

  @Get('/:id')
  getMessageByID(@Param() id: string): {} {
    return this.appService.getMessageById(id);
  }
  
  @Post()
  create(@Body() createMessageDto: any) {
    return this.appService.createMessage(createMessageDto);
  }

  @Delete('/:id')
  deleteMessageByID(@Param() id: string | number): Promise<any> {
      return this.appService.deleteMessageById(id);
  }

}