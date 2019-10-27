import React from 'react'
import { Flex, Text } from 'rebass'
import {
  battingScore,
  battingScoreAverage,
  runsAverageBreakdown,
  totalWicketsBreakdown,
} from '../../statistics'
import {
  Tooltip,
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
} from 'recharts'
import Block from '../UI/Block'

const scoreData = battingScore()
const averageData = battingScoreAverage()
const { wonAverage, lostAverage, drawAverage } = runsAverageBreakdown()
const { totalWin, totalLost, totalDraw } = totalWicketsBreakdown()

const Stats: React.FC = () => {
  return (
    <div id="stats">
      <h2>Stats</h2>
      <Flex justifyContent="center">
        <Block>
          <ResponsiveContainer width={500} height="70%">
            <AreaChart data={averageData}>
              <defs>
                <linearGradient id="colorAvg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b00ff" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip />
              <Area dataKey="average" fill="url(#colorAvg)" />
            </AreaChart>
          </ResponsiveContainer>
          <Text my={2} fontSize={18}>
            The above graph is the moving batting average of Sachin (from the
            beginning of his career to the end). It is extremely consistent and
            slowly increasing.
          </Text>
        </Block>
        <Block>
          <Text mt={2} fontSize={32}>
            <b>Batting Average in -</b>
          </Text>
          <Text my={4} fontSize={32}>
            Winning Matches: <b>{wonAverage}</b>
          </Text>
          <Text my={4} fontSize={32}>
            Losing Matches: <b>{lostAverage}</b>
          </Text>
          <Text my={4} fontSize={32}>
            Draw Matches: <b>{drawAverage}</b>
          </Text>
        </Block>
      </Flex>
      <br />
      <Flex justifyContent="center">
        <Block>
          <Text mt={2} fontSize={32}>
            <b>Total Wickets Taken -</b>
          </Text>
          <Text my={4} fontSize={32}>
            Winning Matches: <b>{totalWin}</b>
          </Text>
          <Text my={4} fontSize={32}>
            Losing Matches: <b>{totalLost}</b>
          </Text>
          <Text my={4} fontSize={32}>
            Draw Matches: <b>{totalDraw}</b>
          </Text>
        </Block>
        <Block>
          <ResponsiveContainer width={500} height="70%">
            <BarChart data={scoreData} width={520} height={250}>
              <Tooltip />
              <Bar dataKey="score" fill="#ff006e" />
            </BarChart>
          </ResponsiveContainer>
          <Text my={4} fontSize={18}>
            Time series of runs scored by Sachin. Highest Runs: 200
          </Text>
        </Block>
      </Flex>
    </div>
  )
}

export default Stats
