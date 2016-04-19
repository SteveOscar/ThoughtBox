var Body = React.createClass({

  getInitialState() {
    return { links: [] }
  },

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/links/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeLinkFromDOM(id);
      }
    });
  },

  handleUpdate(link) {
    $.ajax({
      url: `/api/v1/links/${link.id}`,
      type: 'PUT',
      data: { link: link },
      success: () => {
        this.updateLinks(link)
      }
    });
  },

  updateLinks(link) {
    var links = this.state.links.filter((s) => { return s.id != link.id });
    links.push(link);

    this.setState({ links: links });
  },

  removeLinkFromDOM(id) {
    var newLinks = this.state.links.filter((link) => {
      return link.id != id;
    });

    this.setState({ links: newLinks });
  },

  componentDidMount() {
    $.getJSON('/api/v1/links.json', {link: { user_id: this.props.user_id }}, (response) => { this.setState({ links: response }) });
  },

  handleSubmit(link) {
    var newState = this.state.links.concat(link);
    this.setState({links: newState});
  },

  handleSearch(links) {
    this.setState({links: links});
  },

  render() {
    return (
      <div>
        <div>
          <NewLink user_id={this.props.user_id} handleSubmit={this.handleSubmit} />
        </div>
        <div>
          <Search user_id={this.props.user_id} links={this.state.links} handleSearch={this.handleSearch} />
        </div>
        <div>
          <AllLinks links={this.state.links} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
        </div>
      </div>
    );
  }
});
