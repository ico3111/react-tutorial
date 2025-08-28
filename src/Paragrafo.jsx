import { useCallback, useEffect, useState } from "react";

const Paragrafo = (props) => {
  const [num, setNum] = useState(2);

  useEffect(() => {
    setNum(5);
  }, []);

  const handleButton = useCallback((aumentar = true) => {
    aumentar
      ? setNum((prevNum) => prevNum + 1)
      : setNum((prevNum) => prevNum - 1);
  }, []);

  return (
    <>
      <p>
        {props.nome} tem {num}
      </p>
      <button
        onClick={() => {
          handleButton();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          handleButton(false);
        }}
      >
        -
      </button>
    </>
  );
};

export default Paragrafo;
