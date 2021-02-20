import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <ul>
          <Link to="/popular" className="active">Popular</Link>
          <Link to="/hot">Hot</Link>
          <Link to="/rising">Rising</Link>
          <Link to="/controversial">Controversial</Link>
          <Link to="/top">Top</Link>
          <Link to="/gilded">Gilded</Link>
        </ul>
      </div>

      <div className="header__right">

        <i className="fas fa-bell"></i>
        <img
          src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg"
        />
        
        <div className="header__user">

            <span>Amir Vhora</span>
            <i className="fas fa-caret-down"></i>
        </div>

      </div>
    </div>
  );
}

export default Header;
