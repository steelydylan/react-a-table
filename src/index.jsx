import React from 'react';
import ReactDOM from 'react-dom'
import aTable from 'a-table';

export default class ReactAtable extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {
    const tableNode = ReactDOM.findDOMNode(this.refs.aTable).querySelector('table');
    this.table = new aTable(tableNode,{
      lang: this.props.lang,
      mark: this.props.mark,
      showBtnList: true
    });
    this.table.afterEntered =
      this.table.afterRendered = () => {
        if (typeof this.props.onUpdate === "function") {
          this.props.onUpdate(this.table.getTable());
        }
      }
    this.table.afterRendered();
  }

  render() {
    return (
      <div ref="aTable">
        {this.props.children}
      </div>
    );
  }
}

ReactAtable.defaultProps = {
  showBtnList: true,
  lang: 'en',
  mark: {
    align: {
      default: 'left',
      left: 'left',
      center: 'center',
      right: 'right'
    },
    btn: {
      group: 'a-table-btn-list',
      item: 'a-table-btn',
      itemActive: 'a-table-btn-active'
    },
    icon: {
      alignLeft: 'a-table-icon a-table-icon-left',
      alignCenter: 'a-table-icon a-table-icon-center',
      alignRight: 'a-table-icon a-table-icon-right',
      undo: 'a-table-icon a-table-icon-undo',
      merge: 'a-table-icon a-table-icon-merge02',
      split: 'a-table-icon a-table-icon-split02',
      table: 'a-table-icon a-table-icon-th02',
      source: 'a-table-icon a-table-icon-source01',
      td: 'a-table-icon a-table-icon-td03',
      th: 'a-table-icon a-table-icon-th02'
    },
    selector: {
      self: 'a-table-selector'
    }
  }
}
