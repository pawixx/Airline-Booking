import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get('login')
  test(): string {
    return 'haha';
  }

  @Post('register')
  async register(@Body() body) {
    try {
      await this.UserService.register(body);
      return { success: true };
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
