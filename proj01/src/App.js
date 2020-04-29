import React, { Component } from 'react';
import Feed from './components/Feed';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: [
                {
                    id: 1,
                    username: 'aa',
                    curtidas: 10,
                    comentarios: 11
                },
                {
                    id: 2,
                    username: 'bb',
                    curtidas: 20,
                    comentarios: 22
                },
                {
                    id: 3,
                    username: 'cc',
                    curtidas: 1,
                    comentarios: 33
                },
            ]
        };

    }

    render() {
        return (
            <div>
                {this.state.feed.map((item) => {
                    return (
                       <Feed item={item}/>
                    );
                })}
            </div>
        );
    }
}

export default App;