import middleBannerImg from "../../../assets/home/chef-service.jpg";
const MiddleBanner = () => {
  return (
    <div>
      <div
        className="hero min-h-[572px]  bg-fixed"
        style={{
          backgroundImage: `url(${middleBannerImg})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" h-[334px] w-3/4  flex justify-center items-center bg-black  bg-opacity-60  text-white">
            <div className=" p-52">
              <h1 className="mb-5 text-5xl font-bold">Boss Restaurant</h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, libero accusamus laborum deserunt ratione dolor
                officiis praesentium! Deserunt magni aperiam dolor eius dolore
                at, nihil iusto ducimus incidunt quibusdam nemo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleBanner;
