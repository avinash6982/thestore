import React from "react";

//TODO: Complete cart
const Cart = () => {
  return (
    <div className="overflow-y-auto shadow-md bg-white bg-opacity-90 rounded p-2 flex-1 grid place-items-center">
      <ul className="list-disc list-none">
        <li
          className={`text-gray-500 hover:text-black cursor-pointer text-indigo-500`}
        >
          Cart
        </li>
        <li className="w-36 mb-2">
          <div className="animate-pulse">
            <div className="h-4 bg-slate-200 rounded"></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
