var Body = React.createClass({

  getInitialState() {
    return { links: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/links.json',
              {user_id: this.props.user_id},
              (response) => { this.setState({ links: response }) });
  },

  render() {
    return (
      <div>

        <div>
          <AllLinks links={this.state.links} />
        </div>
      </div>
    );
  }
});
