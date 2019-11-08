1. What problem does the context API help solve?
 context API allows you to control state and prevents you from prop drilling. 
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions - allow you to send state management calls to your components
reducers - Allows you to pass only required information from state
store - source of truth, because it holds all state in an application. Think of it like a warehouse that gives supplies to every restaurant in town. 
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Component state is simple, and easier to use in smaller projects. However, when projets get bigger, it becomes harder to pass down information via props. So, thats where application state comes in. 
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
 Redux thunk is a middleware  that helps us manage application state. It does so by allowing us to pass our action creators into the middleware, and from there on, dispatching actions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
Redux - still not 100% there, but its starting to make more sense. I see the benefits of this in larger projects, and im excited to implement them. 
