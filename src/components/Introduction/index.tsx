import React from 'react'
import { Image, Flex, Text, Box } from 'rebass'
import SachinPhoto from '../../assets/sachin-photo.png'
import './style.scss'

const Introduction: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      mx="auto"
      className="introduction-wrapper"
      id="introduction"
    >
      <h3 style={{ marginTop: -15 }}>Sachin Ramesh Tendulkar</h3>
      <Image
        src={SachinPhoto}
        sx={{ width: 170, height: 170, borderRadius: '50%' }}
        mx="auto"
      />
      <Flex justifyContent="center">
        <Text mx={3} fontSize={18}>
          <b>Born - </b>Apr 24, 1973
        </Text>
        <Text mx={3} fontSize={18}>
          <b>Birth Place - </b>Mumbai, Maharashtra, India
        </Text>
        <Text mx={3} fontSize={18}>
          <b>Height - </b>5'5
        </Text>
        <Text mx={3} fontSize={18}>
          <b>Role - </b>Batsman
        </Text>
      </Flex>
      <Flex my={2} justifyContent="center">
        <Text mx={3} fontSize={18}>
          <b>Batting Style - </b>Right Handed
        </Text>
        <Text mx={3} fontSize={18}>
          <b>Bowling Style - </b>Right-arm legbreak
        </Text>
      </Flex>
      <Flex justifyContent="center">
        <Box mx={5}>
          <h3>Test</h3>
          <ul style={{ fontSize: 18, textAlign: 'left' }}>
            <li>
              <b>Matches:</b> 200
            </li>
            <li>
              <b>Runs scored:</b> 15921
            </li>
            <li>
              <b>Batting average:</b> 53.78
            </li>
            <li>
              <b>Top score:</b> 248 Not out
            </li>
            <li>
              <b>100s/50s:</b> 51/68
            </li>
          </ul>
        </Box>
        <Box mx={5}>
          <h3>ODI</h3>
          <ul style={{ fontSize: 18, textAlign: 'left' }}>
            <li>
              <b>Matches:</b> 463
            </li>
            <li>
              <b>Runs scored:</b> 18426
            </li>
            <li>
              <b>Batting average:</b> 44.83
            </li>
            <li>
              <b>Top score:</b> 200 Not out
            </li>
            <li>
              <b>100s/50s:</b> 49/96
            </li>
          </ul>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Introduction
