import React from 'react';
import axios from 'axios';
import './App.css'

export default class PersonList extends React.Component {
  state = {
    details: []
  }

  componentDidMount() {
    let data;
    axios.get(`http://127.0.0.1:8000/`)
      .then(res => {
        data = res.data;
        this.setState({ details: data });
      })
  }

  render() {
    return (
      <div className='App'>
        <header>
          Django Generated Data :
        </header>
        <hr></hr>
        {this.state.details.map((output, id) => (
          <div key={id}>
            <div>
              <h2>
                {output.employee}
              </h2>
              <h3>
                {output.department}
              </h3>
            </div>
          </div>
        )
        )}
      </div>
    )
  }
}

// export default App;
