import { head, memoize } from 'lodash';

/**
 * Generates an edit link for the given post.
 *
 * @param id Post id.
 */
export function getEditPostLink(id, term) {
	// @ts-ignore
	const permalink = gutenberghubStylesManager?.newPost ?? '';

	if ('' === permalink) {
		return '#';
	}

	const url = new URL(permalink);
	url.searchParams.append('post', id.toString());
	url.searchParams.append('action', 'edit');
	url.searchParams.append('block', term.slug);

	return url.toString();
}

/**
 * Obtains the target block.
 */
export const getTargetBlock = memoize(() => {
	const currentUrl = new URL(location.href);
	const currentBlock = currentUrl.searchParams.get('block');
	return currentBlock.replace('___', '/');
});

export const extractNamespaces = (terms) => {
	let namespaces = [];
	
	terms.forEach((term) => {
		const currentNamespace = head(term.slug.split('___'));
		
		if (!namespaces.includes(currentNamespace)) {
			namespaces.push(currentNamespace);
		}
	});
	
	return namespaces;
};

export const splitBlockTermsByNamespace = (terms) => {
	if (!Array.isArray(terms)) {
		return {};
	}

	const namespaces = extractNamespaces(terms);
	let chunks = {};

	namespaces.forEach((namespace) => {
		chunks[namespace] = terms.filter(
			(term) =>
				-1 !== term.slug.indexOf(namespace) &&
				false === term?.gsm_is_missing
		);
	});

	return chunks;
};

export function getNextDuplicateName(name) {
	// Regex to match a name ending with (number)
	const regex = /\((\d+)\)$/;

	// Check if the name matches the pattern "Title (number)"
	const matches = name.match(regex);

	if (matches) {
		// If the name matches the pattern, increase the number by 1
		const nextNumber = parseInt(matches[1]) + 1;
		return name.replace(regex, `(${nextNumber})`);
	} else {
		// If the name doesn't match the pattern, add (1) to the end
		return `${name} (1)`;
	}
}
