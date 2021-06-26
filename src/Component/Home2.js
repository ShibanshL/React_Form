import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Animation.js'

import './Home.css'


export default class Home2 extends Component {
    
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
            <div className="Main_Container"> 
                <div className="NewLink">
                    <h1>All the info that you posted is here</h1>
                    <Link className="link" to={"/"}>New Invoice</Link> 
                    </div>  
                    <div className="MapFunction" key={this.state.data.id}>{this.state.data.map(e=>{
                            return(
                                <div className="MapData">
                                    <table>
                                        <tr className="All_Headings">
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Price</th>
                                            <th>Materials</th>
                                            <th>Paid</th>
                                            <th>Delete</th>
                                            <th>Edit</th>

                                        </tr>
                                        <tr className="All_Info">
                                            <td>{e.id}</td>
                                            <td>{e.name}</td>
                                            <td>{e.email}</td>
                                            <td>{e.price}$</td>
                                            <td>{e.materials}</td>
                                            <td>{e.paid?"Paid":"Unpaid"}</td>
                                            <td><button className="Click" onClick={()=>{
                                                    fetch('http://localhost:8000/posts/'+e.id,{
                                                        method:'DELETE'
                                                    })
                                                }}>Delete</button></td>
                                            <td><button className="Click1" onClick={()=>{
                                                    this.props.history.push({
                                                        pathname: '/edit/'+e.id
                                                        
                                                    })
                                            }}>Edit</button></td>
                                        </tr>
                                    </table>
                                </div>
                            )
                        }
                    )
                }
                </div>
            </div>
        )
    }
}
                          
     
