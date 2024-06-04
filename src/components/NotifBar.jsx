import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import { myContext } from "../context/ContextComponent";

function NotifBar() {
  const { username, state } = useContext(myContext);

  return (
    <div className="flex gap-3">
      <span className="cart flex gap-1">
        <Icon
          icon="mdi:cart-outline"
          style={{ color: "#3c3e3e" }}
          className="text-2xl"
        />
        <span>cart</span>
        <span className="cart-num bg-green-500 rounded-full size-6 text-gray-100 text-sm flex justify-center items-center">
          {state.items.length}
        </span>
      </span>
      <span className="notif">
        <Icon
          icon="mdi:heart-outline"
          className="text-2xl"
          style={{ color: "#3c3e3e" }}
        />
      </span>
      <span className="user">
        {username ? (
          username
        ) : (
          <Icon
            icon="solar:user-linear"
            className="text-2xl"
            style={{ color: "#3c3e3e" }}
          />
        )}
      </span>
    </div>
  );
}

export default NotifBar;
