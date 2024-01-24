import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex">
      <Image height={50} width={50} alt="logo" src="/logo.svg" />
      <p className="text-[#790977] font-bold">LearniFyHub</p>
    </div>
  );
};

export default Logo;
