import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import useCart from "../../Hooks/useCart";
// import axios from "axios";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const axioUse = useAxios();
  const location = useLocation();
  const navigate = useNavigate();
  //refetch =  load korb  jeheto 1st data not needed and , use korte hove
  const { refetch } = useCart();
  const handleAddToCart = () => {
    if (user && user.email) {
      //to do
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      // axios.post("http://localhost:5001/carts", cartItem).then((res) => {
      axioUse.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: `${name} added successfully`,
            icon: "success",
          });
          //refetch the data for instant data loaded
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: " You are not Logged in",
        text: "Plz login to add the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,login",
      }).then((result) => {
        if (result.isConfirmed) {
          // return <Navigate state={location.pathname} to="/login"></Navigate>;
          navigate(location?.state ? location?.state : "/login");
        }
      });
    }
    // console.log(foot, user.email);
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} />
        </figure>
        <p className="absolute right-0 px-4 mt-4 mr-4 rounded-md bg-slate-900 text-white">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title text-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={handleAddToCart} className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
