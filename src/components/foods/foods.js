import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import FoodItem from "./fooditem";
import Skeleton from "./skeleton";

const Foods = () => {
  const [loading, setLoading] = useState(false);
  const [foods] = useFetch();

  //loading
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="max-w-screen-xl px-6 mx-auto my-12">
      {/* all foods  */}
      <div className="grid grid-cols-1 gap-10 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {foods.map((item) =>
          loading ? (
            <Skeleton key={item.id} />
          ) : (
            <FoodItem key={item.id} {...item} />
          )
        )}
      </div>
    </section>
  );
};

export default Foods;
