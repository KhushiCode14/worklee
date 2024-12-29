13;

const FreelancerDescription = () => {
  return (
    <section className="w-full md:w-1/2 ">
      <div className="">
        <h1 className="mb-8 text-3xl text-white dark:text-black ">
          Great, Now write a bio to tell the world about yourself
        </h1>
      </div>
      <div>
        <textarea
          name="description"
          id="description"
          cols={60}
          className="flex flex-wrap w-full p-2 mb-4 text-gray-500 bg-gray-100 border-2 border-gray-200 focus:outline-none focus:border-green-500"
          rows={10}
        ></textarea>
      </div>
    </section>
  );
};

export default FreelancerDescription;
