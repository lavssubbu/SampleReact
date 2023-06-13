import React, { Component } from 'react'
import on from "./on.png"
import off from "./off1.png"

export class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        msg:"Everybody join Kanini",
        txt:"Join Here",
        imgnme:off
      }
    }
    styles ={
        fontStyle:"italic",
        color:"pink"
      }
    Buttonchange = ()=>
    {
        this.setState({
            msg:"Apply for internship",
            txt:"Applied",
            imgnme:on
        })
    }

  render() {
    return (
      <div>
        <h2 style={this.styles}>{this.state.msg}</h2>
        <button onClick={this.Buttonchange}>{this.state.txt}</button>
        <br/>
        <img src={this.state.imgnme}/>
      </div>
    )
  }
}

export default NewComp
