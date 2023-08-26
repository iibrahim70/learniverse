import Link from "next/link";

const Navbar = () => {
  const navItems = (
    <div className="flex flex-col lg:block lg:space-x-5 text-base font-medium">
      <Link href="">Home</Link>
      <Link href="">Courses</Link>
      <Link href="">Blogs</Link>
      <Link href="">Team</Link>
      <Link href="">Contact Us</Link>
    </div>
  );
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="shadow-xl">
            <div className="navbar p-0 w-[90%] mx-auto">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 text-xl font-medium">Learniverse</div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">{navItems}</ul>
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-slate-900 text-white space-y-2">
            {navItems}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
