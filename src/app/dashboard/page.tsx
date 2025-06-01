import Sidebar from "./components/Sidebar";

export default function Dashbaord() {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <div className="flex justify-center items-start w-full">
        <h1 className="text-4xl">Hello Burak</h1>
      </div>
    </div>
  );
}
