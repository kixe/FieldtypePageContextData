$(document).ready(function() {	
	$(document).on('pw-modal-closed', function(e, eventData) {
		if(eventData.abort) return; // modal.js populates 'abort' if "x" button was clicked
		var target = $(e.target);			
		$field = $(this).closest('.InputfieldPage');		
		Inputfields.reload('.InputfieldPage');
	});
});