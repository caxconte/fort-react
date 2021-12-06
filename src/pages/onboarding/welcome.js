import Button from "../../components/UI/Button/Button";

const Welcome = () => {
  return (
    <section>
      <p>Welcome to FORT</p>
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

export default Welcome;
