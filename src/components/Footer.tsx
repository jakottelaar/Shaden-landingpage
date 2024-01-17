import ShadenLogo from "../assets/Shaden logo.svg";

const Footer = () => {
  return (
    <footer className="bg-primary-100">
      <div className="container mx-auto px-8 py-16">
        <hr className="border-1 mb-6 border-secondary-100" />
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex cursor-pointer items-center space-x-4">
            <img src={ShadenLogo} className="w-8" alt="Shaden Logo" />
            <div className="text-2xl font-bold text-white">Shaden</div>
          </div>
          <a href={import.meta.env.VITE_FRONTEND_WEB_URL}>
            <button className="mt-4 rounded-full bg-secondary-100 px-6 py-2 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-secondary-100 hover:shadow-lg md:mt-0">
              Open app
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
