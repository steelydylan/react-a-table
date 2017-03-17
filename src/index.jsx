import React from 'react';
import ReactDOM from 'react-dom'
import aTable from 'a-table';

export default class ReactAtable extends React.Component {

	constructor () {
		super();
	}

	componentDidMount () {
		const tableNode = ReactDOM.findDOMNode(this.refs.aTable).querySelector('table');
		const table = new aTable(tableNode);
		table.afterRendered = () => {
			console.log(table.getHtml());
			this.props.afterRendered(table.getHtml());
		}
		table.afterEntered = () => {
			console.log(table.getHtml());
			this.props.afterEntered(table.getHtml());
		}
	}

	afterUpdate () {

	}

	render () {
		return(
			<div ref="aTable">
				{this.props.children}
			</div>
		);
	}
}
