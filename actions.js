import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMBS_UP_COMMENT = 'THUMBS_UP_COMMENT';
export const THUMBS_DOWN_COMMENT = 'THUMBS_DOWN_COMMENT';

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

function removeComment() {
	return {
		type: REMOVE_COMMENT,
		id: uuid.v4()
	}
}

function editComment(text) {
	return {
		type: EDIT_COMMENT,
		text,
		id: uuid.v4()
	}
}

function thumbsUpComment() {
	return {
		type: THUMBS_UP_COMMENT,
		id: uuid.v4()
	}
}

function thumbsDownComment() {
	return {
		type: THUMBS_DOWN_COMMENT,
		id: uuid.v4()
	}
}
