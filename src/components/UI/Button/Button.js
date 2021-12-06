const Button = (props) => {
  const className = `button ${props.variant}`;
  
  return (
    <button className={className} onClick={props.onClick} value={props.value}>
      <icon className={props.span}>{props.icon}</icon>
      {props.children}
    </button>
  );
};

export default Button;