import React from 'react';
import Button from "../../components/UI/Button/Button";

const Connect = () => {
  return (
    <section>
      <p>Connect to FORT</p>
      <Button
        className="btn btn-next"
        onClick={() => console.log("clicou no next")}
        value="Próximo"
      >
        Próximo
      </Button>
    </section>
  );
};

export default Connect;
