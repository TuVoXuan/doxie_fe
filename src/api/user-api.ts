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
                },
            });
        });
    },
    updateProfile: (data: IUpdateProfileData) => {
        return new Promise<IResUpdateProfile>((resolve, reject) => {
            const userEmail = users.find((user) => user.email === data.email);
            if (userEmail && userEmail.id !== data.userId) {
                return reject({ message: 'Email has been used' });
            }

            const userPhone = users.find((user) => user.phone === data.phone);
            if (userPhone && userPhone.id !== data.userId) {
                return reject({ message: 'Phone has been used' });
            }

            const user = users.find((u) => u.id === data.userId);
            if (user) {
                user.name = data.name;
                user.email = data.email;
                user.phone = data.phone;
                user.district = data.district;
                user.province = data.province;
                user.ward = data.ward;
                user.streetAddress = data.streetAddress;

                return resolve({
                    message: 'Login successfully',
                    data: {
                        name: user.name,
                        email: user.email,
                        phone: user.phone,
                        district: user.district,
                        province: user.province,
                        ward: user.ward,
                        streetAddress: user.streetAddress,
                    },
                });
            }
        });
    },
    getCurrentUser: (userId: string) => {
        return new Promise<IResAuth>((resolve, reject) => {
            const user = users.find((curUser) => curUser.id === userId);
            if (user) {
                return resolve({
                    message: 'Get current user successfully',
                    data: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        phone: user.phone,
                        district: user.district,
                        province: user.province,
                        streetAddress: user.streetAddress,
                        ward: user.ward,
                    },
                });
            } else {
                return reject({ message: 'User not found' });
            }
        });
    },
};
export default userApi;
