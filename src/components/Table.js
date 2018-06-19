import React, { Component } from 'react'

function RenderItem (props) {
  return <div >{props.data}</div>
}

function RenderData (props) {

  const data=props.data;
  console.log( (data))
  const list = data.map((row)=>
      <RenderItem key={row.id} data={row.title}/>
  );

  return(
    <div >{list}</div>    
  );
}

export default class Table extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount() {

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => this.setState({data : json}));
  }

  render() {

    const rows=this.state.data;
 
    return (
        <RenderData data={rows}/>
    )
  }
}