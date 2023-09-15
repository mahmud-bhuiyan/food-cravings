const SectionHeader = ({ divStyle, subStyle, textStyle, text, subText }) => {
  return (
    <div className={`${divStyle}`}>
      <h2
        className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-20 capitalize ${textStyle}`}
      >
        {text}
      </h2>
      <h3
        className={`sm:text-lg md:text-xl font-semibold mb-6 capitalize ${subStyle}`}
      >
        {subText}
      </h3>
    </div>
  );
};

export default SectionHeader;
