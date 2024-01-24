import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center py-2 gap-5 bg-slate-100">
        <Link to="/">
          <li className="hover:bg-black hover:text-white rounded-lg p-1"> Home</li>
        </Link>
        <Link to="/videos">
          <li className="hover:bg-black hover:text-white rounded-lg p-1"> Videos</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
