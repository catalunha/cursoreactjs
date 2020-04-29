import React, { Component } from 'react';
class Feed extends Component {
    render() {
        return (
            <div key={this.props.item.id}>
                <h3>{this.props.item.username}</h3>
                <a>{this.props.item.curtidas} {this.props.item.curtidas > 1 ? 'curtidas' : 'curtida'} / {this.props.item.comentarios} comts</a>
            </div>
        );
    }
}
export default Feed;