var AllLinks = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  handleEdit(id) {
    this.props.handleEdit(id);
  },

  onUpdate(link) {
    console.log('in all links onUPdate function')
    this.props.handleUpdate(link);
  },

  render () {
    var links = this.props.links.map((link) => {
      return (
        <div key={link.id}>
          <Link link={link}
                 handleDelete={this.handleDelete.bind(this, link.id)}
                 handleUpdate={this.onUpdate}/>
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
