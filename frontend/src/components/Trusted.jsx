const Trusted = () => {
  return (
    <div className="flex flex-col gap-3 max-md:text-wrap">
      <h3 className="text-2xl text-gray-700 md:text-4xl ">Trusted by</h3>
      <div className="flex flex-wrap w-full gap-5 md:flex-row">
        <img src="/microsoft.svg" className=" md:h-10" alt="" />
        <img src="/airbnb.svg" alt="" className="md:h-10" />
        <img src="/bissell.svg" alt="" className=" md:h-10" />
      </div>
    </div>
  );
};

export default Trusted;
