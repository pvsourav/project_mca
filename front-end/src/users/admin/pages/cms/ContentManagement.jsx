import React from 'react'
import './contentmanagement.scss'
import PlacementCms from './PlacementCms'
import NewsCms from './NewsCms'

const ContentManagement = () => {
  return (
    <div className='cms-container'>
        <PlacementCms/>
        <NewsCms/>
    </div>
  )
}

export default ContentManagement