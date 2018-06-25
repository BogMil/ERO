import React, { Component } from 'react';

import JqxGrid, { jqx } from '../jqwidgets-react/react_jqxgrid'

const $ = window.$;
class JqWidgetGrid extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }


  render() {
    let source =
        {
            localdata: [
                ['Alfreds Futterkiste', 'Maria Anders', 'Sales Representative', 'Obere Str. 57', 'Berlin', 'Germany'],
                ['Ana Trujillo Emparedados y helados', 'Ana Trujillo', 'Owner', 'Avda. de la Constitucin 2222', 'Mxico D.F.', 'Mexico'],
                ['Antonio Moreno Taquera', 'Antonio Moreno', 'Owner', 'Mataderos 2312', 'Mxico D.F.', 'Mexico']
            ],
            datafields: [
                { name: 'CompanyName', type: 'string', map: '0' },
                { name: 'ContactName', type: 'string', map: '1' },
                { name: 'Title', type: 'string', map: '2' },
                { name: 'Address', type: 'string', map: '3' },
                { name: 'City', type: 'string', map: '4' },
                { name: 'Country', type: 'string', map: '5' }
            ],
            datatype: 'array'
        };
 
        let dataAdapter = new jqx.dataAdapter(source);
 
        let columns =
        [
            { text: 'Company Nameee', datafield: 'CompanyName', width: 200 },
            { text: 'Contact Name', datafield: 'ContactName', width: 150 },
            { text: 'Contact Title', datafield: 'Title', width: 100 },
            { text: 'Address', datafield: 'Address', width: 100 },
            { text: 'City', datafield: 'City', width: 100 },
            { text: 'Country', datafield: 'Country'}
        ];
        return (
            <JqxGrid ref='myGrid'
                width={850} source={dataAdapter} columns={columns} columnsresize={true}
            />
        )
  }
}

export default JqWidgetGrid;