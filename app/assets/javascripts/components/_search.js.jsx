// var Search = React.createClass({
//   handleFilter() {
//     console.log('buttonclicked ' + this.refs.search.value)
//     var searchTerm = this.refs.search.value;
//     var user_id = this.props.user_id;
//
//     $.ajax({
//       url: '/api/v1/links',
//       type: 'POST',
//       data: { link: { title: title, url: url, user_id: user_id } },
//       success: (link) => {
//         this.props.handleSearch(searchTerm);
//       }
//     });
//   },
//
//   render() {
//     return (
//       <div>
//         <input ref='search' onKeyUp={this.handleFilter} placeholder='Search Links' />
//       </div>
//     );
//   }
// });
