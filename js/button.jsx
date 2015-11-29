
var React = require('react');

var Button = React.createClass({
 plus: function(){
   this.setState({
     count: this.state.count + 1
   });
 },
 getInitialState: function(){
    return {
      count: 0
    }
 },
 render: function() {
   var like = "likes"
   if(this.state.count === 1) {
     like = " like";
   }
   return (
     <button type="button" onClick={this.plus}>{this.state.count + " like"}</button>
     )
 }
});

module.exports = Button;