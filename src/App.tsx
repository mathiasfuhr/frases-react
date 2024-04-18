import { useState } from "react";
import "./App.css";

import logo from "./assets/logo-frases.png";

function App() {
  const [textoFrase, setTextoFrase] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);
  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "Acredite em si mesmo e nada será impossível.",
        "Cada novo dia é uma oportunidade para brilhar.",
        "Persista, pois até o maior sucesso vem da determinação.",
        "Seja a mudança que você deseja ver no mundo.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "Encare os desafios como trampolins para o seu crescimento.",
        "A felicidade não é um destino, é uma jornada. Aproveite cada passo.",
        "Nunca subestime o poder de um pensamento positivo.",
        "Você é mais forte do que imagina. Acredite nisso.",
        "Não espere por oportunidades, crie-as.",
      ],
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        "Que seu dia seja tão radiante quanto o sol que o ilumina",
        "Bom dia! Que sua jornada seja repleta de sorrisos e conquistas",
        "Levante-se e brilhe, o mundo espera pela sua luz",
        "Desejo que seu dia comece com alegria e termine com gratidão",
        "Bom dia! Que hoje você encontre motivos para sorrir em cada instante",
        "Que o seu dia seja abençoado com amor, paz e realizações",
        "Aproveite cada momento deste novo dia como uma dádiva preciosa",
        "Comece o dia com pensamentos positivos e tudo fluirá melhor",
        "Sorria! Você tem o poder de tornar este dia incrível",
        "Bom dia! Que você seja guiado pela serenidade e pela determinação em tudo que fizer",
      ],
    },
  ];

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index);
  }

  function gerarFrase() {
    let numeroAleatorio = Math.floor(
      Math.random() * allFrases[categoriaSelecionada].frases.length
    );
    setTextoFrase(allFrases[categoriaSelecionada].frases[numeroAleatorio]);
  }

  return (
    <div className="container">
      <img src={logo} alt="Logo frases" className="logo" />
      <h2 className="title">Categorias</h2>

      <section className="category-area">
        {allFrases.map((item, index) => (
          <button
            key={item.id}
            className="category-button"
            style={{
              borderWidth:
                item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db",
            }}
            onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className="button-frase" onClick={gerarFrase}>
        Gerar Frase
      </button>

      {textoFrase !== "" && <p className="textoFrase">" {textoFrase} "</p>}
    </div>
  );
}

export default App;
