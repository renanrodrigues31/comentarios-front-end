const send = document.querySelector('.escrever-comentario button');
const reply = document.querySelectorAll('.reply');
const buttonDelete = document.querySelectorAll('.delete');
const edit = document.querySelectorAll('.edit');
const likeAdicionar = document.querySelectorAll('.icon-plus');
const likeSubtrair = document.querySelectorAll('.icon-minus');

send.addEventListener('click', criarComentario);

function criarComentario() {
    let elementoPai = document.querySelector('section');
    let criando = document.createElement('div');
        criando.classList.add('coments');
            criando.innerHTML = `<div class="likes">
            <img class="icon-plus" src="./images/icon-plus.svg"><p>0</p><img class="icon-minus" src="./images/icon-minus.svg">
          </div>
          <div class="container-comentarios">
            <div class="container-superior">
                <div class="container-perfil">
                  <div class="foto"><img src="./images/avatars/image-juliusomo.png"></div>
                  <div class="nickname">amyrobson<span class="tag-you">you</span></div>
                  <div class="date-publish">3 months ago</div>
                </div>
                <div class="container-reply-delete">
                  <button class="reply"><img src="./images/icon-reply.svg">Reply</button>
                  <button class="edit esconder"><img src="./images/icon-edit.svg">Edit</button>
                  <button class="delete esconder"><img src="./images/icon-delete.svg">Delete</button>
                </div>
            </div>
          <div class="comentario">Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.</div>
        </div>`;
         elementoPai.appendChild(criando);
}

for (var i = 0; i < reply.length; ++i) {
    reply[i].addEventListener('click', replyComent);
        function replyComent(){
            console.log("tá prestando");
        }
}

for (var i = 0; i < buttonDelete.length; ++i) {
    buttonDelete[i].addEventListener('click', deleteComent);
        function deleteComent(){
            let removendoDiv = document.querySelector('.coments');
            removendoDiv.classList.add ('esconder');
        }
}

for (var i = 0; i < edit.length; ++i) {
    edit[i].addEventListener('click', editComent);
        function editComent(){
            console.log("tá prestando");
        }
}

for (var i = 0; i < likeAdicionar.length; ++i) {
    likeAdicionar[i].addEventListener('click', adicionarLike);
        function adicionarLike(){
            console.log("tá prestando");
        }
}

for (var i = 0; i < likeSubtrair.length; ++i) {
    likeSubtrair[i].addEventListener('click', retirarLike);
        function retirarLike(){
            console.log("tá prestando");
        }
}