import React from 'react'
import { Text, Box } from 'rebass'

const Finale: React.FC = () => {
  return (
    <div id="finale">
      <h2>Finale</h2>
      <Box width="70vw" mx="auto">
        <Text textAlign="justify">
          From all the stats above, we can understand that Sachin Tendulkar is a
          very consistent player which we understand from his moving average as
          the years go on. His average was always higher in all the matches
          India won and he also had gotten a higher no. of wickets in such
          matches. He also boasts a staggering 18,426 total runs in ODI and
          15,921 total runs in Test matches which is higher than any other
          player. All of this goes to prove he is an excellent player. Sachin is
          nowhere close to having the highest batting average in both ODI/Test
          which is a rather important metric. The question here at hand is
          whether he can be considered the greatest of all time for such
          questions only metrics can't prove everything as each game, each
          situation in cricket is different and require a unique kind of play
          which we can understand from the achievements of Sachin Tendulkar.
        </Text>
        <h3>Achievements</h3>
        <ul style={{ textAlign: 'left' }}>
          <li>World record of 8,705 runs in Tests away from home</li>
          <li>World record of 29 centuries in Tests away from home</li>
          <li>
            First player to reach 12,000, 13,000, 14,000, 15,000 Test and ODI
            runs
          </li>
          <li>
            Record for scoring most 1,000 Test runs in a calendar year (six
            times)
          </li>
          <li>
            The only cricketer to score 100 centuries in international cricket
            (in Test and ODI)
          </li>
          <li>Arjuna Award Recipient for achievements in cricket in 1994</li>
          <li>
            Received Rajiv Gandhi Khel Ratna - India's highest sporting honour
          </li>
          <li>Received Padma Shri - India's fourth-highest civilian award </li>
          <li>Sportsperson of the Year in 2006</li>
          <li>
            Received Padma Vibhushan - India's second-highest civilian award
          </li>
          <li>
            In 2010 he received ICC Cricketer of the Year - Highest award in the
            ICC listings
          </li>
          <li>
            Won a record 16 Man of the Series and 62 Man of the Match awards in
            ODI Matches
          </li>
          <li>
            Has the distinction of having won the 'Man of the Match' Award
            against all ICC Full Members
          </li>
        </ul>
        <br />
        <Text textAlign="center">
          After all of this, I'll let you decide whether he was the greatest or
          not
          <span role="img" aria-label="wink-emoji">
            😄
          </span>
          .
        </Text>
      </Box>
    </div>
  )
}

export default Finale
