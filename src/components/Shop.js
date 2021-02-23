import React from 'react';
import { useState, useEffect } from 'react';

const Shop = () => {
  const [sins, setSins] = useState([
    {
      name: 'Soberbia',
      img: '',
      description: 'blablabla',
      price: 0,
      inCart: false,
      quantity: 0,
    },
    {
      name: 'Ira',
      img: '',
      description: 'blablabla',
      price: 0,
      inCart: false,
      quantity: 0,
    },
    {
      name: 'Avaricia',
      img: '',
      description: 'blablabla',
      price: 0,
      inCart: false,
      quantity: 0,
    },
    {
      name: 'Envidia',
      img: '',
      description: 'blablabla',
      price: 0,
      inCart: false,
      quantity: 0,
    },
    {
      name: 'Lujuria',
      img: '',
      description: 'blablabla',
      price: 0,
      inCart: false,
      quantity: 0,
    },
    {
      name: 'Gula',
      img: '',
      description: 'blablabla',
      price: 0,
      inCart: false,
      quantity: 0,
    },
    {
      name: 'Pereza',
      img: '',
      description: 'blablabla',
      price: 0,
      inCart: false,
      quantity: 0,
    },
  ]);
  return (
    <div>
      {sins.map((sin, index) => {
        return <p key={index}>{sin.name}</p>;
      })}
    </div>
  );
};

export default Shop;
