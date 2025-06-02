import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./SignOut";

const Sidebar = ({
  isOpen,
  setIsOpen,
  isMobile,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isMobile: boolean;
}) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger menu */}
      <button
        className="md:hidden p-4 text-gray-800 fixed top-4 left-4"
        onClick={toggleSidebar}
      >
        <Image src="/menuButton.svg" alt="Menu Button" width={24} height={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white flex flex-col justify-between transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        {/* Close Button */}
        <button
          className={`absolute top-4 right-4 text-white ${
            isOpen && isMobile ? "block" : "hidden"
          }`}
          onClick={toggleSidebar}
        >
          <Image
            src="/closeButton.svg"
            alt="Close Button"
            width={24}
            height={24}
          />
        </button>

        <div className="p-4">
          <h3 className="text-lg font-bold mb-4">Navigation</h3>
          <ul className="flex flex-col">
            <Link
              className="hover:bg-gray-700 p-2 rounded-md cursor-pointer"
              href="/dashboard"
            >
              Home
            </Link>
            <Link
              className="hover:bg-gray-700 p-2 rounded-md cursor-pointer"
              href="/dashboard/userlinks"
            >
              Your Links
            </Link>
            <Link
              className="hover:bg-gray-700 p-2 rounded-md cursor-pointer"
              href="/dashboard/createlink"
            >
              Create Link
            </Link>
            <Link
              className="hover:bg-gray-700 p-2 rounded-md cursor-pointer"
              href="/dashboard/blog"
            >
              Blog
            </Link>
            <Link
              className="hover:bg-gray-700 p-2 rounded-md cursor-pointer"
              href="/dashboard/analytics"
            >
              Analytics
            </Link>
          </ul>
        </div>

        <div className="p-4 border-t border-gray-700">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
