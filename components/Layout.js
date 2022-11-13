import Meta from "./Meta";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Meta />

      <Navbar />
      <main className="mt-5">{children}</main>
    </>
  );
}
