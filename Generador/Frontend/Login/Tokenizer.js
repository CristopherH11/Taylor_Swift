var rand = function() {
  return Math.random().toString(36).substr(2); // remove `0.`
};

function generateToken() {
  return rand() + rand(); // to make it longer
}

export { generateToken };