/**
 * External dependencies
 */
/**
 * WordPress dependencies
 */
import { count as wordcount } from '@wordpress/wordcount';
import { map } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { withSelect, withDispatch, select, subscribe } = wp.data;
const { compose, ifCondition } = wp.compose;
const { Component } = wp.element;
const { hasBlockSupport } = wp.blocks;
const { withSpokenMessages } = wp.components;

const mediaBlocks = ['core/image', 'core/gallery', 'core/cover'];

/**
 * Render plugin
 */
class GradientControls extends Component {
	constructor() {
		super(...arguments);
		// this.updateMeta = this.updateMeta.bind(this);
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleButtonClick);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleButtonClick);
	}

	handleButtonClick(event) {
		
		setTimeout(function () {

			const container = document.querySelector('.block-editor-color-gradient-control');
			const wrapper = document.querySelector('.components-circular-option-picker__custom-clear-wrapper');
			if ( container && wrapper ) {
				// container.remove();
			}

		}, 150);
		
		// if (document.querySelector('.table-of-contents').contains(event.target) && button === 'false') {
		// 	const estimated = this.calculateReadingTime();

		// 	const checkExist = setInterval(function () {
		// 		if (document.querySelector('.table-of-contents__popover')) {
		// 			document.querySelector('.table-of-contents__counts').insertAdjacentHTML('beforeend',
		// 				`<li class="table-of-contents__count table-of-contents__wordcount">${__('Reading Time', 'block-options')}<span class="table-of-contents__number">${estimated} min</span></li>`
		// 			);
		// 			clearInterval(checkExist);
		// 		}
		// 	}, 100); // check every 100ms
		// }
	}

	render() {
		return null;
	}
}

export default compose([
	withSelect(() => ({
		content: select('core/editor').getEditedPostAttribute('content'),
		blocks: select('core/editor').getEditedPostAttribute('blocks'),
	})),
	withDispatch((dispatch) => {
		return {
			updateReadingTime(estimated) {
				dispatch('core/editor').editPost({
					meta: {
						_editorskit_reading_time: estimated,
					},
				});
			},
		};
	}),
	// ifCondition((props) => {
	// 	return !props.isDisabled;
	// }),
	withSpokenMessages,
])(GradientControls);
