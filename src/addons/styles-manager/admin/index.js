import React from 'react';
import { render } from '@wordpress/element';
import App from './app';

const root = document.querySelector('#gutenberghub-styles-manager-root');

if( root ) {
     render(<App />, root);
}
