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

export class RegisterUserDto {
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(60)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(25)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&]{6,25}$/)
  password: string;

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
