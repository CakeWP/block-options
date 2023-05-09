import { isEmpty, get } from "lodash";

/**
 * Checks if the given block type supports block locking.
 * 
 * @param {string} name - block name to check.
 * @return {boolean} true if locking is supported, otherwise false.
 */
export function isBlockSupportsLocking( name ) {
    const blockType = wp.blocks.getBlockType(name);
    if ( isEmpty(blockType) ) {
        return false;
    }

    return ! isEmpty( get( blockType, 'attributes.lock' ) );
}