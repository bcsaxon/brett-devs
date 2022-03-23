function Contact() {
  return (
    <div
      id="site-wrapper"
      className="flex flex-wrap items-center justify-center w-screen p-8 site-wrapper"
    >
      <div className="w-3/4 p-10 text-center border-2 border-gray-400 shadow-lg sm:w-1/3 rounded-3xl">
        <h1 className="mb-5">Contacting Me</h1>
        <p className="mb-1">brettcsaxon@gmail.com</p>
        <a
          className="block mb-1"
          rel="noopener noreferrer nofollow"
          target="_blank"
          href="https://www.linkedin.com/in/brettsaxon/"
        >
          LinkedIn
        </a>
        <a
          rel="noopener noreferrer nofollow"
          target="_blank"
          href="https://github.com/bcsaxon"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Contact;
