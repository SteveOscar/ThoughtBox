var NewLink = React.createClass({
  handleClick() {
    console.log('buttonclicked ' + this.refs.title.value + this.refs.url.value)
    var title = this.refs.title.value;
    var url = this.refs.url.value;
    var user_id = this.props.user_id;

    $.ajax({
      url: '/api/v1/links',
      type: 'POST',
      data: { link: { title: title, url: url, user_id: user_id } },
      success: (link) => {
        this.props.handleSubmit(link);
      }
    });
  },

  render() {
    return (
      <div>
        <h2>Add New Link</h2>
        <input ref='title' placeholder='Enter link title' />
        <input ref='url' placeholder='URL' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
});
