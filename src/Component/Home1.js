import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Edit from './Edit'
import './Home.css'

export default class Home1 extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[''],
            id:false,
            nid:''
        }
    }
    async componentDidMount(e){
        const response= await fetch('/posts')
        const data= await response.json()
        const item=data
        console.log("data is here",item)
        this.setState({
            data:item
        })
    }

    render() {
        return (
            <div className="cont">
            <div className="subcont">
                <div className="mainF">
                    <h1 className="head">Welcome back</h1>
                    <h2 className="ehy">This is your payment history</h2>
                    <Link className="lnk" to={"/"}>New Invoice</Link>
                </div>
                <div className="data">
                    <div className="datac" key={this.state.data.id}>{this.state.data.map(e=>{
                        return(
                            <div className="style">
                                <h1 className="na">Name : {e.name}</h1>
                                <h2 className="em">Email :<span>{e.email}</span></h2>
                                <h2 className="id">ID : {e.id}</h2>
                                <h2 className="pr">Price : {e.price}</h2>
                                <h2 className="ma">Material : {e.materials}</h2>
                                <h2 className="paid">Paid :{e.paid}</h2>

                                <button className="del" onClick={()=>{
                                    // e.preventDefault()
                                    fetch('http://localhost:8000/posts/'+e.id,{
                                        method:'DELETE'
                                    })
                                }}>Delete</button>
                                {/* <button className="ed" onClick={()=>{
                                    this.props.history.push({
                                        pathname: '/',
                                        data:{...e.value}
                                    })
                                }}>Edit</button> */}
                                <button className="ed" onClick={()=>{
                                    this.props.history.push({
                                        pathname: '/edit/'+e.id
                                        
                                    })
                                    // <Route path="/edit/:id"></Route>
                                }}>Edit</button>
                            </div>
                        )
                    })}</div>
                </div>
            </div>
        </div>
        )
    }
}
