// import NavBar from "./NavBar";
import Navbar2 from "./Navbar";

function MainLayout({ children }) {
  return (
    <div className="bg-slate-950 min-h-screen">
      {/* <NavBar /> */}
      <Navbar2 />

      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
