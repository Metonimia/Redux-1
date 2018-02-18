import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMBSUP_COMMENT = 'THUMBSUP_COMMENT';
const THUMBSDOWN_COMMENT = 'THUMBSDOWN_COMMENT';

{
	type: ADD_COMMENT,
	text: 'My comment'
}

{
	type: REMOVE_COMMENT,
	id: 20
}

{
	type: EDIT_COMMENT,
	id: 30,
	text: 'My edited comment'
}

{
	type: THUMBSUP_COMMENT,
	id: 40
}

{
	type: THUMBSDOWN_COMMENT,
	id: 50
}

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

function removeComment {
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

function thumbsupComment {
	return {
		type: THUMBSUP_COMMENT,
		id: uuid.v4()
	}
}

function thumbsdownComment {
	return {
		type: THUMBSDOWN_COMMENT,
		id: uuid.v4()
	}
}
