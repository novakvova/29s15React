import React from 'react';

class App extends React.Component {

    state = {
        user: {}
    };

    //fetch or axios
    componentDidMount() {
        fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
            .then(x => {
                console.log("---Валюта x---", x.json());
                //let data=x.json();
                //console.log("---Валюта x---", data);
                //console.log("---Валюта data---", x.data);
            });
    }

    render() {
        console.log("----props-----", this.props);
        let p=13;
        return (
            <div>
                <h1>Hello {p}</h1>
                <h2>Peter</h2>
            </div>
        );
    }
}

export default App;