import React from 'react'
import { Bar, BarChart, Tooltip } from 'recharts'
import { data } from '../../utils/data'
import './style.scss'

interface PropTypes {
  active: boolean
  payload: any
}

const CustomTooltip = ({ active, payload }: PropTypes) => {
  if (active) {
    return (
      <div>
        <span>{`Score : ${payload[0].value}`}</span>
      </div>
    )
  }
  return null
}

const Introduction: React.FC = () => {
  return (
    <div className="Introduction-wrapper">
      <BarChart
        width={window.innerWidth - 500}
        height={window.innerHeight - 400}
        data={data.data}
      >
        <Tooltip
          content={
            //@ts-ignore
            <CustomTooltip />
          }
        />
        <Bar dataKey="batting_score" fill="#3b00ff" />
      </BarChart>
    </div>
  )
}

export default Introduction
