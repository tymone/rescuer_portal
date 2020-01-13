export const addNewEmployee = name => {
  const input = document.querySelector(`.${name}`);
  input.classList.toggle("show");
};
