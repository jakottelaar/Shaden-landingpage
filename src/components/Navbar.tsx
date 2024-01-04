import ShadenLogo from "../assets/Shaden logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-center bg-secondary-100">
      <nav className="container flex flex-row justify-between p-4 px-20">
        <div className="flex cursor-pointer flex-row space-x-4">
          <img src={ShadenLogo} className="w-[30px]" />
          <div className="text-3xl font-bold text-white">Shaden</div>
        </div>
        <button className="rounded-2xl bg-white p-2 px-6 font-semibold transition-all duration-300 hover:bg-primary-100 hover:text-white hover:shadow-lg">
          Open app
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
