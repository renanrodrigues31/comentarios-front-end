const send = document.querySelector('.escrever-comentario button');
const reply = document.querySelectorAll('.reply');
const buttonDelete = document.querySelector('.delete');
const edit = document.querySelectorAll('.edit');
const likeAdicionar = document.querySelectorAll('.icon-plus');
const likeSubtrair = document.querySelectorAll('.icon-minus');
let idDivAleatorio = Math.floor(Math.random() * 100000 + 1);

/*for (var i = 0; i < buttonDelete.length; ++i) {
    buttonDelete[i].addEventListener */

  
send.addEventListener('click', criarComentario);

function criarComentario() {
    let elementoPai = document.querySelector('section');
    const inputComent = document.querySelector('.escrever-comentario textarea').value;
    if (inputComent != '') {
        let idDivAleatorio = Math.floor(Math.random() * 100000 + 1);
        let criando = document.createElement('div');
            criando.id = idDivAleatorio;
            criando.classList.add('coments');
                criando.innerHTML = `<div class="likes">
                <img class="icon-plus" src="./images/icon-plus.svg"><p>0</p><img class="icon-minus" src="./images/icon-minus.svg">
            </div>
            <div class="container-comentarios">
                <div class="container-superior">
                    <div class="container-perfil">
                    <div class="foto"><img src="./images/avatars/image-juliusomo.png"></div>
                    <div class="nickname">amyrobson<span class="tag-you">you</span></div>
                    <div class="date-publish">few seconds</div>
                    </div>
                    <div class="container-reply-delete">
                    <button class="reply esconder"><img src="./images/icon-reply.svg">Reply</button>
                    <button class="edit"><img src="./images/icon-edit.svg">Edit</button>
                    <button onclick = "excluirComentario()" class="delete"><img src="./images/icon-delete.svg">Delete</button>
                    </div>
                </div>
            <div class="comentario">${inputComent}</div>
            </div>`;
            elementoPai.appendChild(criando);
            let inputVazio = document.querySelector('.escrever-comentario textarea');
            inputVazio.value = '';
            
    }
}

// isso aqui precisa ser corrigido (para remover a div) como eu pego o id gerado automaticamente?
function excluirComentario() {
    let pegarIdDiv = document.getElementById(idDivAleatorio);
    if(pegarIdDiv) {
        pegarIdDiv.remove();
    }
}



