import React, {Component} from 'react';
import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters'

class App extends Component {
  state = {
    counters: [
        { id: 1, value: 10},
        { id: 2, value: 0},
        { id: 3, value: 8},
        { id: 4, value: 3}
    ]
  };

  handleDelete = counterId => {
    this.setState({
        counters: this.state.counters.filter( c => c.id !== counterId)
    })
  };

  handleIncrement = counterId => {
    const counters = [...this.state.counters];
    const indexOfChanged = counters.map(c => c.id ).indexOf(counterId);
    counters[indexOfChanged].value++;
    this.setState({counters});
  };

  handleReset = () => {
    const counters = this.state.counters.map( c => {
      c.value = 0;
      return c;
      });
    this.setState({counters});
  };

  handleDecrement = counterId =>{
    const counters = [...this.state.counters];
    const indexOfChanged = counters.map(c => c.id).indexOf(counterId);
    counters[indexOfChanged].value--;
    this.setState({counters});
  }


  render(){
    return (
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main>
          <Counters
            counters={this.state.counters}
            onDecrement={(id) => this.handleDecrement(id)}
            onIncrement={(id) => this.handleIncrement(id)}
            onReset={() => this.handleReset()}
            onDelete={(id) => this.handleDelete(id)}
          />
        </main>
      </React.Fragment>
    );
  }

}

export default App;
