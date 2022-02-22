### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    javascript front end framework. best used when you have a site with a lot of similar pieces so you don't have to code each one individually
- What is Babel?
    translates modern JS into pre es2015 JS to insure cross-browser compatibility 
- What is JSX?
    allows you to write and create HTML elements directly inside of a JS file
- How is a Component created in React?
    either through function or class, but functional components are easier to work with and offer greater flexibility
- What are some difference between state and props?
    props are passed down from a parent comp to a child comp and control minor differences in how it is rendered. state can be a prop. it allows us to change behavior of literally anything we want. we declare the state variable and then the function to change it. we can call that function whenever and wherever we want as long as it's passed down to the comp that needs to call it. Changing state will always cause a re-render. If we don't want to change state all the time, we put it in a useEffect loop
- What does "downward data flow" refer to in React?
    start with all your logic, states, fuctions, refs, etc on the highest level component possible and move them down only if needed
- What is a controlled component?
    react knows every time anything is changed
- What is an uncontrolled component?
    react only learns about a change after, for example, some event
- What is the purpose of the `key` prop when rendering a list of components?
    to give each comp a unique identifier so react can tell the difference btw them
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    several reasons, first is that the indicies could change when the array changes, second is that you couldn't render more than one version of that comp because the second version would have the same keys
- Describe useEffect.  What use cases is it used for in React components?
    I already explained this earlier, but basically it allows us to control when actions happen rather than having everything happen on every single render or on an event or whatever
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    basically it creates a piece of info that funcitons like a global variable without actualy being a global variable because global variables === bad. we can change its value anytime using <ref>.current
- When would you use a ref? When wouldn't you use one?
    use ref when you need a piece of info to persist across comps and subsequent renders. do not use ref for DOM manipulation unless you have zero other options
- What is a custom hook in React? When would you want to write one?
    basically just a way to move commonly used functions out of your comps so you can call them quickly on any comp and save a lot of lines
