const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md: w-4/12 my-8 mx-auto text-center">
      <p className="text-yellow-600 mb-4 ">---{subHeading}---</p>
      <h3 className="text-3xl uppercase py-5 border-y">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
