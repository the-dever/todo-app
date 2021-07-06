'use strict';

const todos = getSavedTodos();

const filters = {
  searchText: '',
  hideCompleted: false,
};

renderTodos(todos, filters);

// Listen for todo text input change
document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector('#new-todo').addEventListener('submit', function (e) {
  e.preventDefault();
  const text = e.target.elements.text.value.trim();
  if (!text.length > 0) return;
  todos.push({
    id: uuidv4(),
    text,
    completed: false,
  });
  saveTodos(todos);
  renderTodos(todos, filters);
  e.target.elements.text.value = '';
});

document.querySelector('#hide').addEventListener('change', function (e) {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});
