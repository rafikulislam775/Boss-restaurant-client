import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useCart = () => {
    const {user}=useAuth()
  const axiosUse = useAxios();
  const { refetch, data: cart = {} } = useQuery({
    queryKey: ["cart",user?.email],
    queryFn: async () => {
      const res = await axiosUse.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });
  return { cart ,refetch};
};

export default useCart;
