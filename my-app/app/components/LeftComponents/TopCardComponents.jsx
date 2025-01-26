const Options = ({ main, message }) => {
  return (
    <div className="inline-block text-center">
      <p className="font-[700] leading-[27px]">{main}</p>
      <p className="font-[400] text-[14px]">{message}</p>
    </div>
  );
};

// TopComponent

const TopCardElement = () => {
  return (
    <div className="drop-shadow-2xl  shadow-lg shadow-black -top-[100px] rounded-2xl border-[1px] border-[#E9EAEB] text-[#081735] w-[447px] mx-9 px-9 py-4 z-10 relative overflow-hidden">
      <div className=" flex border-b-[1px] border-[#E9EAEB] pr-10 py-5">
        <img className="w-[28px] h-[31px] mx-2" src="./logo.png"></img>
        <p className="font-[700] text-[18px] leading-[27px] ">
          AI to Detect & Autofix Bad Code
        </p>
      </div>
      {/* <hr className="border-[1px] border-[#E9EAEB]" /> */}

      <div className="flex justify-between">
        <Options main={"30+"} message={"Language Support"} />
        <Options main={"10K+"} message={"Developers"} />
        <Options main={"100K+"} message={"Hours Saved"} />
      </div>
    </div>
  );
};

export { TopCardElement, Options };
// export default Options;
