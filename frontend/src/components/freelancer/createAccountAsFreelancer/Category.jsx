7;

const Category = () => {
  return (
    <section className="h-auto">
      <div className="flex flex-col w-full px-0 sm:px-20">
        <div className="">
          <h1 className="text-3xl ">
            Great, so what kind of work are you here to do?
          </h1>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col w-1/4 ">
            <h3 className="text-gray-500">Select category</h3>
            <select
              className="w-1/2 text-black bg-white border rounded-md"
              name="category"
              id="category"
            >
              <option value="web">Web Development</option>
              <option value="mobile">Mobile Development</option>
            </select>
          </div>
          <div className="w-3/4">
            <h3 className="text-gray-500 text-start">
              Now, select 1 to 3 specialities
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
