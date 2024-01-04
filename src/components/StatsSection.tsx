import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";

const StatsSection = () => {
  const [amountOfUsers, setAmountOfUsers] = useState(0);
  const [amountOfFriendships, setAmountOfFriendships] = useState(0);
  const [amountOfMessages, setAmountOfMessages] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API_URL}/api/statistics`,
      );
      const data = await response.json();
      const results = data.results;
      setAmountOfUsers(results.total_users);
      setAmountOfFriendships(results.total_friendships);
      setAmountOfMessages(results.total_messages);
    };

    fetchStats();
  }, []);

  return (
    <section className="flex h-fit flex-col justify-center space-y-24 bg-neutral-100 py-36">
      <div className="container flex flex-row items-center justify-between px-80">
        <div className="flex flex-col space-y-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.0}
            stroke="currentColor"
            className="h-40 w-40 stroke-secondary-100"
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
            className="h-40 w-40 stroke-secondary-100"
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
            Join the conversation, share your interests, and be part of
            something special.
          </p>
          <p className="text-lg">Your journey begins here.</p>
        </div>
      </div>
      <div className="container flex flex-row justify-between px-20">
        <Card className="w-[350px] rounded-2xl p-6 shadow-xl duration-300 hover:-translate-y-2">
          <CardHeader>
            <div className="flex flex-col items-center justify-center text-center text-[35px] text-secondary-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="stroker-secondary-100 h-24 w-24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <div className="text-[35px] font-semibold">Users</div>
            </div>
          </CardHeader>
          <Separator className="bg-primary-100" />
          <CardContent className="w-full text-center text-[100px] text-primary-100">
            {amountOfUsers}
          </CardContent>
        </Card>
        <Card className="w-[350px] rounded-2xl p-6 shadow-xl duration-300 hover:-translate-y-2">
          <CardHeader>
            <div className="flex flex-col items-center justify-center text-center text-[35px] text-secondary-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="stroker-secondary-100 h-24 w-24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
              <div className="text-[35px] font-semibold">Friendships</div>
            </div>
          </CardHeader>
          <Separator className="bg-primary-100" />
          <CardContent className="w-full text-center text-[100px] text-primary-100">
            {amountOfFriendships}
          </CardContent>
        </Card>
        <Card className="w-[350px] rounded-2xl p-6 shadow-xl duration-300 hover:-translate-y-2">
          <CardHeader>
            <div className="flex flex-col items-center justify-center text-center text-[35px] text-secondary-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="stroker-secondary-100 h-24 w-24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
              <div className="text-[35px] font-semibold">Messages</div>
            </div>
          </CardHeader>
          <Separator className="bg-primary-100" />
          <CardContent className="w-full text-center text-[100px] text-primary-100">
            {amountOfMessages}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default StatsSection;
