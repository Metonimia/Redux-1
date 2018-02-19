import {ADD_COMMENT} from './actions'
import {REMOVE_COMMENT} from './actions'
import {EDIT_COMMENT} from './actions'
import {THUMBSUP_COMMENT} from './actions'
import {THUMBSDOWN_COMMENT} from './actions'

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
			return [{
				id: action.id,
				text: action.text,
				votes: 0
			}
			, ...state.comments]
			};
		case THUMBSUP_COMMENT:
			return [{
				id: action.id,
				votes: action.votes
			}
			, ...state.comments]
			};
		case THUMBSDOWN_COMMENT:
			return [{
				id: action.id,
				votes: action.votes
			}
			, ...state.comments]
			};
		default:
			return state;
	}
}