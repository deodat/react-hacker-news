import React from 'react'

export default class Navbar extends React.Component {
  render() {
    const categories = ['Top', 'News']
    return (
      <nav className='row space-between'>
        <ul className='nav row'>
          {categories.map((category) => (
            <li key={category}>
              <button className='btn-clear nav-link' href=''>
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}
