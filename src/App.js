import "./App.css";
// import Header from "../src/components/Header";
function App() {
  return (
    <div className="font-ttnorms">
      {/* <Header /> */}
      <div
        id="site-wrapper"
        className="flex flex-wrap items-center justify-center w-screen h-screen site-wrapper"
      >
        <div className="w-2/4 p-10 text-center border-2 border-gray-400 shadow-lg rounded-3xl h-3/4">
          {/* <div className="w-3/4 "> */}
          <h1>
            Hey There! If you're here you're probably looking for my portfolio!
            and I'm probably working on a freelance project or side gig or maybe
            I'm outside, catching a concert, or checking the latest bar that
            opened in the neighborhood...
          </h1>
          <br />
          <p>This site made with React and Tailwind </p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
