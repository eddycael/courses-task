import React, { Component } from 'react'
import SingleCourse from './SingleCourse'
class Courses extends Component {
    getCourses() {
        console.log(this)
        const {courses} = this.props
        if (!courses || courses.length == 0)
            return null;
        return courses.map((course, index) =>
            (<SingleCourse key={'course' + index} course={course}/>)
        )
    }
    render() {
        return (
            <div className='col-12 col-md-10'>
                <h3 className='text-center'>List of Courses</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Id</th>
                            <th scope='col'>Course Name</th>
                            <th scope='col'>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getCourses()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Courses;