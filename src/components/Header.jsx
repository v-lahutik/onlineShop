import React, { useContext } from "react";
import NotifBar from "./NotifBar";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import banner from "../assets/banner.jpg";

function Header() {
  return (
    <header className="">
      <section className="header-top flex justify-between px-12 py-3 item-center bg-gray-300 text-gray-600">
        <span className="logo flex gap-1">
          <Icon icon="fxemoji:mansshirt" className="text-2xl" />
          <span>Shopify</span>
        </span>
        <span className="search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search here..."
            className="bg-transparent border border-gray-100 rounded py-1 px-2 placeholder-text-sm"
          />
        </span>
        <NotifBar />
      </section>

      <section className="header-bottom px-12 py-3 flex justify-between items-center bg-gray-50">
        <nav>
          <ul className="flex gap-3 text-gray-500">
            <li className="text-sm hover:text-gray-900">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-sm hover:text-gray-900">
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li className="text-sm hover:text-gray-900">
              <NavLink to="/products">Product</NavLink>
            </li>
            <li className="text-sm hover:text-gray-900">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="text-sm hover:text-gray-900">
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>

        <span className="contact text-sm text-gray-400">
          Contact:
          <span className="text-gray-700 tracking-tight">
            {" "}
            (+49) 123 456 789
          </span>
        </span>
      </section>

      <section className="banner">
        <img src={banner} alt="banner" />
      </section>

      <section className="links bg-gray-200 text-gray-500 flex justify-between px-10 py-4 rounded-xl w-11/12 md:w-9/12 lg:w-8/12 xl:w-5/12 m-auto relative -top-16 flex-col gap-y-5 items-center sm:flex-row">
        <NavLink to="/discounts" className="hover:text-teal-400">
          <div className="discount flex items-center gap-2">
            <Icon icon="ic:baseline-discount" className="text-4xl" />
            <span>
              <p className="text-sm">Discount</p>
              <p className="text-xs">Every week new sales</p>
            </span>
          </div>
        </NavLink>

        <NavLink to="/delivery" className="hover:text-teal-400">
          <div className="discount flex items-center gap-2">
            <Icon icon="ph:truck" className="text-4xl" />
            <span>
              <p className="text-sm">Free Delivery</p>
              <p className="text-xs">100% Free for all orders</p>
            </span>
          </div>
        </NavLink>

        <NavLink to="/customer" className="hover:text-teal-400">
          <div className="discount flex items-center gap-2">
            <Icon icon="ri:customer-service-line" className="text-4xl" />
            <span>
              <p className="text-sm">Customer Service</p>
              <p className="text-xs">Every week new sales</p>
            </span>
          </div>
        </NavLink>
      </section>
    </header>
  );
}

export default Header;
