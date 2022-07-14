const mainController = {
  index: (req, res) => {
    res.render("index", { about: about, menu: listaPratos });
  },
  detalhes: (req, res) => {
    let prato = listaPratos.find((prato) => prato.id == req.params.menuId);
    console.log(prato);
    res.render("detalheMenu", { prato: prato });
  },
};

const about = {
  titulo: "Pimenta e Sal",
  descricao:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.",
  historia:
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

const listaPratos = [
  {
    id: 1,
    titulo: "Carpaccio Fresco",
    sAbout: "Entrada de Carpaccio de salmão",
    lAbout:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    preco: "65.50",
    img: "carpaccio-de-salmao.jpg",
  },
  {
    id: 2,
    titulo: "Risotto de berinjela",
    sAbout: "Risotto de berinjela e queijo de cabra",
    lAbout: "",
    precio: "47.00",
    img: "risotto-berinjela-queijo-cabra.jpg",
  },
  {
    id: 3,
    titulo: "Mousse de arroz",
    sAbout: "Mousse de arroz com leite e aroma de flor de laranjeira",
    lAbout: "",
    precio: "27.50",
    img: "mousse-de-arroz-com-leite.jpg",
  },
  {
    id: 4,
    titulo: "Aspargos brancos",
    sAbout: "Aspargos brancos com vinagrete de legumes e presunto ibérico",
    lAbout: "",
    precio: "37.50",
    img: "aspargos.png",
  },
];
module.exports = mainController;
