export let state;


export function managePets(state = {pets: []}, action) {
  switch(action.type) {
    case "ADD_PET":
      return {
       pets: [...state.pets, action.pet]
      };
    case "REMOVE_PET":
      
    default:
      return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action);
  render();
}

export function render() {
  const main = document.getElementById('main');
  
  if (state.pets.length > 0) {
    const petsHtml = state.pets.map(pet => {
      return `<li>${pet.name}</li>`;
    });
    
    main.innerHTML = "<ul>";
    main.innerHTML += petsHtml.forEach(pet => pet);
    main.innerHTML += "</ul>";
  }
  
  return;
}
