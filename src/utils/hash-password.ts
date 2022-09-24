import * as bcrypt from 'bcryptjs';
const saltRounds = 10;

export const hashPasswords = (password: string): string => {
    return bcrypt.hashSync(password, saltRounds);
};

export const comparePassword = (password: string, hash: string): boolean => {
    return bcrypt.compareSync(password, hash);
};
