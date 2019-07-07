import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {    
    render() { 
        const {onIncrement, onDelete, onReset, onDecrement} = this.props
        return (
            <React.Fragment>
                <button onClick={() => onReset()} className="btn btn-info">Reset</button>
                {this.props.counters.map(counter => 
                <Counter key={counter.id} value={counter.value} 
                onIncrement={(id) => onIncrement(id)}
                id={counter.id}
                onDecrement={(id) => onDecrement(id)}
                onDelete={(id) => onDelete(id)}>
                    <h4>Counter #{counter.id}</h4>
                </Counter>   
                )}
            </React.Fragment>
          );
    }
}
 
export default Counters;