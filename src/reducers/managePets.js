export let state;


export function managePets(state = {pets: []}, action) {
  switch(action.type) {
    case "ADD_PET":
      return state;
    case "REMOVE_PET"
      return state;
    default:
      return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action);
  render();
}

export function render() {
  
}
