import featureLogo from "../assets/star-feature.png";

const UpcomingServerFeatureSection = () => {
  return (
    <section className="flex h-[600px] justify-center bg-gray-100">
      <div className="container flex flex-row items-center justify-between px-80">
        <img src={featureLogo} className="h-[200px] w-[200px]" />
        <div className="w-[500px] text-start">
          <h2 className="mb-4 text-[40px] font-bold">
            <span className="text-secondary-100">Exciting </span>
            <span className="text-primary-100">Upcoming </span>
            <span className="text-secondary-100">Feature: </span>
            <span className="text-primary-100">Servers </span>
            <span className="text-secondary-100">with </span>
            <span className="text-primary-100">Dedicated </span>
            <span className="text-secondary-100">Channels</span>
          </h2>
          <p className="mb-4 text-lg text-gray-700">
            Get ready for a whole new level of community engagement! Our
            upcoming server feature introduces multiple message and voice
            channels, allowing you to create a dedicated space for your hobbies,
            school, and more.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Whether you're passionate about gaming, learning, or connecting with
            like-minded individuals, our servers empower you to build a
            community tailored to your interests.
          </p>
          <p className="text-lg text-gray-700">
            Explore the possibilities, share your passions, and create lasting
            connections within your dedicated server on Shaden.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpcomingServerFeatureSection;
