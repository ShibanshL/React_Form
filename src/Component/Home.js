import React,{useState,useEffect} from 'react'
import Try from './Try'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home(props) {
    // const history = useHistory();
    const [form, setForm]=useState([])
    const [id,setId]=useState()
    // const name=props.name
    useEffect(async ()=>{
        const response= await fetch('/posts')
        const data= await response.json()
        const item=data
        setId(data.map(e=>e.id))
        console.log("id",id)
        console.log("data is here",item)
        setForm(item)
    },[])
    const handle=useEffect( async (e)=>{
        // e.preventDefault()
        let data=form
            await fetch('/posts',{
                method:'PUT',
                headers:{
                    "Application":"application/json",
                    "Content-type":"application/json"},
                body:JSON.stringify(data)
            }).then( (result)=>{
                result.json().then((resp)=>{
                    resp.name='n'
                })
            })
    },[form])
    // handle=useEffect( (e)=>{
    //     history.push({
    //         pathName:'/'
    //         // setForm({name:'no'})
    //     })

    // },[])

    return (
        // if(name=)
        <div className="cont">
            <div className="subcont">
                <div className="mainF">
                    <h1 className="head">Welcome back</h1>
                    <h2>This is your payment history</h2>
                    <Link className="lnk" to={"/"}>New Invoice</Link>
                </div>
                <div className="data">
                    <div className="datac" key={form.id}>{form.map(e=>{
                        return(
                            <div className="style">
                                <h1 className="na">Name : {e.name}</h1>
                                <h2 className="em">Email :{e.email}</h2>
                                <h2 className="id">ID : {e.id}</h2>
                                <h2 className="pr">Price : {e.price}</h2>
                                <h2 className="ma">Material : {e.materials}</h2>
                                <h2 className="paid">Paid :{e.paid}</h2>

                                <button className="del" onClick={()=>{
                                    // e.preventDefault()
                                    fetch('posts/'+e.id,{
                                        method:'DELETE'
                                    })
                                }}>Delete</button>
                                <button className="ed" onClick={() =>{  props.history.push({
                                            pathname: `/${e.id}`,
                                            state: {...e.value}
                                        })}}>Edit</button>
                            </div>
                        )
                    })}</div>
                    {/* <Link className="lnk" to={"/"}>Back</Link> */}
                </div>
            </div>
        </div>
    )
}
