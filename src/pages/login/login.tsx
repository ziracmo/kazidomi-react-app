const Login = () => (
  <section className="text-gray-600 body-font">
    <div className="image-container container px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
      <style jsx>{`
        .image-container {
          background: url('https://cdn.pixabay.com/photo/2017/08/19/19/43/nature-2659682_1280.jpg');
        }
      `}</style>
      <div className="lg:w-3/5 lg:pr-0 pr-0">
        <h1 className="title-font font-bold text-5xl text-white">
          Slow-carb next level shoindcgoitch ethical authentic, poko scenester
        </h1>
        <p className="leading-relaxed mt-4 text-white">
          Poke slow-carb mixtape knausgaard, typewriter street art gentrify
          hammock starladder roathse. Craies vegan tousled etsy austin.
        </p>
      </div>
      <div className="lg:w-2/6 xl:w-2/5 md:w-2/3 bg-gray-100 rounded-lg p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Sign Up
        </h2>
        <div className="relative mb-4">
          <label
            htmlFor="full-name"
            className="leading-7 text-sm text-gray-600"
          >
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            name="full-name"
            className="w-full bg-white rounded border border-gray-300 focus:border-green-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></input>
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-green-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></input>
        </div>
        <button className="text-white bg-green-400 border-0 py-2 px-8 focus:outline-none hover:green-600 rounded text-lg">
          Button
        </button>
      </div>
    </div>
  </section>
);

export default Login;
