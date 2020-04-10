import React, { useState, useEffect } from 'react'
import Modal from 'react-responsive-modal'
import Nav from './components/Nav'
import Introduction from './components/Introduction'
import Stats from './components/Stats'
import MoreStats from './components/MoreStats'
import Finale from './components/Finale'
import 'react-responsive-modal/styles.css'
import './App.scss'

const App: React.FC<any> = () => {
  const [open, setOpen] = useState(false)
  function closeOpeniningModal() {
    return setOpen((s) => !s)
  }

  useEffect(() => {
    if (window.innerWidth < 1400 || window.innerHeight < 600) {
      setOpen(true)
    }
  }, [])

  return (
    <div className="App">
      <br />
      <Nav />
      <br />
      <Introduction />
      <br />
      <br />
      <Stats />
      <br />
      <MoreStats />
      <br />
      <br />
      <Finale />
      <br />
      <br />
      <footer>
        Built with
        <span role="img" aria-label="wink-emoji">
          💙
        </span>
        by <a href="https://github.com/shadxx7">Mohamed Shadab</a>
      </footer>
      <br />
      <Modal
        open={open}
        onClose={closeOpeniningModal}
        center
        focusTrapped={false}
        styles={{ modal: { borderRadius: '20px' } }}
      >
        <h2>
          This website is not responsive and is made to be used on larger
          devices. Please use such devices instead{' '}
          <span role="img" aria-label="wink-emoji">
            😉
          </span>
          .
        </h2>
      </Modal>
    </div>
  )
}

export default App
