var AllLinks = React.createClass({
  render () {
    var links = this.props.links.map((link) => {
      return (
        <div key={link.id}>
          <Link link={link}/>
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
