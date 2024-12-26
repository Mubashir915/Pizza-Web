"use client"
import React from "react";

export default function OrderSection() {
  return (
    <section>
      <div className="items-center text-center bg-black mx-auto px-4 lg:px-8 py-8 ">
        <h1 className="border-white text-white font-serif lg:text-5xl md:text-5xl text-4xl">
          Login
        </h1>
        <form className=" max-w-2xl mx-auto p-4 sm:p-6 md:p-8 bg-transparent text-left rounded-lg border-2  border-gray-500 border-r-2">
        <div className="grid grid-cols-1">
        <div className="flex flex-col spgap-2ace-y-4 md:space-y-6">
              {/* For email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold  text-white ">
                  Email
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your email"
                  className="box text-slate-500 mt-1 p-2 sm:p-3 border-l-2 border-b-2 border-gray-500 bg-transparent rounded w-full focus:bg-slate-200 focus:text-black" />
              </div>

                {/* For passward */}
              <div>
                <label
                  htmlFor="passward"
                  className="block text-sm font-medium text-white"
                >
                  Passward
                </label>
                <input
                  type="text"
                  id="passward"
                  placeholder="Enter your passward"
                  className="box text-slate-500 mt-1 p-2 sm:p-3 rounded border-l-2 border-b-2 border-gray-500 bg-transparent w-full focus:bg-slate-200 focus:text-black"
                />

              </div>
              <button type="submit" 
              className="btn w-full p-2 sm:p-3 text-black font-bold rounded border-l-4 border-r-4 border-black bg-orange-500 transition-colors hover:bg-gray-800 hover:text-white"
              >Login</button>
            </div>

              </div>

        </form>
      </div>
    </section>
  );
}
