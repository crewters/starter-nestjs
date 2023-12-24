import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly appService: CategoryService) {}

  @Get()
  getCategories() {
      return this.appService.getAllCategories();
  }

  @Get('/:id')
  getCategoryByID(@Param() id: string): {} {
    return this.appService.getCategoryById(id);
  }
  
  @Post()
  create(@Body() createMessageDto: any) {
    return this.appService.createCategory(createMessageDto);
  }

  @Delete('/:id')
  deleteCategoryByID(@Param() id: string | number): Promise<any> {
      return this.appService.deleteCategoryById(id);
  }

}