import React, {Component} from 'react'
import './loader.css';

const LoadHoc = (WrappedComponent) => {
    return  class loadHoc extends Component{
        constructor(props){
            super(props)
            this.state={
                time : 0
            }
            setTimeout( () => {
                this.setState({ time: 4})
            },  4000)
            };
        

        render(){return  this.state.time < 2 ? <div className="loader"><div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div> : <WrappedComponent />
        }
    }
}
export default LoadHoc;