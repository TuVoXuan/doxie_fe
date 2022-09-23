import { users } from '../fake-data/user';
import { comparePassword, hashPasswords } from '../utils/hash-password';

const userApi = {
    signIn: (data: ISignIn) => {
        return new Promise<IResSignIn>((resolve, reject) => {
            const user = users.find((curUser) => curUser.email === data.email);
            if (user) {
                if (comparePassword(data.password, user.password)) {
                    resolve({
                        message: 'Login successfully',
                        data: {
                            id: user.id,
                            name: user.name,
                            avatar: user.avatar,
                            email: user.email,
                            phone: user.phone,
                            district: user.district,
                            hamlet: user.hamlet,
                            province: user.province,
                            streetAddress: user.streetAddress,
                            ward: user.ward,
                        },
                    });
                } else {
                    reject({ message: 'Password is not correct' });
                }
            } else {
                reject({ message: 'Account is not existed' });
            }
        });
    },
};
export default userApi;
