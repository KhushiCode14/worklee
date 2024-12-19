import Cards from "./Card";

const Third = () => {
  return (
    <div>
      <div className="flex gap-3 p-5">
        <div className="flex flex-col gap-2 text-nowrap">
          <h1 className="text-xl text-nowrap">Project Catalog</h1>
          <h3 className="text-wrap">
            Browser and buy product that have a clear scope and price
          </h3>
          <a href="#" className="text-green-600">
            Browser Project Catalog
          </a>
        </div>
        <div className="p-5 ">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Third;
