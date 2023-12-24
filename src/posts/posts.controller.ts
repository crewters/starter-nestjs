import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly appService: PostsService) {}

  @Get()
  getPosts() {
      return this.appService.getAllPosts();
  }

  @Get('/:id')
  getPostByID(@Param() id: string): {} {
    return this.appService.getPostById(id);
  }

  @Put('/likes/:id')
  addLikeByID(@Param() id: string): {} {
    return this.appService.addLikeById(id);
  }
  @Put('/likes/remove/:id')
  removeLikeByID(@Param() id: string): {} {
    return this.appService.removeLikeById(id);
  }
  @Put('/comments/:id')
  addCommentByID(@Param() id: string): {} {
    return this.appService.addCommentById(id);
  }
  @Put('/comments/remove/:id')
  removeCommentByID(@Param() id: string): {} {
    return this.appService.removeCommentById(id);
  }
  
  @Post()
  create(@Body() createPostDto: any) {
    return this.appService.createPost(createPostDto);
  }

  @Delete('/:id')
  deletePostByID(@Param() id: string | number): Promise<any> {
      return this.appService.deletePostById(id);
  }

}
