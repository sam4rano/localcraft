import React from 'react'
import ArtandPainting from '../components/category/ArtandPainting';
import Glassblowing from '../components/category/GlassBlowing';
import MetalWork from '../components/category/MetalWork';
import Pottery from '../components/category/Pottery';
import WoodWork from '../components/category/WoodWork';

const Shop = () => {
  return (
	<div>
    <div>
      <h2>Mind Blowing Craft for a mind blowing home decoration</h2>
      <h5>Give your apartment a facelift</h5>
    </div>
    <div className='flex flex-col align-middle'>
      <ArtandPainting />
      <Glassblowing />
      <MetalWork />
      <Pottery />
      <WoodWork />
    </div>
  </div>
  )
}

export default Shop