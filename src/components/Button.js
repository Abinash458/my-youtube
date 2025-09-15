const Button = ({ name }) => {
  return (
    <div>
      <button className="p-2 w-max rounded-lg mr-2 bg-gray-100 text-black text-sm">
        {name}
      </button>
    </div>
  );
};

export default Button;
