import React, { Component } from 'react'

import SingleTextBook from './SingleTextBook'
class CourseDetail extends Component {
    getTextBooks(textbooks) {
        if (!textbooks || textbooks.length == 0)
            return null;
        return textbooks.map((textbook, index) =>
            (<SingleTextBook key={'textbook' + index} textbook={textbook}/>)
        )
    }
    render() {
        const {course} = this.props
        return (
            <div className='col-12 col-md-10'>
                <h4> Course details </h4>
                <p> <strong>Id: </strong> {course.id} </p>
                <p> <strong>Name: </strong> {course.name} </p>
                <p> <strong>Description: </strong> {course.description} </p>
                <h4>List of TextBooks</h4>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Author</th>
                            <th scope='col'>Title</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getTextBooks(course.textbooks)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CourseDetail