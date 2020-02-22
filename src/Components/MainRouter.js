import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios';

import Header from './Header'
import Courses from './Courses'

const URL_SERVER = 'http://localhost:8001'
class MainRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    loadData () {
        console.log("loaded0")
        axios.get(URL_SERVER + '/data').then(res => {
            this.setState({courses: [...res.data]})
            console.log("loaded")
        })
    }
    componentDidMount() {
        this.loadData();
    }
    render() {
        console.log(this.state)
        return (
            <BrowserRouter>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <Header/>
                        <Switch>
                            <Route exact path='/' render={() => (<Courses courses={this.state.courses}/>)}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
export default MainRouter;