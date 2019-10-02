import rawData from './data'
import _ from 'lodash'

export const battingScore = () => {
  interface resultObj {
    score: number
    out: boolean
    matchResult: string
    opposition: string
  }
  let result: Array<resultObj> = []
  rawData.forEach(item => {
    let opposition = item.opposition
    if (opposition !== null && opposition !== undefined) {
      opposition = opposition.substring(2)
    }
    if (item.batting_score[item.batting_score.length - 1] === '*') {
      result.push({
        score: Number(
          item.batting_score.substring(0, item.batting_score.length - 1)
        ),
        out: false,
        matchResult: item.match_result,
        opposition,
      })
    } else if (!item.batting_score.includes('DNB')) {
      result.push({
        score: Number(item.batting_score),
        out: true,
        matchResult: item.match_result,
        opposition,
      })
    }
  })
  result.pop()
  return result
}

export const battingScoreAverage = () => {
  const data = battingScore()
  let result: Array<any> = []
  for (let i = 0; i < data.length; i++) {
    let n = 0
    let sum = 0
    if (i !== 0) {
      for (let j = 0; j < i + 1; j++) {
        if (data[j].out) n++
        sum = sum + data[j].score
      }
      result.push({ average: (sum / n).toFixed(2) })
    } else result.push({ average: data[i].score })
  }
  return result
}

export const runsAverageBreakdown = () => {
  const data = battingScore()
  let outWon = 0,
    outLost = 0,
    outDraw = 0,
    sumWon = 0,
    sumLost = 0,
    sumDraw = 0

  for (let i = 0; i < data.length; i++) {
    if (data[i].matchResult === 'won') {
      if (data[i].out) {
        outWon++
      }
      sumWon += data[i].score
    } else if (data[i].matchResult === 'lost') {
      if (data[i].out) {
        outLost++
      }
      sumLost += data[i].score
    } else if (data[i].matchResult === 'n/r') {
      if (data[i].out) {
        outDraw++
      }
      sumDraw += data[i].score
    }
  }
  return {
    wonAverage: (sumWon / outWon).toFixed(2),
    lostAverage: (sumLost / outLost).toFixed(2),
    drawAverage: (sumDraw / outDraw).toFixed(2),
  }
}

export const wicketsTaken = () => {
  const data = rawData
  let result: Array<{ wickets: number; matchResult: string }> = []
  data.forEach(item => {
    if (item.wickets !== '-')
      result.push({
        wickets: Number(item.wickets),
        matchResult: item.match_result,
      })
  })
  return result
}

export const totalWicketsBreakdown = () => {
  const data = wicketsTaken()
  let totalWin = 0,
    totalLost = 0,
    totalDraw = 0
  data.forEach(item => {
    if (item.matchResult === 'won') totalWin += item.wickets
    else if (item.matchResult === 'lost') totalLost += item.wickets
    else if (item.matchResult === 'n/r') totalDraw += item.wickets
  })
  return { totalWin, totalLost, totalDraw }
}

export const countryWiseRuns = () => {
  let data = battingScore()
  let countries: Array<any> = []
  data.forEach(item => {
    const temp = item.opposition
    if (!_.includes(countries, temp)) countries.push(temp)
  })
  countries = countries.map(item => ({ name: item, score: 0, matches: 0 }))
  data.forEach(item => {
    countries.forEach((country: any) => {
      if (country.name === item.opposition) {
        country.score += item.score
        country.matches += 1
      }
    })
  })
  countries = countries.map(item => ({
    ...item,
    average: item.score / item.matches,
  }))
  return countries
}
