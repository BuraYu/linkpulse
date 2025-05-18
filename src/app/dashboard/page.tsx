import LogoutButton from "./components/SignOut";

export default function Dashbaord() {
  const submittedLinks: number = 5;

  return (
    <div>
      <h1>Hello Burak</h1>
      <LogoutButton />
      <p>Total submitted link: {submittedLinks}</p>
    </div>
  );
}
