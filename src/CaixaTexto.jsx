import { useCallback, useState } from "react";

const CaixaTexto = () => {
  const [texto, setTexto] = useState("");

  const handleTexto = useCallback(
    (textoInput) => {
      setTexto(textoInput);
    },
    [texto]
  );

  return (
    <div>
      <h3>input</h3>
      <input
        type="text"
        onChange={(e) => {
          handleTexto(e.target.value);
        }}
      />
      <p>Voce digitou: {texto}</p>
    </div>
  );
};

export default CaixaTexto;
