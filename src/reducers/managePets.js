export let state;


export function managePets(state = {pets: []}, action) {
  
}

export function dispatch(action) {
  state = managePets(state, action);
  render();
}

export function render() {

}
