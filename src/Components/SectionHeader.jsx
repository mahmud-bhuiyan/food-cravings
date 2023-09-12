const SectionHeader = ({ subStyle, textStyle, text, subText }) => {
  return (
    <div>
      <h2
        className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-20 ${textStyle}`}
      >
        {text}
      </h2>
      <h3 className={`md:text-lg font-semibold mb-6 ${subStyle}`}>{subText}</h3>
    </div>
  );
};

export default SectionHeader;
