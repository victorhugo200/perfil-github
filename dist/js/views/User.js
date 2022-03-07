import { formatDate } from "../helpers/helpers.js";
export class User {
    constructor(info) {
        this.info = info;
    }
    updateTemplate() {
        const info = document.querySelector(".wrapper");
        const template = `
           <div class="profile">
            <figure title="Acessar perfil de ${this.info.name}">
                <a href="${this.info.html_url}">
                    <img   src="${this.info.avatar_url}" alt="Imagem do usuário ${this.info.name}">
                </a>
                
            </figure>
            <div class="info">
                <div class="info__resume">
                     <h5 class="title">Seguidores</h5>
                     <span>${this.info.followers}</span>
                </div>
                <div class="info__resume">
                     <h5 class="title">Seguindo</h5>
                     <span>${this.info.following}</span>
                </div>
                <div class="info__resume">
                     <h5 class="title">Data de crição do perfil</h5>
                     <span>${formatDate(this.info.created_at)}</span>
                </div>
            </div>
            <h1>${this.info.name
            ? this.info.name
            : "Nome do usuário não encontrado"}</h1>
            <p>${this.info.bio
            ? this.info.bio
            : "Usuário sem bibliografia definida"}</p>
        </div>
        `;
        info.innerHTML = template;
    }
    static templateError(text) {
        const info = document.querySelector(".wrapper");
        const template = `
            <div class="feedback">
                <img src="img/svg/error.svg">
                <h2>Ooops! Parece que ocorreu um erro.</h2>
                <p>${text}</p>
            </div>
        `;
        info.innerHTML = template;
    }
}
//# sourceMappingURL=User.js.map