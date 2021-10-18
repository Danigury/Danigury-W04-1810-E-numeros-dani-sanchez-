const Input = ({ number, actionOnClick }) => {
  return <input type="text" value={number} onClick={actionOnClick} readOnly />;
};

export default Input;
