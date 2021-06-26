// import React from 'react'

// export default function Nedit({match}) {
//     return (
//         <div>
//             <h1>How are you : {match.params.id}</h1>
//         </div>
//     )
// }
import React, { Component } from 'react'

export default class Nedit extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h1>jeya:{this.props.match.params.id}</h1>
            </div>
        )
    }
}

