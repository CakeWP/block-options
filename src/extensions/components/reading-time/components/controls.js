/**
 * External dependencies
 */
import { count } from '@wordpress/wordcount';

/**
 * WordPress dependencies
 */
const { withSelect } = wp.data;
const { compose } = wp.compose;
const { Component } = wp.element;
const { withSpokenMessages } = wp.components;

/**
 * Render plugin
 */
class ReadingTime extends Component {
	constructor() {
		super(...arguments);
		this.initialize = this.initialize.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}
	componentDidMount() {
		this.initialize();
		document.addEventListener('mousedown', this.handleButtonClick);
	}

	componentDidUpdate() {
		this.initialize();
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleButtonClick);
	}

	handleButtonClick(event) {
		if (document.querySelector('.table-of-contents').contains(event.target) ){
			var checkExist = setInterval(function () {
				if ( document.querySelector('.table-of-contents__popover') ) {
					//insert prompt on header
					document.querySelector('.table-of-contents__counts').insertAdjacentHTML('beforeend',
						'<li class="table-of-contents__count">Est. Reading Time<span class="table-of-contents__number">10 min</span></li>'
					);
					clearInterval(checkExist);
				}
			}, 100); // check every 100ms
			// console.log(document.querySelector('.table-of-contents__popover'));
		}
	}

	initialize() {
		const { isDisabled, postmeta } = this.props;

		const tableOfContents = document.querySelector('.table-of-contents button');
		console.log(tableOfContents)
		if (tableOfContents) {
			console.log( tableOfContents );
		}
	}

	render() {
		return null;
	}
}

export default compose([
	withSelect((select) => ({
		isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitHeadingLabelWriting'),
	})),
	withSpokenMessages,
])(ReadingTime);
