function Home() {
  return (
    <>
      <div
        id="site-wrapper"
        className="flex flex-wrap items-center justify-center w-screen p-8 site-wrapper"
      >
        <div className="w-3/4 p-10 text-center border-2 border-gray-400 shadow-lg sm:w-1/3 rounded-3xl">
          <h1 className="mb-10">
            Hey There! You're probably looking for my portfolio. I appreciate
            you stopping by, but I'm probably working on a freelance project or
            a side gig or I could be outside getting some sun, catching a
            concert, making some music, or checking the latest bar that opened
            in the neighborhood... you get the idea... 
          </h1>
          <p>
            This site made with React, Tailwind, and deployed on Netlify.{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
