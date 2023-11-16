import { MdOutlineRestoreFromTrash } from "react-icons/md";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";

const Cart = () => {
  const { cart, refetch, isLoading } = useCart();
  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  const totalPrice = cart?.reduce((total, item) => total + item.price, 0);
  const axiosUse = useAxios();
  //delete function
  const handleDelete = (id) => {
    console.log(typeof id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosUse.delete(`carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div>
        <h1 className="text-4xl">items: {cart?.length}</h1>
        <h1 className="text-4xl">Total Price: {totalPrice || ""}</h1>
        <button className="btn-sm btn  btn-outline ">Pay</button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Prices</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item, index) => (
                <tr key={item._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="font-bold">{item.name}</div>
                  </td>
                  <td>$ {item.price}</td>
                  <th>
                    <button
                      className="btn"
                      onClick={() => handleDelete(item._id)}
                    >
                      <MdOutlineRestoreFromTrash className="text-red-800 text-lg"></MdOutlineRestoreFromTrash>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
