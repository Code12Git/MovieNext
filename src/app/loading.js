import React from "react";
import Image from "next/image";
const loading = () => {
  return (
    <div className="w-screen h-screen m-auto mt-52 ml-52">
      <Image
        src="/loading.gif"
        className="bg-slate-400 "
        width={100}
        height={100}
        alt="loading"
      />
    </div>
  );
};

export default loading;
