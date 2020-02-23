import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class SingleCourse extends Component {
    render() {
        const {course} = this.props;
        return (
            <tr>
                <td>{course['id']}</td>
                <td>{course['name']}</td>
                <td>{course['description']}</td>
                <td>
                    <Link to={'courses/' + course['id']} className='btn btn-primary'>View TextBooks</Link>
                </td>
                <td>
                    <Link to={'courseEdit/' + course['id']} className='btn btn-warning'>Edit Course</Link>
                </td>
            </tr>
        )
    }
}
export default SingleCourse