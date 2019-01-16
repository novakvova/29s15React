import React from 'react';

class App extends React.Component {

    state = {
        carency: []
    };

    //fetch or axios
    componentDidMount() {
        setTimeout(()=>{
            
            fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
            .then(x => {
                return x.json();
            })
            .then(data => {

                console.log("----data----", data);
                throw new Error("Hello Peter");
            })
            .catch(er=> {
                alert(`Помилка ${er.message}`)
            });
        }, 2000);
        
    }

    render() {
        console.log("----props-----", this.state);
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