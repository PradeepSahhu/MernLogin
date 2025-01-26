export const BottomCardElement = () => {
  return (
    <div>
      {/* bottom component */}

      {/* top-full -left-1/2 -bottom-5 */}
      <div className="drop-shadow-2xl shadow-2xl shadow-black text-[#081735] font-[inter] rounded-xl w-[270px] h-[164px] absolute top-[360px] left-[350px] z-20 bg-white">
        <div className="px-10 py-5 flex gap-5">
          <div className="flex flex-col gap-5">
            <img className="w-[56px] h-[57px]" src="./circle.png" />
            <div className=" flex-col gap-3 inline-block">
              <p className="font-[700] text-[14px] leading-[20px]">
                Issues Fixed
              </p>
              <p className="font-[700] text-[32px] leading-[32px]">500K+</p>
            </div>
          </div>

          <div>
            <div className="flex items-center">
              <img src="./arrow.png" />
              <p className="font-[700] text-[#0049C6]">14%</p>
            </div>
            <div className="whitespace-nowrap">
              <p className="">This week</p>
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute bottom-0 left-0 w-[284px] h-[319px]"
        src="./Subtract.png"
      />
    </div>
  );
};
