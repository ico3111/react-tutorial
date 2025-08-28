import { useState, useCallback } from "react";

const CowSay = () => {
  const [texto, setTexto] = useState("");

  const handleTexto = useCallback((textoInput) => {
    setTexto(textoInput);
  }, []);

  return (
    <div>
      <pre>
        ________________________________________ 
        | {texto || "Digite algo..."} |
        ---------------------------------------- 
               \   ^__^
                \  (oo)\_______
                   (__)\       )\/\
                       ||----w |
                       ||     ||
      </pre>
      <input
        type="text"
        onChange={(e) => handleTexto(e.target.value)}
      />
    </div>
  );
};

export default CowSay;
