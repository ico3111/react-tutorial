import { useState } from "react";

const TarefasForm = ({ addTarefa }) => {
  const [tarefa, setTarefa] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tarefa.trim()) {
      addTarefa(tarefa);
      setTarefa("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={tarefa}
        onChange={(e) => {
          setTarefa(e.target.value);
        }}
      />
      <br />
      <button type="submit">Add</button>
    </form>
  );
};

export default TarefasForm;
