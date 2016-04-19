var Search = React.createClass({
  handleFilter() {
    console.log('buttonclicked ' + this.refs.search.value);
    var searchTerm = this.refs.search.value;
    var user_id = this.props.user_id;
    var links = [];
    this.props.links.forEach(function(link) {
      if (link.title.includes(searchTerm)) { links.push(link); }
    });
    this.props.handleSearch(links);
  },

  render() {
    return (
      <div>
        <h1>Search Links</h1>
        <input ref='search' onKeyUp={this.handleFilter.bind(this)} placeholder='Search Links' />
      </div>
    );
  }
});
