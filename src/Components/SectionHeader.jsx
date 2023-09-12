const SectionHeader = ({ style, text }) => {
  return (
    <div>
      <h2
        className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-20 mb-6 ${style}`}
      >
        {text}
      </h2>
    </div>
  );
};

export default SectionHeader;
