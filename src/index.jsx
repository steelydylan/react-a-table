import React from 'react';
import aTable from 'a-table';

export default class ReactAtable extends React.Component {

	constructor () {
		super();
	}

	componentDidMount () {
		const table = new aTable(this.refs.aTable);
	}

	render () {
		return(
			<div ref="aTable">
				{this.props.children}
			</div>
		);
	}
}
