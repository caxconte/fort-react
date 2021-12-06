const Input = ({
  variant,
  placeholder,
  type,
  name,
  label,
  onChange,
  value,
}) => {
  const className = `input ${variant}`;
  return (
    <label>
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
      ></input>
      {label}
    </label>
  );
};

export default Input;
