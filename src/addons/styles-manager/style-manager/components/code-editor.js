import React, { useEffect, useRef } from 'react';

function CodeEditor({ onChange, initialValue = '', mode = 'css' }) {
	const textareaRef = useRef(null);
	const editorRef = useRef(null); // Ref to store the editor instance

	// Initialization effect
	useEffect(() => {
	
		if (!wp || !wp.codeEditor) return;
		if (editorRef.current) return; // Prevent re-initialization

	
		const editorSettings = wp.codeEditor.defaultSettings
			?
			  { ...wp.codeEditor.defaultSettings }
			: {};

		editorSettings.codemirror = {
			...editorSettings.codemirror,
			indentUnit: 2,
			tabSize: 2,
			mode: mode,
		};

	
		editorRef.current = wp.codeEditor.initialize(
			textareaRef.current,
			editorSettings
		);

		// Set the initial value
		editorRef.current.codemirror.setValue(initialValue);

	
		editorRef.current.codemirror.setSize(null, 500);
	}, []); // Empty dependencies to ensure this runs only once

	// Effect for setting event listeners and cleanup
	useEffect(() => {
		if (!editorRef.current) return;

	
		editorRef.current.codemirror.on('change', (cm) => {
			const currentValue = cm.getValue();
			if (onChange) {
				onChange(currentValue);
			}
		});

		return () => {
			if (editorRef.current && editorRef.current.codemirror) {
				editorRef.current.codemirror.off('change');
			}
		};
	}, [onChange]);

	useEffect(() => {
		return () => {
			if (editorRef.current && editorRef.current.codemirror) {
				editorRef.current.codemirror.toTextArea();
			}
		};
	}, []);

	return (
		<textarea
			ref={textareaRef}
			style={{ width: '100%', height: '600px' }}
		></textarea>
	);
}

export default CodeEditor;
