import React from 'react'
import Child from '../app/Child';

const Parent=()=> {
  return (
    <div>
      <p>Parent</p>
      <Child firstname="John" lastname="Doe"/>
      <Child/>
    </div>
  );
};

export default Parent;
