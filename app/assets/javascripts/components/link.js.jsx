var Link = React.createClass({
  getInitialState() {
    return { editable: false };
  },

  handleEdit() {
    if (this.state.editable) {
      var title    = this.refs.title.value;
      var url = this.refs.url.value;
      this.onUpdate();
    }

    this.setState({ editable: !this.state.editable })
  },

  onUpdate() {
  if (this.state.editable) {
    var id      = this.props.link.id;
    var title    = this.refs.title.value;
    var url = this.refs.url.value;
    var level   = this.props.link.level;

    var link = {id: id, title: title, url: url, level: level }

    this.props.handleUpdate(link);
  }
    this.setState({ editable: !this.state.editable });
  },

  handleReadChange(action) {
    var title    = this.props.link.title;
    var url = this.props.link.url;
    var read   = this.props.link.read;
    if (read) {
      this.props.handleUpdate({id: this.props.link.id, title: title, url: url, read: false})
    } else {
      this.props.handleUpdate({id: this.props.link.id, title: title, url: url, read: true})
    }
  },

  render() {
    var title = this.state.editable ? <input ref='title' type='text' defaultValue={this.props.link.title} />
                                   : <h3>{this.props.link.title}</h3>;

    var url = this.state.editable ? <textarea ref='url' type='text' defaultValue={this.props.link.url}></textarea>
                                      : <p>{this.props.link.url}</p>;
    var color = this.props.link.read ? "btn btn-default btn-sm red" : "btn btn-default btn-sm white"
    return (
      <div>
        {title}

        <div className='link-level'>

            <span><strong>Read?:</strong> {this.props.link.read.toString()}

            <button type="button"
                    className={color}
                    onClick={this.handleReadChange.bind(this)}>
              <span className="glyphicon glyphicon-triangle-top"></span>
            </button>
            </span>

        </div>

        {url}

        <button onClick={this.props.handleDelete}>
          Delete
        </button>

        <button onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit' }</button>
      </div>
    )
  }
  });
