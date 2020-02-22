import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios';

import Header from './Header'

const URL_SERVER = 'http://localhost:8001'
class MainRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    loadData () {
        axios.get(URL_SERVER + '/data').then(res => {
            this.setState({courses: [...res.data]})
        })
    }
    componentDidMount() {
        this.loadData();
    }
    render() {
        return (
            <BrowserRouter>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <Header/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
export default MainRouter;