import React from 'react'
import ReactDOM from 'react-dom'
import ReactAtable from '../../lib/index.js'

class App extends React.Component {

  constructor () {
    super()
  }

  render () {

    return (
      <ReactAtable afterRendered={(html)=>console.log(html)}>
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
    )
  }
}

ReactDOM.render(
  <App />,
    document.getElementById('root')
)
