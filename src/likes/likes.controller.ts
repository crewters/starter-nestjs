import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private readonly appService: LikesService) {}

  @Get()
  getLikess() {
      return this.appService.getAllLikes();
  }

  @Get('/:id')
  getLikesByID(@Param() id: string): {} {
    return this.appService.getLikeById(id);
  }
  
  @Post()
  create(@Body() createLikeDto: any) {
    return this.appService.createLike(createLikeDto);
  }

  @Delete('/:id')
  deleteLikeByID(@Param() id: string | number): Promise<any> {
      return this.appService.deleteLikeById(id);
  }

}