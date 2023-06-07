const listaAnimais = [
  {
    nome: "Animal 1",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus.",
    imgURL: "",
  },
  {
    nome: "Animal 2",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus.",
    imgURL: "",
  },
  {
    nome: "Animal 3",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus.",
    imgURL: "",
  },
  {
    nome: "Animal 4",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam nisl, dapibus quis dictum quis, facilisis non risus.",
    imgURL: "",
  },
];

let container = document.querySelector("main .container");

const criacaoPosts = () => {
  listaAnimais.forEach((animal) => {
    let card = `   
            <div class="card">
                <img class="card-img" src=${animal.imgURL} /> 
                <h2 class="card-nome"> ${animal.nome} </h2>
                <p class="card-descricao"> ${animal.descricao} </p>
                <button type="button" class="botao-card-main btn btn-info">Entre em contato</button>
            </div>
        `;
    container.innerHTML += card;
  });
};

window.onload = () => {
  criacaoPosts();
};
