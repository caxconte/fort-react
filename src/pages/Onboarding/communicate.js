import React from 'react';
import Button from "../../components/UI/Button/Button";

const Communicate = () => {
  return (
    <section>
      <p>Communicate to FORT</p>
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

export default Communicate;
