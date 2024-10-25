const Navbar = () => {
    return (
        <div>
<div className="navbar bg-base-100">
   <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-green-600 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold">
        <li><a>Home</a></li>
        <li><a>Fixture</a></li>
        <li><a>Team</a></li>
        <li><a>Schedule</a></li>
      </ul>
    </div>
    <a className="w-12"><img src="./src/assets/logo.png" alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex lg:relative lg:left-72">
    <ul className="menu menu-horizontal font-bold">
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn font-bold">$ Coin</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;