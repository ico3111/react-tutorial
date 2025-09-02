import { useState } from "react";
import TarefasForm from "./TarefasForm";
import TarefasLista from "./TarefasLista";

const AppTarefas = () => {
  const [tarefas, setTarefas] = useState([]);

  const addTarefa = (texto) => {
    const novaTarefa = {
      id: Date.now(),
      texto: texto,
    };
    console.log(tarefas);

    setTarefas([...tarefas, novaTarefa]);
  };

  return (
    <div>
      <h1>✏️📖📚🥳🎉-|Keepão React|- 🙌😂😘😮😭</h1>
      <hr />
      <TarefasForm addTarefa={addTarefa} />
      <TarefasLista tarefas={tarefas} />
    </div>
  );
};

export default AppTarefas;
