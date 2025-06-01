import LogoutButton from "./SignOut";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col justify-between">
      <div className="p-4">
        <h3 className="text-lg font-bold mb-4">Navigation</h3>
        <ul className="">
          <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer">
            Home
          </li>
          <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer">
            Your Links
          </li>
          <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer">
            Products
          </li>
          <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer">
            Blog
          </li>
          <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer">
            Contact
          </li>
        </ul>
      </div>

      <div className="p-4 border-t border-gray-700">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
