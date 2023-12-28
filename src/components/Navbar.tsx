const Navbar = () => {
  return (
    <div className="bg-secondary-100 flex justify-center">
      <nav className="container flex flex-row justify-between p-4 px-20">
        <div className="text-3xl font-bold text-white">Shaden</div>
        <button className="hover:bg-primary-100 rounded-2xl bg-white p-2 px-6 font-semibold transition-all duration-300 hover:text-white hover:shadow-lg">
          Open app
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
