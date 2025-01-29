import { FaSearch } from "react-icons/fa"

export default function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="ابحث عن درس..."
        className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  )
}

