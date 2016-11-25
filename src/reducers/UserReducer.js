
const INITIAL_STATE = {
    user: null,
    status: null,
    error : null,
    loading: false
};

export default function(state = INITIAL_STATE, action) {
    var error;

    switch(action.type) {

        default:
            return state;
    }
}
