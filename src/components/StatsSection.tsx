const StatsSection = () => {
  return (
    <section className="flex h-[600px] justify-center bg-neutral-100">
      <div className="container flex flex-row items-center justify-between px-80">
        <div className="flex flex-col space-y-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.0}
            stroke="currentColor"
            className="stroke-secondary-100 h-40 w-40"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.0}
            stroke="currentColor"
            className="stroke-secondary-100 h-40 w-40"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
            />
          </svg>
        </div>
        <div className="flex w-[500px] flex-col text-start">
          <h1 className="mb-4 text-[40px] font-bold">
            <span className="text-primary-100">Check </span>
            <span className="text-secondary-100">out </span>
            <span className="text-primary-100">some </span>
            <span className="text-secondary-100">important </span>
            <span className="text-primary-100">numbers </span>
            <span className="text-secondary-100">about </span>
            <span className="text-primary-100">our </span>
            <span className="text-secondary-100">community</span>
          </h1>
          <p className="mb-2 text-lg">
            Explore and connect with a vibrant community of {2} members,
            fostering {2} friendships and over {2} sent messages
          </p>
          <p className="mb-2 text-lg">
            Join the conversation, share your interests, and be part of
            something special.
          </p>
          <p className="text-lg">Your journey begins here.</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
