const Banner = () => {
  return (
    <section className="flex h-[600px] flex-col items-center justify-center">
      <h1 className="text-[80px] font-bold text-primary-100">Welcome!</h1>
      <div className="flex flex-row space-x-6 text-[70px] font-bold">
        <h1 className="text-primary-100">To</h1>
        <span className="text-secondary-100">Shaden</span>
      </div>
      <p className="mb-12 line-clamp-3 w-[600px] text-center text-xl">
        A place to meet new people, create friendships, and communicate with
        each other. Explore exciting events, share your interests, and build a
        vibrant community together.
      </p>
      <a href={import.meta.env.VITE_FRONTEND_WEB_URL}>
        <button className="w-[400px] rounded-xl border-2 border-transparent bg-secondary-100 p-3 text-xl font-bold text-white duration-300 hover:-translate-y-2 hover:border-2 hover:border-secondary-100 hover:bg-white hover:text-secondary-100 hover:shadow-xl">
          Join now
        </button>
      </a>
    </section>
  );
};

export default Banner;
