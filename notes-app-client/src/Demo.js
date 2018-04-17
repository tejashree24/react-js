import React from 'react';

class Demo extends React.Component{
	constructor(){
		super();
		this.state = {
			data: 
			[
				{
					"bookName" : "javascript",
					"bookAuthor" : "qwe",
					"price": "1"
				},
				{
					"bookName" : "angular",
					"bookAuthor" : "qwe",
					"price": "2"
				},
				{
					"bookName" : "react",
					"bookAuthor" : "qwe",
					"price": "3"
				}
			]
		}
	}

	render(){
		return (
			<div>
				<Header />
				<Insert onUserInput={this.handleUserInput} />
				
			</div>
			);
	}
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Book listing</h1>
         </div>
      );
   }
}
class Insert extends React.Component {
	handleClick(){
		this.props.onUserInput(this.refs.bookname.value, this.refs.bookauthor.value,this.refs.price.value);
	}
	render(){
		return (
			<form>
				<input type="text" name="bookName" placeholder="Book Name" ref="bookname" /> &nbsp;
				<input type="text" name="bookAuthor" placeholder="Book Author" ref="bookauthor" /> &nbsp;
				<input type="text" name="price" placeholder="Book Price" ref="price" /> &nbsp;
				<button onClick="{this.handleClick}">
					Add
				</button>
			</form>
			)
	}
}

export default Demo;
