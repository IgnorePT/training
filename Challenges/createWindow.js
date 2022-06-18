//Level 6 Kyu

// Make me a window. I'll give you a number (N). You return a window.
// Rules:
// The window will always be 2 x 2.
// The window needs to have N number of periods across and N number of periods vertically in each pane.

// Example:
// N = 3

// ---------
// |...|...|
// |...|...|
// |...|...|
// |---+---|
// |...|...|
// |...|...|
// |...|...|
// ---------
// Note: there should be no trailing new line characters at the end.


const getFrame = (windowSize) => "-".repeat(windowSize * 2 + 3);

const divider = (intersection) => (intersection) ? "+" : "|";

const windowGlass = (windowSize, isIntersection) => ((isIntersection) ? "-" : ".").repeat(windowSize);

const newLine = () => "\n";

const isIntersection = (num, i) => i == num;

function makeAWindow(num) {
  
  let window = "";
  
    window += getFrame(num) + newLine();
  
    for(var i = 0; i <= num * 2; i++){
      var windowInterception = isIntersection(num, i);
      window += divider() + windowGlass(num, windowInterception) +  divider(windowInterception) + windowGlass(num, windowInterception) + divider() + newLine();
    }
  
  window += getFrame(num);
  
  return window;
}