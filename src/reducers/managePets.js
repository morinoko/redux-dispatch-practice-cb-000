export let state;


export function managePets(state = {pets: []}, action) {
  switch(action.type) {
    case "ADD_PET":
      return {
       pets: [...state.pets, action.pet]
      };
    case "REMOVE_PET":
      let removalIndex = state.pets.findIndex(pet => pet.id === action.id);
      return {
        pets: [
          ...state.pets.slice(0, removalIndex),
          ...state.pets.slice(removalIndex + 1)
        ]
      }
    default:
      return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action);
  render();
}

export function render() {
  const container = document.getElementById('container');
  
  container.innerHTML = "<ul>";
  
  if (state.pets.length > 0) {
    state.pets.forEach(pet => {
      container.innerHTML += `<li>${pet.name}</li>`;
    });
  }
  
  container.innerHTML += "</ul>";
}
