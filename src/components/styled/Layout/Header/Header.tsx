import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="bg-orange-400 py-5">
      <div className="flex justify-between mx-8">
        <h1 className="text-white p-2">TODO APP</h1>
        <div className="p-2">
          <Link
            href="/newadd"
            className="bg-orange-900 text-white border-2 mx-2 px-5 py-2 rounded cursor-pointer hover:bg-orange-600"
          >
            +NEW ADD
          </Link>
          <Link
            href="/"
            className="bg-orange-900 text-white border-2 mx-2 px-5 py-2 rounded cursor-pointer hover:bg-orange-600"
          >
            LOGIN
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
