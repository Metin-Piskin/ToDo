export default function (state, action) {
    switch (action.type) {
        case "ADD_LIST":
            const { name } = action.payload;
            const newList = [...state.TODOList, name];
            return { ...state, TODOList: newList };

        case "CLEAN_LIST":
            return { ...state, TODOList: [] };

        default:
            return state;
    }
}