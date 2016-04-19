var Sort = React.createClass({
  handleSort() {

    function dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }
    var links = this.props.links.sort(dynamicSort("title"));
    debugger
    this.props.handleSort(links);
  },

  render() {
    return (
      <div>
      <button type="button"
              className="red"
              onClick={this.handleSort.bind(this)}>Sort
      </button>
      </div>
    );
  }
});
