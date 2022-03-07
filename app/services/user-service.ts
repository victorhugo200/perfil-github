import { UserInterface } from "../interfaces/User.model";

export class UserService {
    public getUser = async (userName: string): Promise<UserInterface> => {
        try {
            const fetchApi = await fetch(
                `https://api.github.com/users/${userName}`
            );

            if (fetchApi.status === 200) {
                const response = await fetchApi.json();
                return response;
            }
            if (fetchApi.status !== 200) {
                throw fetchApi.status + "";
            }
        } catch (exception) {
            console.log({ exception });
            return exception;
        }
    };
}
