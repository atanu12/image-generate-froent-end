import Link from "next/link";
import React from "react";
const Home = () => {
  return (
    <>
      <div className="text-3xl text-center">Hello Home</div>
      <button className="rounded-full border-2 border-rose-500 bg-red-900 p-3 text-white">
        <Link href="/searchimage">Generate Image</Link>
      </button>
    </>
  );
};

export default Home;
