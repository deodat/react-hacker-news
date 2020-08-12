import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Navbar from './components/Navbar'
import NewsList from './components/NewsList'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Navbar />
        <NewsList />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
