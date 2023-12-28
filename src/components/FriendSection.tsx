const FriendSection = () => {
  return (
    <section className="flex h-[600px] justify-center bg-white">
      <div className="container flex flex-row items-center justify-between px-80">
        <div className="w-[500px]  text-start">
          <h2 className="mb-4 text-[40px] font-bold">
            <span className="text-secondary-100">Connect </span>
            <span className="text-primary-100">and </span>
            <span className="text-secondary-100">Communicate </span>
            <span className="text-primary-100">Seamlessly</span>
          </h2>
          <p className="mb-4 text-lg">
            Build friendships with other users and exchange messages via
            channels.
          </p>
          <p className="mb-4 text-lg">
            Enjoy a hassle-free messaging experience and stay connected with
            your friends, all within our Application.
          </p>
          <p className="text-lg">
            Your social circle and conversations are just a click away. Start
            connecting and messaging today!
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="stroke-secondary-100 h-40 w-40"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default FriendSection;
