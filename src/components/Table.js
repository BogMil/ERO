import React, { Component } from 'react'

function RenderData (props) {

  const list = props.data.map((row)=>{
    return(
    <div key={row.id}>{row.title}</div>
    )
  })

  return(
    <div>{list}</div>    
  );
}

export default class Table extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: ['asd']
    }
  }

  componentDidMount() {

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => this.setState({data : json}));



  }

  render() {

    let rows=this.state.data;

    return (
      <div>
        <h1>ses</h1>
        <RenderData data={rows}/>
      </div>
    )
  }
}
