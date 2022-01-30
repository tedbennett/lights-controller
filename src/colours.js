export const colours = [
  ["#CC99C9", "#9EC1CF", "#9EE09E", "#FDFD97", "#FEB144", "#FF6663", "#F8D6A2"],
  ["#C47ADA", "#90BAEE", "#75BAFA", "#72D5BF", "#73DE8C", "#FBE66E", "#F5B969"],
  ["#AE44B7", "#5E7ABC", "#5E7ABC", "#4DACA9", "#63B75A", "#EDBD4A", "#EC9740"],
  ["#501B87", "#021B6B", "#0C2794", "#337277", "#ffffff", "#aaaaaa", "#000000"],
];

export const randomColour = () => {
  let flattened = colours.flat();
  let index = Math.floor(Math.random() * flattened.length);
  return flattened[index];
};
