import { UserService } from "../services/user-service.js";
import { User } from "../views/User.js";

export class UserController {
    private button: HTMLButtonElement;
    private inputSearch: HTMLInputElement;
    private textDefault: HTMLParagraphElement;
    private userService: UserService;
    constructor(selector: string, selectorInput: string) {
        this.button = document.querySelector(selector) as HTMLButtonElement;
        this.textDefault = document.querySelector(".text-default");
        this.inputSearch = document.querySelector(
            selectorInput
        ) as HTMLInputElement;
        this.userService = new UserService();

        this.button.addEventListener("click", (event) => {
            event.preventDefault();
            const userName = this.inputSearch.value;
            if (userName.length) {
                this.userService
                    .getUser(userName)
                    .then((response) => {
                        if (typeof response === "object") {
                            const user = new User(response);
                            this.textDefault.style.display = "none";
                            user.updateTemplate();
                            this.inputSearch.value = "";
                        } else {
                            throw +response;
                        }
                    })
                    .catch(() => {
                        this.textDefault.style.display = "none";
                        this.inputSearch.value = "";
                        User.templateError(
                            "Não podemos confirmar e nem negar a existência deste repositório."
                        );
                    });
            } else {
                alert("Por favor, preencha seu userName");
            }
        });
    }
}
