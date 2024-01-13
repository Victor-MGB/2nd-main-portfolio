import React from "react";

export default function Work({ title, desc, tags, link, code, img }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-secondary">
      <div className="bg-gradient-to-r from-green-700 to-pink-800 p-4 flex flex-col justify-between h-full">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-48 object-cover border-b-2 border-secondary"
          />
          <div className="absolute inset-0 flex justify-end m-2 space-x-2">
            <div
              onClick={() => window.open(link, "_blank")}
              className="bg-slate-800 w-9 h-9 rounded-full border border-secondary flex items-center justify-center cursor-pointer"
            >
              <img
                src={require("../../assets/images/gotosite.webp")}
                alt="gotosite"
                className="w-4/5 h-4/5 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(code, "_blank")}
              className="bg-slate-800 w-9 h-9 rounded-full border border-secondary flex items-center justify-center cursor-pointer"
            >
              <img
                src={require("../../assets/images/github.webp")}
                alt="github"
                className="w-3/5 h-3/5 lg:w-4/5 lg:h-4/5 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-white font-bold text-lg lg:text-xl">{title}</h3>
          <p className="mt-2 text-secondary text-sm lg:text-base">{desc}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-sm lg:text-base">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`font-medium text-${tag.color} py-0.5 px-1 bg-slate-800 rounded-sm shadow`}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
