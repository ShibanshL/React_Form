import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import './Edit.css'

class Edit extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            price:'',
            materials:'',
            paid:'',
            unpaid:'',
            id:this.props.nid
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    async componentDidMount(e){
        const response= await fetch('http://localhost:8000/posts/'+this.props.match.params.id)
        const data= await response.json()
        const item=data
        console.log("data is here",item)
        this.setState({
            name:item.name
        })
        this.setState({
            email:item.email
        })
        this.setState({
            price:item.price
        })
        this.setState({
            materials:item.materials
        })
        this.setState({
            paid:item.paid
        })
        this.setState({
            unpaid:item.unpaid
        })
    }
    handleChange(e){
        e.preventDefault()
        const {name,value,type,checked}=e.target
        type ==='checkbox'?
            this.setState({
                [name]:checked
            }):
            this.setState({
                [name]:value
            })
    }
    async handleSubmit(e){
        e.preventDefault()
        let data=this.state
            await fetch(`http://localhost:8000/posts/${this.props.match.params.id}`,{
                method:'PUT',
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
   

    render() {
        console.log("hey",this.state.nid)
        return (
            <div className="Container">
                <div className="Sub_Container">
                    <div className="FirstData">
                        <h1>Edit your info here</h1>
                        <h1>ID:{this.props.match.params.id}</h1>
                        <Link className="Home"to={"/nhome"}>Back</Link>
                    </div>
                    <form className="FormInfo" onSubmit={this.handleSubmit}>
                        <h1>Name: </h1>
                        <input type='text' 
                        value={this.state.name} 
                        name="name"
                        onChange={this.handleChange} />

                        <h1>Email: </h1>
                        <input type='text' 
                        onChange={this.handleChange}
                        value={this.state.email} 
                        name="email"
                        />

                        <h1>Price: </h1>
                        <input type='text' 
                        value={this.state.price} 
                        name="price"
                        onChange={this.handleChange} />

                        <h1>Materials: </h1>
                        <input type='text' 
                        value={this.state.materials} 
                        name="materials"
                        onChange={this.handleChange} /> 

                        <div className="Paid">
                        <h1>Paid: </h1>
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
                        </div>
                        <button className="Submit"type='submit'>Submit</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default withRouter(Edit)
