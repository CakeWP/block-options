/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { createBlock } = wp.blocks;
const { select, dispatch } = wp.data;

const loremIpsum = {
	1: __('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'block-options' ),
	2: __('Enim facilisis gravida neque convallis a cras semper. Vulputate mi sit amet mauris commodo quis. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Velit ut tortor pretium viverra suspendisse potenti. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Curabitur vitae nunc sed velit dignissim sodales ut. Platea dictumst vestibulum rhoncus est. Auctor eu augue ut lectus arcu bibendum. Lacus suspendisse faucibus interdum posuere lorem. Risus pretium quam vulputate dignissim. Eu consequat ac felis donec. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Pharetra vel turpis nunc eget lorem dolor. Cursus risus at ultrices mi. Lacinia at quis risus sed vulputate odio. A diam maecenas sed enim ut sem viverra aliquet eget.', 'block-options' ),
	3: __('Eu sem integer vitae justo. Aliquam faucibus purus in massa tempor. Quis enim lobortis scelerisque fermentum dui faucibus in. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Diam sit amet nisl suscipit. Massa id neque aliquam vestibulum morbi blandit cursus risus. Non quam lacus suspendisse faucibus interdum posuere. Diam vel quam elementum pulvinar etiam non. Sem integer vitae justo eget magna fermentum. Iaculis nunc sed augue lacus viverra. Posuere ac ut consequat semper viverra nam libero justo. Dignissim diam quis enim lobortis scelerisque fermentum dui. Ut enim blandit volutpat maecenas volutpat. Cursus vitae congue mauris rhoncus. Turpis tincidunt id aliquet risus. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Non tellus orci ac auctor augue mauris augue neque. Neque sodales ut etiam sit amet nisl purus in mollis.', 'block-options' ),
	4: __('Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Risus commodo viverra maecenas accumsan lacus vel. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Id aliquet lectus proin nibh nisl condimentum id. A cras semper auctor neque. Enim facilisis gravida neque convallis a. Feugiat in fermentum posuere urna nec. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Turpis in eu mi bibendum neque egestas congue. Mattis aliquam faucibus purus in massa. In tellus integer feugiat scelerisque varius. Eu sem integer vitae justo eget magna. Lectus mauris ultrices eros in cursus turpis massa tincidunt dui.', 'block-options' ),
	5: __('Eros donec ac odio tempor orci dapibus ultrices. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Et ligula ullamcorper malesuada proin libero. Magna fermentum iaculis eu non diam phasellus vestibulum. Quisque non tellus orci ac auctor. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Bibendum neque egestas congue quisque egestas diam in arcu. In nisl nisi scelerisque eu. Vulputate sapien nec sagittis aliquam malesuada bibendum. Sapien faucibus et molestie ac feugiat sed lectus. Cras fermentum odio eu feugiat pretium nibh ipsum. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius.', 'block-options' ),
	6: __('Lobortis mattis aliquam faucibus purus in massa. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Mauris cursus mattis molestie a iaculis. Varius vel pharetra vel turpis nunc eget. Turpis egestas integer eget aliquet nibh praesent. Sit amet est placerat in. Dui nunc mattis enim ut tellus elementum. Fermentum odio eu feugiat pretium nibh ipsum. Blandit turpis cursus in hac habitasse. Cursus eget nunc scelerisque viverra. Praesent tristique magna sit amet purus. Senectus et netus et malesuada fames. Dui nunc mattis enim ut tellus elementum sagittis vitae. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Justo laoreet sit amet cursus sit amet. Scelerisque in dictum non consectetur. Suscipit adipiscing bibendum est ultricies.', 'block-options' ),
	7: __('Facilisi morbi tempus iaculis urna id volutpat lacus. Etiam dignissim diam quis enim. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Lacus vel facilisis volutpat est velit egestas dui. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Hendrerit dolor magna eget est lorem ipsum dolor sit. Vitae purus faucibus ornare suspendisse. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Donec ac odio tempor orci dapibus. Tempor orci eu lobortis elementum nibh. Elementum sagittis vitae et leo duis ut diam quam. Venenatis cras sed felis eget. Dignissim diam quis enim lobortis scelerisque fermentum dui.', 'block-options' ),
	8: __('Pretium nibh ipsum consequat nisl vel. Orci ac auctor augue mauris augue neque gravida in. Justo nec ultrices dui sapien eget. Dictum non consectetur a erat nam at lectus. Dui id ornare arcu odio ut sem nulla pharetra. Enim neque volutpat ac tincidunt vitae. Auctor augue mauris augue neque gravida. Gravida dictum fusce ut placerat orci nulla pellentesque. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Nunc mi ipsum faucibus vitae aliquet. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Commodo elit at imperdiet dui accumsan sit amet. Tempor id eu nisl nunc mi ipsum faucibus. Euismod lacinia at quis risus sed. Diam phasellus vestibulum lorem sed risus ultricies. Elementum curabitur vitae nunc sed velit. Viverra justo nec ultrices dui sapien eget mi.', 'block-options' ),
	9: __('Venenatis lectus magna fringilla urna. Scelerisque felis imperdiet proin fermentum leo vel. Facilisi morbi tempus iaculis urna id. Diam quam nulla porttitor massa id neque aliquam. Etiam non quam lacus suspendisse faucibus. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Quam nulla porttitor massa id neque. Mauris cursus mattis molestie a. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Aenean euismod elementum nisi quis eleifend quam adipiscing. Diam volutpat commodo sed egestas egestas. Id aliquet lectus proin nibh nisl condimentum.', 'block-options' ),
	10: __('Sit amet venenatis urna cursus eget nunc scelerisque viverra. Lobortis elementum nibh tellus molestie. Varius quam quisque id diam vel. Pharetra convallis posuere morbi leo urna molestie at elementum. Sit amet nisl suscipit adipiscing bibendum est ultricies. Malesuada fames ac turpis egestas. Nisi vitae suscipit tellus mauris a diam maecenas sed. Odio euismod lacinia at quis risus sed. Tellus elementum sagittis vitae et leo duis. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. A lacus vestibulum sed arcu non odio euismod lacinia. Sapien et ligula ullamcorper malesuada proin libero nunc. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Vitae tortor condimentum lacinia quis. Orci ac auctor augue mauris augue neque gravida in. Tincidunt augue interdum velit euismod in. Auctor eu augue ut lectus arcu bibendum at varius.', 'block-options' ),
};

const transforms = {
	from: [
		{
			type: 'prefix',
			prefix: ':lorem',
			transform: function () {
				return createBlock('core/paragraph', {
					content: loremIpsum[1],
				});
			},
		},
		...[2, 3, 4, 5, 6, 7, 8, 9, 10].map((columns) => ({
			type: 'prefix',
			prefix: Array(columns + 1).join(':') + 'lorem',
			transform() {
				const toSelect = [];
				const blockIndex = select('core/block-editor').getBlockInsertionPoint();
				const selectedBlock = select('core/block-editor').getSelectedBlockClientId();

				for (var i = 1; i <= columns; i++) {
					const created = createBlock('core/paragraph', {
						content: loremIpsum[i],
					});

					dispatch('core/block-editor').insertBlocks(created, ( parseInt(blockIndex.index) + i ) - 1 );

					if (typeof created !== 'undefined') {
						toSelect.push(created.clientId);
					}
				}
				dispatch('core/block-editor').removeBlock(selectedBlock);

				return dispatch('core/block-editor').multiSelect(toSelect[0], toSelect.reverse()[0]); 
			},
		})),
	],
};

export default transforms;
