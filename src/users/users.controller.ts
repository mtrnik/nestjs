import {Body, Controller, Get, NotFoundException, Param, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {User} from "./user.entity";

@Controller('users')
export class UsersController {

    constructor(
        private usersService: UsersService
    ) {
    }
    @Get()
    async findAll(): Promise<User[]> {
        return await this.usersService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User | null> {
        const user = await this.usersService.findOne(parseInt(id))

        if (!user) {
            throw new NotFoundException('User does not exist');
        }

        return user
    }


    @Post()
    create(@Body() createUser: User): string {
        return 'This action adds a new cat';
    }
}