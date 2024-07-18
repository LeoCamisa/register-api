import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { LoginInput } from './dto/login.input';
import { LoginResponse } from './dto/login-response.dto';
import { User } from '../user/user.entity/user.entity';


@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    console.log('User found:', user);
    if (user && (pass)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginInput: LoginInput): Promise<LoginResponse> {
    const user = await this.validateUser(loginInput.email, loginInput.password);
    console.log('Validated user:', user);
    if (!user) {
      throw new UnauthorizedException();
    }

    const payload = { username: user.name, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      role: user.role,
      user_name: user.name,
      user_id: user.id.toString(),
    };
  }

  async getUserById(userId: string): Promise<User> { 
    const user = await this.usersService.findById(Number(userId)); 
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return user;
  }
}