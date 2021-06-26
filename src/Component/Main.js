import React, { useState } from 'react'
import Try from './Try'
export default function Main() {
    const [name,setName]=useState()
    const [fname,setFname]=useState()
    const change =(e)=>{
        setName({
            [e.target.name]:e.target.value
        })
    }
    const Sub = (e) =>{
        const t=name
        setFname({
            fname:t
        })
        this.props.history.push('/')
    }
    
    return (
        <div>
            <h1>Enter your email</h1>
            <form onSubmit={Sub}>
                <input type='text'
                        onChange={change}
                        value={name}
                        name="name"
                    />
                <button type='submit'>Sub</button>
            </form>
            <Try fname={fname}/ >
        </div>
    )
}
