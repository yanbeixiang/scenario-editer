export default function getMessage (state = {}, action) {
    switch (action.typpe) {
        case 'getMessage':
            return {};
        default:
            return state;
    }
}