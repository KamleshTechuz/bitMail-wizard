import { logo } from "../assets";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 text-[#0dceda]">
      <div className="container mx-auto flex items-center cursor-pointer">
        <img src={logo} className="h-12 w-12  mr-2" />
        <h1 className="text-2xl font-semibold">BitMail-Wizard</h1>
      </div>
    </header>
  );
};

export default Header;
