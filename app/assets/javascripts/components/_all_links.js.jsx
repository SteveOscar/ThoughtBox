var AllLinks = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  render () {
    var links = this.props.links.map((link) => {
      return (
        <div key={link.id}>
          <Link link={link}
                handleDelete={this.handleDelete.bind(this, link.id)}/>
        </div>
      );
    });

    return (
      <div>
        {links}
      </div>
    );
  }
});
