import TarefasItem from "./TarefasItem";

const TarefasLista = ({ tarefas }) => {
  return (
    <ul style={{ border: "1px solid black" }}>
      {tarefas.map((tarefa) => {
        return <TarefasItem key={tarefa.id} tarefa={tarefa} />;
      })}
    </ul>
  );
};

export default TarefasLista;
