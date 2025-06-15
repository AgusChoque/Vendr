import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';
import { MatchPassword } from 'src/modules/auth/decorators/matchPassword.decorator';
import { LoginDto } from 'src/modules/auth/dtos/login.dto';

export class RegisterUserDto extends LoginDto {
  @IsNotEmpty()
  @Validate(MatchPassword, ['password'])
  confirmPassword: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(60)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(11)
  @MaxLength(11)
  @Matches(/^\d+$/)
  phone: string;
}
