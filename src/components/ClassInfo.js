import React from 'react';
import createClass from 'create-react-class';

var ClassInfo = createClass({

	getInitialState () {
		return {
		};
	},

	handleClick (event) {
    this.props.addClass(event.currentTarget.dataset.value);
  },

	printRating(rating) {
		var star = '<span alt="rating ' + rating +' out of 5">';
		for (var i=1; i <= 5; i++) {
			if (rating > i) {
				star += '<img src="./images/star_Blue.png" width="15" height="15">';
			}
			else {
				star += '<img src="./images/star_Gray.png" width="15" height="15">';
			}
		}
		star += '</span>'
		return {__html: star};
	},
	printSkills(skills) {
		var images = '';
		for (var i=0; i < skills.length; i++) {
			switch (skills[i]) {
				case "Writing": {
					images += '<img src="./images/book_writing_Blue.png" width="35" height="35" alt="'+skills[i]+'"> ';
					break;
				}
				case "Algorithms": {
					images += '<img src="./images/active_directory_forest_Blue.png" width="35" height="35" alt="'+skills[i]+'"> ';
					break;
				}
				case "Reading": {
					images += '<img src="./images/books_Blue.png" width="35" height="35" alt="'+skills[i]+'"> ';
					break;
				}
				case "Calculus": {
					images += '<img src="./images/calculator_Blue.png" width="35" height="35" alt="'+skills[i]+'"> ';
					break;
				}
				case "Drawing": {
					images += '<img src="./images/color_palette_Blue.png" width="35" height="35" alt="'+skills[i]+'"> ';
					break;
				}
				case "Coding": {
					images += '<img src="./images/code_Blue.png" width="35" height="35" alt="'+skills[i]+'"> ';
					break;
				}
				case "Ethics": {
					images += '<img src="./images/government_building_Blue.png" width="35" height="35" alt="'+skills[i]+'"> ';
					break;
				}
				case "Problem Solving": {
					images += '<img src="./images/puzzle_apart_Blue.png" width="35" height="35" alt="'+skills[i]+'"> ';
					break;
				}
				case "Robotics": {
					images += '<img src="./images/robot_Blue.png" width="35" height="35" alt="'+skills[i]+'"> ';
					break;
				}
				case "VR": {
					images += '<img src="./images/virtual_reality_headset_Blue.png" width="35" height="35" alt="'+skills[i]+'"> ';
					break;
				}
				case "Algebra": {
					images += '<img src="./images/variables_Blue.png" width="35" height="35" alt="'+skills[i]+'"> ';
					break;
				}
				case "Mobile": {
					images += '<img src="./images/smartphone_1_Blue.png" width="35" height="35" alt="'+skills[i]+'"> ';
					break;
				}
				case "Gaming": {
					images += '<img src="./images/game_development_Blue.png" width="35" height="35" alt="'+skills[i]+'"> ';
					break;
				}
				case "Debugging": {
					images += '<img src="./images/debug_Blue.png" width="35" height="35" alt="'+skills[i]+'"> ';
					break;
				}
				case "Command Line": {
					images += '<img src="./images/command_console_Blue.png" width="35" height="35" alt="'+skills[i]+'"> ';
					break;
				}
			}
		}
		return {__html: images};
	},
	printContent(content) {
		var images = "";
		for (var i=0; i < content.length; i++) {
			switch (content[i] ){
				case "Assignments": {
					images += '<img src="./images/book_writing_Blue.png" width="35" height="35" alt="'+content[i]+'"> ';
					break;
				}
				case "Tests": {
					images += '<img src="./images/books_Blue.png" width="35" height="35" alt="'+content[i]+'"> ';
					break;
				}
				case "Group Projects": {
					images += '<img src="./images/person_pair_014_i_iv_Blue.png" width="35" height="35" alt="'+content[i]+'"> ';
					break;
				}
				case "Discussion": {
					images += '<img src="./images/comment_3_Blue.png" width="35" height="35" alt="'+content[i]+'"> ';
					break;
				}
				case "Individual Projects": {
					images += '<img src="./images/person_professional_1_i_Blue.png" width="35" height="35" alt="'+content[i]+'"> ';
					break;
				}
				case "Lectures": {
					images += '<img src="./images/online_video_Blue.png" width="35" height="35" alt="'+content[i]+'"> ';
					break;
				}
			}
		}
		return {__html: images};
	},
	render() {
		if (this.props.options != null) {
			var label = this.props.options.label;
			var skills = this.props.options.skills;
			var content = this.props.options.content;
			var rating = this.props.options.rating;
			var classSize = this.props.options.classSize;
			var description = this.props.options.description;
			// use the ul and li tags for creating rows and columns in the view
			return (
				<div className="entry">
					<table>
					<tbody>
						<tr>
							<td>
								<span dangerouslySetInnerHTML={this.printRating(rating)} />
							</td>
							<td>
								<p className="left name">{label}</p>
							</td>
							<td className="right">
								<input className="button-click" data-value={label} type="button" value="Take This Class" onClick={this.handleClick} />
								<p className="other-text right">{classSize} out of 350 spaces available</p>
							</td>
						</tr>
						</tbody>
					</table>
					<table>
					<tbody>
						<tr>
							<td className="top">
								<p className="small-text">{description}</p>
							</td>
							<td width="150px">
								<p className="left"><span dangerouslySetInnerHTML={this.printSkills(skills)}></span></p>
								<p className="left"><span dangerouslySetInnerHTML={this.printContent(content)}></span></p>
							</td>
						</tr>
						</tbody>
					</table>
				</div>
			);
		}
		else {
			return (<div></div>);
		}
	}
});
export default ClassInfo;