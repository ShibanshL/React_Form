import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Try.css'

var a=[]
export default class Try extends Component {
    
    constructor(props){
        super(props)
        // var a=[]
        this.state={
            name:'',
            email:'',
            price:'',
            materials:'',
            paid:'',
            unpaid:''
            
        }
        this.handleChange=this.handleChange.bind(this)
       
        this.handlePost=this.handlePost.bind(this)


    }
    
    handleChange(e){
        const {name,value,type,checked}=e.target
        type ==='checkbox'?
            this.setState({
                [name]:checked
            }):
            this.setState({
                [name]:value
            })
    }
    
    async handlePost(e){
        if(this.state.name.length>=3 && this.state.email.includes("@") && Number(this.state.price) && this.state.materials.length<=30){ 
            e.preventDefault()
            let data=this.state
            await fetch('http://localhost:8000/posts',{
                method:'POST',
                headers:{
                    "Application":"application/json",
                    "Content-type":"application/json"},
                body:JSON.stringify(data)
            }).then( (result)=>{
                result.json().then((resp)=>{
                    console.log("here we are",resp)
                })
            })
            this.props.history.push('/nhome')
        }
        else{
            return(
                alert("Invalid input")
            )
        }
    }
    render() {
        return (
            <div className="main">
                <div className="submain">
                    <form onSubmit={this.handlePost}>
                        <div className="inform">
                            <h2 className="na1">Name :</h2>
                            <input type='text'
                                    value={this.state.name}
                                    name="name"
                                    onChange={this.handleChange} 
                                    /><br></br>
                                    {this.valid}
                            <h2 className="em1">Email :</h2>
                            <input type='text'
                                    value={this.state.email}
                                    name="email"
                                    onChange={this.handleChange} 
                                    /><br></br>
                            <h2 className="pr1">Price :</h2>
                            <input type='text'
                                    value={this.state.price}
                                    name="price"
                                    onChange={this.handleChange} 
                                    />
                            <h2 className="me">Materials :</h2>
                            <input type='text'
                                    value={this.state.materials}
                                    name="materials"
                                    onChange={this.handleChange} 
                                    />
                            <h2 className="pa">Paid :</h2>
                            <h2>Paid</h2>
                            <input type='checkbox'
                                    checked={this.state.paid}
                                    name="paid"
                                    onChange={this.handleChange} 
                                    />
                            <h2>Unpaid</h2>
                            <input type='checkbox'
                                    checked={this.state.unpaid}
                                    name="unpaid"
                                    onChange={this.handleChange} 
                                    />
                            <button type='submit'>Submit</button>
                        </div>
                </form>
                
                    <Link className="lnk1" to={"/nhome"}>Home</Link>

                   
                </div>
            </div>
        )
    }
}
