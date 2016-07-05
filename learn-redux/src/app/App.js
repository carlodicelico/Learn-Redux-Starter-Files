import React from 'react';
import { Link } from 'react-router';


const App = (props) => {
  console.info('this ->', this);
  console.info('props ->', props);
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
