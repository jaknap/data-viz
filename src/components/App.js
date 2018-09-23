import React, {
    Component
} from 'react';
import '../styles/App.css';
import Chart from './Chart'

const API_URL = "https://nataliia-radina.github.io/react-vis-example/";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
            lang: 'Java'
        };
        this.handleSelect = this.handleSelect.bind(this);

    }

    handleSelect(event) {
        this.setState({
            lang: event.target.value
        });
        console.log(this.state.lang);
        fetch(API_URL)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('something went wrong')
                }
            })
            .then(response => this.setState({
                    results: response.results
                        .filter((r) => {
                            return r.name === this.state.lang;
                        })
                })
                //console.log(results);
            )

    }

    componentDidMount() {

        fetch(API_URL)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('something went wrong')
                }
            })
            .then(response => this.setState({
                    results: response.results
                        .filter((r) => {
                            return r.name === this.state.lang;
                        })
                })
                //console.log(results);
            )
    }

    render() {
        const {
            results
        } = this.state;

        return (

            <div className = "App" >

            <select value = {
                this.state.lang
            }
            onChange = {
                this.handleSelect
            }>
            <option > Python </option> 
            <option > C++ </option> 
            <option > Ruby </option> 
            </select> 
            <Chart data = {
                results
            }
            /> 
            </div>
        );
    }
}

export default App;