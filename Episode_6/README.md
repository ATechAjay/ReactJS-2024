<!-- - Monolithic architecture
- Microservices
- Load > API call > Render
- Load > Render > API > Re-render -->

<!--
●
● What is Monolith architecture?
● What is the difference between Monolith and Microservice?
● Why do we need a useEffect Hook?
● What is Optional Chaining?
● What is Shimmer UI?
● What is the difference between JS expression and JS statement
● What is Conditional Rendering, explain with a code example
● What is CORS?
● What is async and await?
● What is the use of `const json = await data.json();` in getRestaurants()
Coding Assignment :
● Play with the useEffect Hook to see when it is called?(before or after render)
● Play with dependency array in useEffect Hook
● Play with the developer console by putting a debugger in render and useEffect
● Call an actual API to get data
● Handle Error in your API call
● Build Shimmer UI when data in not loaded
● Render your UI with actual API data
● Make Search functionality work
● Make a Login Logout button which toggles with a state -->

# What is Microservices?

Microservices is an architectural style for developing software applications as a collection of small, independent services that communicate with each other through APIs. Here are the key aspects:

1. Independence: Each microservice is a self-contained unit that can be developed, deployed, and scaled independently of other services.

2. Decentralization: Microservices decentralize the application, allowing for flexibility in development and deployment. Each service can use different technologies and can be updated without affecting the entire application.

3. Scalability: Microservices enable individual services to be scaled independently based on their specific needs, improving resource utilization.

4. Resilience: The failure of one microservice doesn't necessarily impact the entire application. Other services can continue to function, enhancing the overall resilience of the system.

5. Communication via APIs: Microservices communicate through well-defined APIs, exposing endpoints that other services can use to request or send data.

6. Technology Diversity: Microservices allow for the use of different technologies and programming languages for different services, optimizing each for specific tasks.

7. Easy Maintenance and Updates: Updates or changes to one microservice don't necessarily affect the entire application, making maintenance more straightforward.

### Scenarios in Web Development with ReactJS:

#### Load > API call > Render:

- When a React component loads, it initiates an asynchronous API call to a microservice, typically using lifecycle methods (`componentDidMount` for class components or `useEffect` for functional components with hooks).
- The component waits for the API response and, upon receiving the data, renders the content on the user interface.
- This pattern ensures that the UI remains responsive while fetching data.

#### Load > Render > API > Re-render:

- Initially, a React component renders with default or placeholder content.
- After rendering, the component triggers an API call to fetch additional or updated data.
- Upon receiving the response, the component re-renders with the new information, creating a dynamic user interface.
- This approach is useful when you want to display something quickly and then enhance it with real-time or dynamic data.

In the context of microservices, each of these API calls may be directed to a specific microservice responsible for providing the relevant data or functionality. The modular nature of microservices allows for independent development and deployment of different services, contributing to a scalable and maintainable web application architecture.
