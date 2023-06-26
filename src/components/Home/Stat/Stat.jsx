import React from "react";

const Stat = () => {
  return (
    <div className="md:flex gap-10 my-10 border-dashed md:border-2 p-10">
      <div className="flex gap-5 md:px-5 md:mx-8">
        <div className="stat-figure text-primary pl-5 mt-7">
          <img className="h-20"
            src="https://druco-be87.kxcdn.com/druco/wp-content/uploads/2022/10/icon-1-yellow.png"
          />
        </div>
        <div className="mt-10 md:pr-5">
          <div className="">Best quality</div>
          <div className="">Best quality is a must at organic</div>
        </div>
      </div>

      <div className="flex gap-5 md:px-5 md:mx-8">
        <div className="stat-figure text-primary pl-5 mt-7">
          <img className="h-20"
            src="https://druco-be87.kxcdn.com/druco/wp-content/uploads/2022/10/icon-2-yellow.png"
          />
        </div>
        <div className="mt-10 pr-5">
          <div className="">Shipping</div>
          <div className="">Deliver within 24 hours</div>
        </div>
      </div>

      <div className="flex gap-5 md:px-5 md:mx-8">
        <div className="stat-figure text-primary pl-5 mt-7">
          <img className="h-20"
            src="https://druco-be87.kxcdn.com/druco/wp-content/uploads/2022/10/icon-3-yellow.png"
          />
        </div>
        <div className="mt-10 pr-5">
          <div className="">Support 24/7</div>
          <div className="">Contact us 24 hours a day</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
