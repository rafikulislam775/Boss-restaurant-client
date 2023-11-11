const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} />
          
        </figure>
        <p className= "absolute right-0 px-4 mt-4 mr-4 rounded-md bg-slate-900 text-white">${price}</p>
        <div className="card-body">
          <h2 className="card-title text-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
