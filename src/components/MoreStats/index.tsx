import React from 'react'
import { Flex, Text } from 'rebass'
import {
  ComposedChart,
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarGrid,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'
import { countryWiseRuns } from '../../statistics'
import Block from '../UI/Block'

let data = countryWiseRuns()
data = data.filter(item => {
  if (item.matches < 10) return false
  return item
})

const MoreStats = () => {
  return (
    <div id="more-stats">
      <h2>More Stats</h2>
      <Text mx="auto" width="45vw" fontWeight="bold">
        Sachin has a very high amount runs against acclaimed strong teams like
        Australia, Sri Lanka, Pakistan.
      </Text>
      <br />
      <Flex justifyContent="center">
        <Block style={{ width: '45vw', height: '62vh' }}>
          <ComposedChart
            layout="vertical"
            width={700}
            height={450}
            data={data}
            style={{ fontSize: 14, fontWeight: 'bold' }}
          >
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" axisLine={false} width={80} />
            <Tooltip />
            <Bar dataKey="score" label barSize={20} fill="#ff9000" />
          </ComposedChart>
          <Text fontSize={18} my={2}>
            Runs against each country Sachin has played against
          </Text>
        </Block>
      </Flex>
      <br />
      <Flex justifyContent="center">
        <Block style={{ width: '45vw', height: '62vh' }}>
          <RadarChart
            outerRadius={200}
            width={700}
            height={450}
            data={data}
            style={{ fontSize: 14, fontWeight: 'bold' }}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <Radar
              dataKey="average"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
          <Text fontSize={18} my={2}>
            Average against each country with over 10 matches
          </Text>
        </Block>
      </Flex>
    </div>
  )
}

export default MoreStats
