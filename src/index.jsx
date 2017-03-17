import React from 'react';
import ReactDOM from 'react-dom'
import aTable from 'a-table';

export default class ReactAtable extends React.Component {

	constructor () {
		super();
	}

	componentDidMount () {
		const tableNode = ReactDOM.findDOMNode(this.refs.aTable).querySelector('table');
		this.table = new aTable(tableNode);
		this.table.afterEntered = 
		this.table.afterRendered = () => {
			if(typeof this.props.onUpdate === "function") {
				this.props.onUpdate(this.table.getTable());
			}
		}
		this.table.afterRendered();
	}

	render () {
		return(
			<div ref="aTable">
				{this.props.children}
			</div>
		);
	}
}
