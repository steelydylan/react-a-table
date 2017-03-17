import React from 'react'
import ReactDOM from 'react-dom'
import ReactAtable from '../../lib/index.js'

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <div>
        <ReactAtable>
			<table>
				<tbody>
					<tr>
						<th>test</th>
						<th>test</th>
					</tr>
					<tr>
						<td>hoge</td>
						<td>hoge</td>
					</tr>
				</tbody>
			</table>
		</ReactAtable>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
    document.getElementById('root')
)
