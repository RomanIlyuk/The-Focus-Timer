import NavBar from "./NavBar";

function MainLayout({ children }) {
  return (
    <div className="bg-slate-950 min-h-screen">
      <NavBar />

      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
