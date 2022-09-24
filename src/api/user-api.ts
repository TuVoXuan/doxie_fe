import { users } from '../fake-data/user';
import { comparePassword, hashPasswords } from '../utils/hash-password';
import { v4 as uuidv4 } from 'uuid';

const userApi = {
    signIn: (data: ISignIn) => {
        return new Promise<IResAuth>((resolve, reject) => {
            const user = users.find((curUser) => curUser.email === data.email);
            if (user) {
                if (comparePassword(data.password, user.password)) {
                    return resolve({
                        message: 'Login successfully',
                        data: {
                            id: user.id,
                            name: user.name,
                            avatar: user.avatar,
                            email: user.email,
                            phone: user.phone,
                            district: user.district,
                            province: user.province,
                            streetAddress: user.streetAddress,
                            ward: user.ward,
                        },
                    });
                } else {
                    return reject({ message: 'Password is not correct' });
                }
            } else {
                return reject({ message: 'Account is not existed' });
            }
        });
    },
    signUp: (data: ISignUP) => {
        return new Promise<IResAuth>((resolve, reject) => {
            console.log('users', users);
            const isEmailExisted =
                users.findIndex((curUser) => curUser.email === data.email) >= 0 ? true : false;
            if (isEmailExisted) {
                return reject({ message: 'Email has been used' });
            }

            const isPhoneExisted =
                users.findIndex((curUser) => curUser.phone === data.phone) >= 0 ? true : false;
            if (isPhoneExisted) {
                return reject({ message: 'Phone has been used' });
            }

            const newUser: IUser = {
                id: uuidv4(),
                name: data.name,
                email: data.email,
                phone: data.phone,
                district: data.district,
                province: data.province,
                streetAddress: data.streetAddress,
                password: hashPasswords(data.password),
                ward: data.ward,
                avatar: './assets/images/avatar.jpg',
            };

            users.push(newUser);

            return resolve({
                message: 'Sign up successfully',
                data: {
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email,
                    phone: newUser.phone,
                    district: newUser.district,
                    province: newUser.province,
                    streetAddress: newUser.streetAddress,
                    ward: newUser.ward,
                    avatar: newUser.avatar,
                },
            });
        });
    },
};
export default userApi;
