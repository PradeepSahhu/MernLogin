import Link from "next/link";

const SignInOptions = ({ name, logo, dest }) => {
  return (
    <Link
      className="border-[1px] border-[#D8DAE5] bg-white rounded-[8px] sm:px-[160px]  py-[16px] text-[#171717] sm:mx-0 mx-4  flex items-center sm:w-[446px] w-[350px] sm:align-center sm:gap-[16px] text-center"
      href={`${dest}`}
    >
      <img className="w-[25px] h-[25px] mx-3 sm:mx-0" src={`${logo}`} />
      <p className="font-[600] text-[16px] leading-[24px] w-[146px] h-[24px] whitespace-nowrap sm:m-0 mx-10">{`${name}`}</p>
    </Link>
  );
};

const SelfHosted = () => {
  return (
    <div className="flex flex-col justify-center items-center font-[inter] gap-y-[16px] py-5 rounded-xl">
      <SignInOptions name={"Self Hosted GitLab"} logo={"./image_1.png"} />
      <SignInOptions name={"Sign in with SSO"} logo={"./key.png"} />
      <SignInOptions name={"Register"} logo={"./key.png"} dest={`./register`} />
    </div>
  );
};

const SignIn = ({ Destination }) => {
  return (
    <div className="flex flex-col justify-center items-center font-[inter] gap-y-[16px] py-5 rounded-xl">
      <SignInOptions
        name={"Sign in with Github"}
        logo={"./icon.png"}
        dest={`${Destination}`}
      />
      <SignInOptions
        name={"Sign in with Bitbucket"}
        logo={"./icon_2.png"}
        dest={`${Destination}`}
      />
      <SignInOptions
        name={"Sign in with Azure Devops"}
        logo={"./image.png"}
        dest={`${Destination}`}
      />
      <SignInOptions
        name={"Sign in with GitLab"}
        logo={"./image_1.png"}
        dest={`${Destination}`}
      />
    </div>
  );
};

export { SignIn, SelfHosted };
