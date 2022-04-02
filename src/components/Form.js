import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    /* TODO - set initial state for link name and URL */
    this.state = {
      linkName: '',
      url: ''
    }
  }

  handleChange = (event) => {
    /* TODO - Logic for changing state based on form changes */
    var self = this;
    if(event.target.id === "link"){
      self.setState({linkName: event.target.value})
    }
    else
      self.setState({ url: event.target.value});

    console.log(this.state)
  }

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    /* TODO - Logic for calling props to handle submission and setting state changes */
    let newFavLink = {linkname: this.state.linkName, url: this.state.url};
    this.setState({ linkName: '', url: ''});
    this.props.addNew(newFavLink);
  }

  render() {
    return (
      <form>
        {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
        <label for="link"><pre>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Link Name :</pre></label>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<input type="text" id="link" onChange={(event) =>this.handleChange(event)}/> <br />
        <label for="url"><pre>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;URL :</pre></label> 
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<input type="text" id="url" onChange={(event) =>this.handleChange(event)}/> &nbsp; &nbsp; 
        <button type="submit" onClick={(event) => this.onFormSubmit(event)}>Submit</button>
      </form>
    )
  }
}

export default Form;
