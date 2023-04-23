import React from "react";
import queryClient from "../../QueryClient";
import { useSearchParams } from "react-router-dom";

const CategoriesList = () => {
  const { data, status } = queryClient.getQueryState("categories");
  const [searchParams, setSearchParams] = useSearchParams();
  const activeItem = searchParams.get("category");

  return (
    <div className="overflow-y-auto shadow-md bg-white bg-opacity-90 rounded p-2 flex-1 grid place-items-center">
      <ul className="list-disc list-none">
        {status === "success" ? (
          data?.data.map((item, key) => (
            <li
              onClick={() => setSearchParams({ category: item })}
              className={`text-gray-500 hover:text-black cursor-pointer ${
                item === activeItem && "text-indigo-500"
              }`}
              key={key}
            >
              {item}
            </li>
          ))
        ) : (
          <>
            <li className="w-36 mb-2">
              <div className="animate-pulse">
                <div className="h-4 bg-slate-200 rounded"></div>
              </div>
            </li>
            <li className="w-36 mb-2">
              <div className="animate-pulse">
                <div className="h-4 bg-slate-200 rounded"></div>
              </div>
            </li>
            <li className="w-36 mb-2">
              <div className="animate-pulse">
                <div className="h-4 bg-slate-200 rounded"></div>
              </div>
            </li>
            <li className="w-36 mb-2">
              <div className="animate-pulse">
                <div className="h-4 bg-slate-200 rounded"></div>
              </div>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default CategoriesList;
