import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './NavigationBar';

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <NavigationBar />
                {this.props.children}
            </div>
        );
    }
}

export default App;