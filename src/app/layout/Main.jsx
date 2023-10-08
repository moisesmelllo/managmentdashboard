import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { GanttChartSquare } from 'lucide-react';
import { CheckCheck } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import RevenueCard from '../components/RevenueCard';


const Main = () => {
  return (
    <div>
      <div className='flex'>
        <ProjectCard title='Total project' price='10,724' text='All runing & completed projects' icon={<GanttChartSquare /> }/>
        <ProjectCard title='Completed Projects' price='9,801' text='+12% Completion rate this month' icon={<CheckCheck />}/>
        <ProjectCard title='Running Projects' price='923' text='+8% Running projects increases' icon={<BarChart3 />} />
      </div>
      <RevenueCard />
    </div>
  )
}

export default Main