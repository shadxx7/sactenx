import React from 'react'
import { Flex, Link } from 'rebass'
import './style.scss'

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <Flex px={2} color="#282c34" bg="white" alignItems="center">
        <Link px={4} sx={{ fontSize: 25 }} variant="nav" href="#introduction">
          Introduction
        </Link>
        <Link px={4} sx={{ fontSize: 25 }} variant="nav" href="#stats">
          Stats
        </Link>
        <Link px={4} sx={{ fontSize: 25 }} variant="nav" href="#more-stats">
          More Stats
        </Link>
        <Link px={4} sx={{ fontSize: 25 }} variant="nav" href="#finale">
          Finale
        </Link>
      </Flex>
    </nav>
  )
}

export default Nav
