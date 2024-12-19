const Header = () => {
  return (
    <div className="bg-white border-b border-gray-200 max-md:hidden">
      <div className="px-5 pt-2 mx-auto max-w-8xl">
        <ul className="flex items-center h-12 gap-6 overflow-x-auto text-black whitespace-nowrap">
          <li className="transition-all hover:underline hover:underline-green-500 hover:text-green-600">
            <a href="/">Development and it</a>
          </li>
          <li className="transition-all hover:underline hover:underline-green-500 hover:text-green-600">
            <a href="/">Development and it</a>
          </li>
          <li className="hover:underline hover:underline-green-500 hover:text-green-600">
            <a href="/">Development and it</a>
          </li>
          <li className="transition-all hover:underline hover:underline-green-500 hover:text-green-600">
            <a href="/">Development and it</a>
          </li>
          <li className="transition-all hover:underline hover:underline-green-500 hover:text-green-600">
            <a href="/">Ai</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
