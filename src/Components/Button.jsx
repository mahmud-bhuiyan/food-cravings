const Button = ({ divStyle, buttonStyle, text }) => {
  return (
    <div className={`${divStyle}`}>
      <button
        className={`bg-purple-500 text-white hover:bg-purple-800 w-[40%] sm:w-[30%] md:w-[20%] py-2 rounded-lg ${buttonStyle}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
