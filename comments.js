import { ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMBS_UP_COMMENT, THUMBS_DOWN_COMMENT } from './actions';

function comments(state = [], action) {
	switch(action.type) {
		case ADD_COMMENT:
			return [{
					id: action.id,
					text: action.text,
					votes: 0
				}
				, ...state.comments]
			};
		case REMOVE_COMMENT:
			return {
				comments: state.comments.filter(comment => comment.id !== action.id)
			};
		case EDIT_COMMENT:
			return {
				comments: state.comments.map(comment => (comment.id === action.id ? { ...comment, text: action.text} : comment)
			};
		case THUMBS_UP_COMMENT:
			return {
				comments: state.comments.map(comment => (comment.id === action.id) ? { ...comment, comments.votes: comments.votes + 1} : comment)
			};
		case THUMBS_DOWN_COMMENT:
			return {
				comments: state.comments.map(comment => (comment.id === action.id) ? { ...comment, comments.votes: comments.votes - 1} : comment)
			};
		default:
			return state;
	}
}