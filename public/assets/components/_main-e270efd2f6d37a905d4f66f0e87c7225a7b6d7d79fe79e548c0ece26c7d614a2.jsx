var Main = React.createClass({
  render() {
    return(
      <div class="container">
        <div>
          <Body user_id={this.props.user_id} />
        </div>
      </div>
    );
  }
});
