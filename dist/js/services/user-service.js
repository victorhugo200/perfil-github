var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class UserService {
    constructor() {
        this.getUser = (userName) => __awaiter(this, void 0, void 0, function* () {
            try {
                const fetchApi = yield fetch(`https://api.github.com/users/${userName}`);
                if (fetchApi.status === 200) {
                    const response = yield fetchApi.json();
                    return response;
                }
                if (fetchApi.status !== 200) {
                    throw fetchApi.status + "";
                }
            }
            catch (exception) {
                console.log({ exception });
                return exception;
            }
        });
    }
}
//# sourceMappingURL=user-service.js.map