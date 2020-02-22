import React, { Component } from 'react'

class SingleTextBook extends Component {
    render() {
        const {textbook} = this.props
        return (
            <tr>
                <td>{textbook.author}</td>
                <td>{textbook.title}</td>
            </tr>
        )
    }
}
export default SingleTextBook