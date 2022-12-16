function Banner() {
  return (
    <div className="flex flex-col justify-between px-10 py-5 mb-10 font-bold lg:flex-row lg:space-x-5">
      <div>
        <h1 className="capitalize text-7xl">Manav&apos;s Daily Blog</h1>
        <h2 className="mt-5">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-brand">
            Every Developers
          </span>{" "}
          favorite blog in the blog chain.
        </h2>
      </div>
      <p className="max-w-sm mt-5 text-gray-400 md:mt-2">
        New product features | The latest in technology | The weekly debugging
        nightmares & more!
      </p>
    </div>
  );
}

export default Banner;
