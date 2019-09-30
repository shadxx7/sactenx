import React, { useState } from 'react'
import { Redirect, Switch, Route, withRouter } from 'react-router-dom'
import { Button, Flex } from 'rebass'
import Modal from 'react-responsive-modal'
import Nav from './components/Nav'
import Introduction from './components/Introduction'
import Average from './components/Average'
import './App.scss'

const Redirector: React.FC = () => {
  return <Redirect to="/runs"></Redirect>
}

const App: React.FC<any> = props => {
  const [open, setOpen] = useState(false)
  function closeOpeniningModal() {
    return setOpen(s => !s)
  }

  function back() {
    const { location, history } = props
    switch (location.pathname) {
      case '/average':
        history.push('/introduction')
        break
      case '/stats':
        history.push('/average')
        break
      case '/finale':
        history.push('/stats')
        break
    }
  }

  function next() {
    const { location, history } = props
    switch (location.pathname) {
      case '/introduction':
        history.push('/average')
        break
      case '/average':
        history.push('/stats')
        break
      case '/stats':
        history.push('/finale')
        break
    }
  }

  return (
    <div className="App">
      <br />
      <Nav />
      <br />
      <Switch>
        <Route path="/" component={Redirector} exact></Route>
        <Route path="/introduction" component={Introduction} exact></Route>
        <Route path="/average" component={Average} exact></Route>
        <Route path="/stats" exact></Route>
        <Route path="/finale" exact></Route>
      </Switch>
      <br />
      <Flex>
        <Button
          variant="secondary"
          onClick={back}
          sx={{ ':hover': { backgroundColor: 'orange' } }}
          disabled={props.location.pathname === '/runs'}
        >
          Back
        </Button>
        <Button
          mx={2}
          variant="secondary"
          onClick={next}
          sx={{ ':hover': { backgroundColor: 'orange' } }}
          disabled={props.location.pathname === '/finale'}
        >
          Next
        </Button>
      </Flex>
      <Modal
        open={open}
        onClose={closeOpeniningModal}
        center
        showCloseIcon={false}
        focusTrapped={false}
        styles={{ modal: { borderRadius: '20px' } }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1>Hey!</h1>
          <h2>
            Want to find out if Sachin Tendulkar is the greatest player of all
            time? Then you are at the right place!
          </h2>
          <br />
          <Button
            variant="secondary"
            onClick={closeOpeniningModal}
            id="begin-button"
          >
            Begin
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default withRouter(App)
