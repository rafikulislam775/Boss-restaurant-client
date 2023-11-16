import {
  MdOutlineBook,
  MdOutlineBookOnline,
  MdOutlineCalendarMonth,
  MdOutlineHome,
  MdOutlineMenu,
  MdOutlineMenuBook,
  MdOutlineReviews,
  MdOutlineShop2,
  MdOutlineShoppingBag,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const Dashboard = () => {
  const { cart } = useCart();
  return (
    <div className="flex">
      <div className="w-64 h-screen bg-orange-400">
        <ul className="menu text-white">
          <li className="bg-black rounded-lg">
            <NavLink to="/dashboard/home">
              <MdOutlineHome />
              User Home
            </NavLink>
          </li>
          <li className="bg-black rounded-lg my-4">
            <NavLink to="/dashboard/cart">
              <MdOutlineShoppingCart />
              My cart({cart.length})
            </NavLink>
          </li>
          <li className="bg-black rounded-lg">
            <NavLink to="/dashboard/reservation">
              <MdOutlineCalendarMonth />
              Reservation
            </NavLink>
          </li>

          <li className="bg-black rounded-lg my-4">
            <NavLink to="/dashboard/review">
              <MdOutlineReviews />
              Add a Review
            </NavLink>
          </li>
          <li className="bg-black rounded-lg">
            <NavLink to="/dashboard/review">
              <MdOutlineBook />
              My Booking
            </NavLink>
          </li>
          <div className="divider border-b"></div>
          <li className="bg-black rounded-lg">
            <NavLink to="/">
              <MdOutlineBook />
              Home
            </NavLink>
          </li>
          <li className="bg-black rounded-lg">
            <NavLink to="/">
              <MdOutlineMenu />
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
