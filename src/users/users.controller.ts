import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: UsersService) {}

  @Get()
  getAllProfilePics(): {} {
    return this.appService.getAllProfilePics();
  } 

  @Get('/:id')
  getProfilePicByID(@Param() id: string): {} {
    return this.appService.getProfilePicById(id);
  }

  @Post()
  createProfilePic(@Body() createPostDto: any) {
    return this.appService.createProfilePic(createPostDto);
  }

  @Delete('/:id')
  deleteProfilePicByID(@Param() id: string | number): Promise<any> {
      return this.appService.deleteProfilePicByID(id);
  }

}
