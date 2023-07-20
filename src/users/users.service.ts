import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { LoginInput } from './dto/login-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { saltRounds } from '../constants/default';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  bcrypt = require('bcrypt');

  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async login(loginInput: LoginInput): Promise<User> {
    const user = await this.usersRepository.findOneOrFail({
      where: { username: loginInput.username },
    });
    if (!user) throw new NotFoundException('User not found');
    const isMatch = await bcrypt.compare(loginInput.password, user.password);
    if (user && isMatch) {
      return user;
    } else {
      throw new UnauthorizedException('Invalid Username or Password');
    }
  }
}
