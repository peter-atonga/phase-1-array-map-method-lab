const tutorials = [
];

const titleCased = () => {
  return tutorials
}
  return tutorials.map(tutorial => {
    return tutorial.split(' ').map(word => {
      // Capitalize the first letter of the word while keeping the rest of the characters as they are
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  });

console.log(titleCased());