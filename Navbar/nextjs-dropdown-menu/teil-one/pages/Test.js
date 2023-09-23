'use client'

import { useState } from 'react';
import { Newbanner } from '@/public/new-banner.png';
import Image from 'next/image';

function Test() {
  const [selectedTopping, setSelectedTopping] = useState('Medium');

  return (
    <div className="flex flex-row items-center">
      <input 
        type="radio" 
        name="topping" 
        value= "regular"
        id="regular" 
        checked={selectedTopping === 'Regular'
        }
        onChange={e => setSelectedTopping(e.target.value)}
      />
      <label htmlFor="regular">Regular</label>

      <input 
        type="radio" 
        name="topping" 
        value="Medium" 
        id="medium" 
        checked={selectedTopping === 'Medium'}
        onChange={e => setSelectedTopping(e.target.value)}
      />
      <label htmlFor="medium">Medium</label>

      <input 
        type="radio" 
        name="topping" 
        value="Large" 
        id="large"
        checked={selectedTopping === 'Large'}
        onChange={e => setSelectedTopping(e.target.value)}
      />
      <label htmlFor="large">Large</label>
    </div>
  )
}

export default function Page() {
  return <Test />;
}