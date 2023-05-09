import { dispatch } from '@wordpress/data';

export function dragElement( elmnt, handle, removeDragging = false ) {
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;

	if ( removeDragging ) {
		const handleElement = elmnt.querySelector( handle );

		if ( handleElement ) {
			handleElement.removeEventListener( 'mousedown', dragMouseDown );
		}

		document.removeEventListener( 'mouseup', closeDragElement );
		document.removeEventListener( 'mousemove', elementDrag );

		return;
	}

	if ( elmnt.querySelector( handle ) ) {
		// if present, the header is where you move the DIV from:
		elmnt.querySelector( handle ).onmousedown = dragMouseDown;
	} else {
		// otherwise, move the DIV from anywhere inside the DIV:
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown( e ) {
		e = e || window.event;
		e.preventDefault();

		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function getCalculatedPosition( e ) {
		e = e || window.event;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;

		return {
			top: ( elmnt.offsetTop - pos2 ) + 'px',
			left: ( elmnt.offsetLeft - pos1 ) + 'px',
		};
	}

	function elementDrag( e ) {
		const pos = getCalculatedPosition( e );

		const shouldDrag = elmnt.classList.contains( 'editorskit-is-detached' );

		if ( shouldDrag ) {
			// set the element's new position:
			elmnt.style.top = pos.top;
			elmnt.style.left = pos.left;
		}
	}

	function closeDragElement( event ) {
		// stop moving when mouse button is released:
		document.onmouseup = null;
		document.onmousemove = null;

		const pos = getCalculatedPosition( event );
		// updating the position.
		dispatch( 'core/editor' ).editPost( {
			meta: {
				_editorskit_block_options_position: JSON.stringify( {
					top: pos.top,
					left: pos.left,
				} ),
			},
		} );
	}
}

