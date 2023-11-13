import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="flex-center flex w-full flex-col">
      <h1 className="head_text text-center">
        Find Your Favourite
        <br className="max-md:hidden" />
        <span className="primary_gradient text-center">AI-Powered Prompt</span>
      </h1>
      <p className="desc text-center">
        Prompto is a modern open-source AI prompting tool for all AI fans around
        the world to search, create and share creative prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
