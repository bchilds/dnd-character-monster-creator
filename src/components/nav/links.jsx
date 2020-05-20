import React from 'react';
import { Link } from 'react-router-dom';

// TODO -- styles and classnames for divs

const Links = () => (
  <>
    <Link to="/" className="navbar-brand">
      Character Management
    </Link>
    <div>
      <div>
        <div>
          <Link to="/characters/div" className="nav-link">
            List Characters
          </Link>
        </div>
        <div>
          <Link to="/characters/create" className="nav-link">
            Create Character
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default Links;