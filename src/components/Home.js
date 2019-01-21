import React from 'react';

class Home extends React.Component {
    state = {
        currency: [],
        isLoad: false,
        txtValue: {}
    };

    //fetch or axios
    componentDidMount() {
        this.setState({isLoad: true});
        setTimeout(()=>{

            fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
            .then(x => {
                return x.json();
            })
            .then(data => {

                console.log("----data----", data);
                this.setState({isLoad: false, currency: data});
                //throw new Error("Hello Peter");
            })
            .catch(er=> {
                alert(`Помилка ${er.message}`)
            });
        }, 2000);
        
    }

    onHandleChange = (e) => {
        //console.log("value", e.target.value);
        this.setState({txtValue: e.target.value});
    }

    onHandlerSelChange = (e) => {
        //console.log("---select on change---", e.target.value);
        const valSel=e.target.value;
        const ccy=this.state.currency.find((c)=>c.ccy===valSel);
        if(ccy)
        {
            alert(this.state.txtValue*ccy.buy);
        }

    }

    render() {
        console.log("----state-----", this.state);
        let p=13;
        const {isLoad} = this.state;

        const options = this.state.currency.map((c) => {
            return (
                <option key={c.ccy}>{c.ccy}</option>
            );
        });
        return (
            <div>
                <h1>Home Page App {p}</h1>
                <h2>Peter</h2>
                <input type="text" onChange={this.onHandleChange}/>
                {isLoad && <span>Loading...</span>}

                {!isLoad && 
                <select onChange={this.onHandlerSelChange}>
                    <option></option>
                    {options}
                </select>
                }
            </div>
        );
    }
}

export default Home;