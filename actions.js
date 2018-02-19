import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMBSUP_COMMENT = 'THUMBSUP_COMMENT';
export const THUMBSDOWN_COMMENT = 'THUMBSDOWN_COMMENT';

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
	votes: +1
}

{
	type: THUMBSDOWN_COMMENT,
	votes: -1
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
		votes,
		id: uuid.v4()
	}
}

function thumbsdownComment {
	return {
		type: THUMBSDOWN_COMMENT,
		votes,
		id: uuid.v4()
	}
}
