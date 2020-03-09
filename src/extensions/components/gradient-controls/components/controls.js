/**
 * External dependencies
 */
import { count as wordcount } from '@wordpress/wordcount';
import { map } from 'lodash';

/**
 * Internal dependencies
 */
import icon from './icons';
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { withSelect, withDispatch, select, subscribe } = wp.data;
const { compose, ifCondition } = wp.compose;
const { Component, Fragment } = wp.element;
const { hasBlockSupport } = wp.blocks;
const { withSpokenMessages, IconButton, Tooltip } = wp.components;

const mediaBlocks = ['core/image', 'core/gallery', 'core/cover'];

/**
 * Render plugin
 */
class GradientControls extends Component {
	constructor() {
		super(...arguments);
		this.onCopy = this.onCopy.bind(this);
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickListener);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickListener);
	}

	handleClickListener(event) {

		const ButtonControls = () => {
			return (
				<Fragment>
					<Tooltip text={ __('Copy Gradient Value', 'block-options') }>
						<IconButton
							isSecondary
							isSmall
							icon={ icon.copy }
						>
						</IconButton>
					</Tooltip>

					<Tooltip text={__('Paste Gradient', 'block-options')}>
						<IconButton
							isSecondary
							isSmall
							icon={icon.paste}
						>
						</IconButton>
					</Tooltip>
				</Fragment>
			);
		};
		
		setTimeout(function () {

			const container = document.querySelector('.block-editor-color-gradient-control');
			const wrapper = document.querySelector('.components-circular-option-picker__custom-clear-wrapper');
			if (container && wrapper && !wrapper.classList.contains('ek-gradient-controls') ) {
				wrapper.classList.add('ek-gradient-controls');
				wrapper.insertAdjacentHTML('beforeend',
					'<div id="ek-gradient-controls-wrapper"></div>'
				);

				ReactDOM.render(
					<ButtonControls />,
					document.getElementById('ek-gradient-controls-wrapper')
				);
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

	onCopy(){
		console.log('copied');
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
