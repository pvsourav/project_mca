import React from 'react'
import './contentmanagement.scss'
import PlacementCms from '../../components/PlacementCms'
import NewsCms from '../../components/NewsCms'

const ContentManagement = () => {
  return (
    <div className='cms-container'>
        <PlacementCms/>
        <NewsCms/>
    </div>
  )
}

export default ContentManagement