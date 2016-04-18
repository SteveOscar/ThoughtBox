var Link = React.createClass({
  getInitialState() {
    return { editable: false };
  },

  render() {
    var title = this.state.editable ? <input ref='title' type='text' defaultValue={this.props.link.title} />
                                   : <h3 className='link-title'>{this.props.link.title}</h3>;

    var url = this.state.editable ? <textarea ref='url' type='text' defaultValue={this.props.link.url}></textarea>
                                      : <p>{this.props.link.url}</p>;
    return (
      <div>
        {title}

        <div className='link-level'>

            <p><strong>Read?:</strong> {this.props.link.read}</p>

          <button type="button"
                  className="btn btn-default btn-sm"
                  >
            <span className="glyphicon glyphicon-triangle-top"></span>
          </button>
        </div>

        {url}

        <button onClick={this.props.handleDelete}>
          Delete
        </button>

        <button onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit' }</button>
      </div>
      );
    }
  });
