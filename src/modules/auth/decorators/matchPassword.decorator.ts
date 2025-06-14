import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'matchPassword' })
export class MatchPassword implements ValidatorConstraintInterface {
  validate(passwordConfirm: string, args: ValidationArguments) {
    if (passwordConfirm !== (args.object as any)[args.constraints[0]]) return false;
    return true;
  }

  defaultMessage() {
    return 'Passwords does not match';
  }
}
