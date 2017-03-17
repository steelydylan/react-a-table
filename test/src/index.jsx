import React from 'react'
import ReactDOM from 'react-dom'
import ReactAtable from '../../lib/index.js'

const style = {
  float: "left",
  width: "50%",
  height: "500px",
  boxSizing: "border-box"
}

const tableStyle = {
  float: "left",
  width: "50%",
  boxSizing: "border-box",
  backgroundColor: "#666",
  padding: "10px"
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      val: ""
    };
  }

  render() {
    return (
      <div>
        <div style={tableStyle}>
          <ReactAtable onUpdate={(html) => this.setState({ val: html })}>
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
        <textarea value={this.state.val} style={style}></textarea>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
