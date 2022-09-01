import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class CreateNotes extends Component {
	render() {
		return (
			<div
				className="flex flex-col items-center justify-center w-full h-full"
			>
				<CKEditor
					editor={ClassicEditor}
					config={{
						toolbar: [
							'heading',
							'|',
							'bold',
							'italic',
							'link',
							'bulletedList',
							'numberedList',
							'blockQuote',
							'ckfinder',
							'|',
							'imageTextAlternative',
							'imageUpload',
							'imageStyle:full',
							'imageStyle:side',
							'|',
							'mediaEmbed',
							'insertTable',
							'tableColumn',
							'tableRow',
							'mergeTableCells',
							'|',
							'undo',
							'redo',
						],
					}}					//
				/>
			</div>
		);
	}
}


export default CreateNotes;