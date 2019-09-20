/**
 * External dependencies
 */
import { count as wordcount } from '@wordpress/wordcount';

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
		const { content } = this.props;
		let words = wordcount(content, 'words', {});
		let button = document.querySelector('.table-of-contents button').getAttribute('aria-expanded');
		if (document.querySelector('.table-of-contents').contains(event.target) && button === 'false' ){
			let estimated = words / 275;
			console.log(estimated);
			var checkExist = setInterval(function () {
				if (document.querySelector('.table-of-contents__popover') ) {
					document.querySelector('.table-of-contents__counts').insertAdjacentHTML('beforeend',
						`<li class="table-of-contents__count table-of-contents__wordcount">Est. Reading Time<span class="table-of-contents__number">${estimated.toFixed() } min</span></li>`
					);
					clearInterval(checkExist);
				}
			}, 100); // check every 100ms
			
			// console.log(document.querySelector('.table-of-contents__popover'));
		}
	}

	initialize() {
		const { isDisabled, postmeta } = this.props;
	}

	render() {
		return null;
	}
}

export default compose([
	withSelect((select) => ({
		content: select('core/editor').getEditedPostAttribute('content'),
		isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitHeadingLabelWriting'),
	})),
	withSpokenMessages,
])(ReadingTime);
