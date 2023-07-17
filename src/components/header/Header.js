import React, { useState } from "react";
import "./header.css";
import Navbar from "../navbar/Navbar";
import Corousel from "../corousel/Corousel";
import img1 from "../../assets/images/corousel1.png";
import Selection from "../selection/Selection";
import SearchPage from "../../container/searchPage/SearchPage";
// import other components

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      

      {searchQuery ? <SearchPage query={searchQuery} /> : <div className="landingPage">
      <div className="navbar__corousels section">
        <Corousel
          src={img1}
          heading="Subscribe to the best of Udemy"
          text="With Personal Plan, you get access to 8,000 of our top-rated courses in tech, business, and more."
        />
        <Selection />
      </div>
    </div>}
    </div>
  );
}

export default Header;
