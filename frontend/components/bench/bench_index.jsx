import React from 'react';
import BenchIndexItem from './bench_index_item.jsx';

class BenchIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    const { benches } = this.props;
    console.log(benches);
    return (
      <div>
        <ul>
          {benches.map(
            bench => <BenchIndexItem bench={bench} key={bench.id}/>
          )}
        </ul>
      </div>
    );
  }
}

export default BenchIndex;
