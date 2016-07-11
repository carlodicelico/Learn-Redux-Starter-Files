import React from 'react';

import { Link } from 'react-router';


const App = (props) => {
  return (
    <div>
      <h1>
        <Link to="/">Appstar!</Link>
      </h1>
      {React.cloneElement(props.children, { ...props })}
    </div>
  );
};

export default App;
