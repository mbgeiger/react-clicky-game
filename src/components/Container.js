import React from 'react';
import '../App.css';

const Container = props => (
    // loops through
    <div
      className={
        props.shake
          ? 'container d-flex flex-wrap justify-content-center shake'
          : 'container d-flex flex-wrap justify-content-center'
      }
    >
     
    </div>
  );


  export default Container;
