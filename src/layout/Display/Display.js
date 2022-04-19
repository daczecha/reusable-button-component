import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import './Display.style.css';

export default function Display({ setSelectedComponent }) {
  let { component } = useParams();
  //eslint-disable-next-line
  useEffect(() => setSelectedComponent(component), [component]);

  return <div>{component}</div>;
}
