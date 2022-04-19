import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.style.css';

export default function Navigation({ selectedComponent }) {
  const componentsArray = ['button', 'input'];

  const renderComponentList = () => {
    return componentsArray.map((componentListItem) => (
      <li className="Item" key={componentListItem}>
        <Link
          className={`Link ${
            selectedComponent === componentListItem && 'selected'
          }`}
          to={componentListItem}
        >
          {capitalizeFirstLetter(componentListItem)}
        </Link>
      </li>
    ));
  };

  return (
    <div className="Navigation">
      <h4 id="Navigation-Title">
        <span>Reusable</span>components
      </h4>
      <ul id="Navigation-List">{renderComponentList()}</ul>
    </div>
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
