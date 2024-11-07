import React from 'react'
import './contentmanagement.scss'
import PlacementCms from '../../../admin/pages/cms/PlacementCms'
import NewsCms from '../../../admin/pages/cms/NewsCms'

const ContentManagement = () => {
  return (
    <div className='cms-container'>
        <PlacementCms/>
        <NewsCms/>
    </div>
  )
}

export default ContentManagement