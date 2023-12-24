import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly appService: CommentsService) {}

  @Get()
  getComments() {
      return this.appService.getAllComments();
  }

  @Get('/:id')
  getCommentByID(@Param() id: string): {} {
    return this.appService.getCommentById(id);
  }
  @Get('/post/:id')
  getCommentByPostId(@Param() id: string): {} {
    return this.appService.getCommentByPostId(id);
  }

  @Delete('/post/:id')
  deleteAllCommentsByPostId(@Param() id: string): {} {
    return this.appService.deleteAllCommentsByPostId(id);
  }
  
  @Post()
  create(@Body() createMessageDto: any) {
    return this.appService.createComment(createMessageDto);
  }

  @Delete('/:id')
  deleteCommentByID(@Param() id: string | number): Promise<any> {
      return this.appService.deleteCommentById(id);
  }

}