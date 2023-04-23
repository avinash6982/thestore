import React, { useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

import ItemCardSkeleton from "../../components/Skeleton/ItemCardSkeleton";
import ItemCard from "../../components/Cards/ItemCard";
import { getRequest } from "../../api/requests";
import { API } from "../../api/endpoints";

const Home = () => {
  const scrollRef = useRef();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const { data, isSuccess } = useQuery(["items", category || "all"], () =>
    !category
      ? getRequest(API.PRODUCTS)
      : getRequest(API.CATEGORY + `/${category}`)
  );

  useEffect(() => {
    scrollRef.current.scrollTo({
      behavior: "smooth",
      left: 0,
      top: 0,
    });
  }, [category]);

  return (
    <div
      ref={scrollRef}
      style={{ height: "calc(100vh - 72px)" }}
      className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 overflow-y-auto"
    >
      {isSuccess && data?.data?.length > 0 ? (
        data?.data.map((itemDetails, key) => (
          <div key={key}>
            <ItemCard {...itemDetails} />
          </div>
        ))
      ) : (
        <>
          <div>
            <ItemCardSkeleton />
          </div>
          <div>
            <ItemCardSkeleton />
          </div>
          <div>
            <ItemCardSkeleton />
          </div>
          <div>
            <ItemCardSkeleton />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
