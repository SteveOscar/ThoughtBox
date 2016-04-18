var Body = React.createClass({

  getInitialState() {
    return { links: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/links.json',
              {user_id: this.props.user_id},
              (response) => { this.setState({ links: response }) });
  },

  handleSubmit(link) {
    var newState = this.state.links.concat(link);
    this.setState({links: newState})
  },
  
  render() {
    return (
      <div>
        <div>
          <NewLink user_id={this.props.user_id} handleSubmit={this.handleSubmit} />
        </div>
        <div>
          <AllLinks links={this.state.links} />
        </div>
      </div>
    );
  }
});
