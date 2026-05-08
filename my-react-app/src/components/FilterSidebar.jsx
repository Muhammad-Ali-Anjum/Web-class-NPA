import React from "react";

function FilterSidebar({
  search,
  setSearch,
  category,
  setCategory,
  categories,
  maxPrice,
  setMaxPrice,
}) {
  return (
    <aside className="w-[300px] bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 sticky top-0 h-screen">
      
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">
          Shop<span className="text-cyan-400">NPA</span>
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          Modern Ecommerce UI
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <label className="text-sm text-gray-300 mb-2 block">
          Search
        </label>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white/10 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-cyan-400"
        />
      </div>

      {/* Category */}
      <div className="mb-6">
        <label className="text-sm text-gray-300 mb-2 block">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full bg-white/10 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-cyan-400"
        >
          {categories.map((cat, index) => (
            <option
              key={index}
              value={cat}
              className="bg-slate-900"
            >
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Price */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <label className="text-sm text-gray-300">
            Max Price
          </label>

          <span className="text-cyan-400">
            ${maxPrice}
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="3000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full accent-cyan-400"
        />
      </div>

      {/* Button */}
      <button
        onClick={() => {
          setSearch("");
          setCategory("All");
          setMaxPrice(3000);
        }}
        className="w-full bg-cyan-400 text-black py-3 rounded-2xl font-semibold hover:bg-cyan-300 transition-all"
      >
        Reset Filters
      </button>
    </aside>
  );
}

export default FilterSidebar;