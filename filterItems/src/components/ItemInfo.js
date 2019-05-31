import React from 'react';
import createClass from 'create-react-class';

var ClassInfo = createClass({

	getInitialState () {
		return {
		};
	},

	handleClick (event) {
    // button was clicked
  },

	printRating(rating) {
		var star = '<span alt="rating ' + rating +' out of 5">';
		for (var i=1; i <= 5; i++) {
			if (rating >= i) {
				star += '<img src="./images/star_Blue.png" width="15" height="15">';
			}
			else {
				star += '<img src="./images/star_Gray.png" width="15" height="15">';
			}
		}
		star += '</span>'
		return {__html: star};
	},
	printCategories(category) {
		var images = '';
		for (var i=0; i < category.length; i++) {
			switch (category[i]) {
				case "Writing": {
					images += '<img src="./images/book_writing_Blue.png" width="40" height="35" alt="'+category[i]+'"> ';
					break;
				}
				default: { break; }
			}
		}
		return {__html: images};
	},
	render() {
		if (this.props.options != null) {
			var label = this.props.options.label;
			var image = "./images/"+this.props.options.icon;
			var category = this.props.options.category;
			var color = this.props.options.color;
			var rating = this.props.options.rating;
			var price = this.props.options.price;
			var description = this.props.options.description;

			var itemsLeft = this.props.options.itemsLeft;

			var availableMessage = "";
			if (10 > itemsLeft) {
				availableMessage = "Only " + itemsLeft + " left!";
			}
			else if (itemsLeft == 0) {
				// the class is full
				availableMessage = "Sold Out!";
			}

			// use the ul and li tags for creating rows and columns in the view
			return (
				<div className="entry">
					<div className="grid-three">
						<div className="grid-three-columns image">
							<img className="image" src={image} />
						</div>
						<div className="grid-three-columns content">
							<div className="grid-two grid-full">
								<div className="grid-two-columns">
									<p className="name left">{label}</p>
								</div>
								<div className="grid-two-columns right">
									<span dangerouslySetInnerHTML={this.printRating(rating)} />

								</div>
							</div>

							<p className="small-text">{description}</p>

							<p className="right"><span dangerouslySetInnerHTML={this.printCategories(category)}></span></p>

						</div>
						<div className="grid-three-columns button-click">
							<p className="price center">${price}</p>
							<input className="button-click" data-value={label} type="button" value="Add To Cart" onClick={this.handleClick} />
							<p className="other-text right">{availableMessage}</p>
						</div>
					</div>
				</div>
			);
		}
		else {
			return (<div></div>);
		}
	}
});
export default ClassInfo;
