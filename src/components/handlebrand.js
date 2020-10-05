import {useParams } from 'react-router-dom';
import Brand from './brand'
import React from 'react'
  
export default function Child(props) {
    const { id,pid } = useParams();
    return (
      <div>
      {/* <h1>Id: {id}</h1> */}
      <Brand id={id} pid={pid} brands={props.brands} />
      </div>
    );
  }

  