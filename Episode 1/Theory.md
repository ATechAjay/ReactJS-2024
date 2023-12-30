# What is Emmet?

Emmet is a web developer's toolkit that can greatly improve your HTML and CSS workflow. Emmet takes the snippet idea to a whole new level. You can type a CSS-like expression that can be dynamically parsed and produce output depending on what you type in the abbreviation.

It is developed and optimized for web developers whose workflow depends on HTML and CSS, but it can be used with programming languages too. Such as:

```html
<!-- #id -->
<div id="id"></div>

<!-- .class -->
<div class="class"></div>

<!-- .box[title="Important"] -->
<div class="box" title="Important"></div>

<!-- .parent>.child -->
<div class="parent">
  <div class="child"></div>
</div>

<!-- .parent{Box-$}*3 -->
<div class="parent">Box-1</div>
<div class="parent">Box-2</div>
<div class="parent">Box-3</div>

<!-- div>a[href='#']{Click me} -->
<div>
  <a href="#">Click me</a>
</div>

<!-- .parent>.child{1}+.child{2} -->
<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
</div>

<!-- ul>(li>a[href='#'])+(li>a[href="#"])+p{lorem} -->
<ul>
  <li><a href="#"></a></li>
  <li><a href="#"></a></li>
  <p>lorem</p>
</ul>

<!-- ul>(li>a[href='#'])*5 -->
<ul>
  <li><a href="#"></a></li>
  <li><a href="#"></a></li>
  <li><a href="#"></a></li>
  <li><a href="#"></a></li>
  <li><a href="#"></a></li>
</ul>
```

# Difference between a Library and Framework?

Library is like building your home from the ground up. The house can be made in any style you prefer and the rooms can be arranged and decorated however you like. Framework, on the other hand, is like buying a new home. The house is already built, so you don’t have to worry about building problems, but you can’t choose how the rooms are arranged.

By using a library, we control the flow of the program. The library can be invoked whenever and wherever you like. Contrary to this, when you use a framework, the flow is controlled by the framework.

##### What is Framework?

A framework is like the foundation upon which developers build applications for specific platforms. It includes reusable pieces of code written to perform common tasks and uses code provided by a developer for custom functionality. The framework may include defined and undefined objects and functions that developers can use to create applications. In that way, we can add significant functionality to the system by using existing code around the structure.

##### Why do we use Frameworks?

Software development is a complex process. This involves a lot of phrases like coding, designing, testing, etc. When it comes to coding, developers must worry about syntax, declarations, garbage collection, statements, exceptions, and more. Software frameworks make development easier by providing a common platform from which developers can control all or most of the software development process.

##### Advantages of a Framework?

- Software frameworks are highly versatile, robust, and efficient due to the fact that they are often built, tested, and optimized by multiple software developers.

- Facilitates better programming practices and proper implementation of design patterns.

- Avoiding duplicates and redundant code results in fewer bugs and a more consistent development process.

##### What is library?

A library is a collection of prewritten code that can be used to simplify tasks. The term library simply refers to a collection of code that is reused repeatedly, Just like a function in JavaScript.

It is essentially a set of pre-defined functions and classes that programmers can use to simplify their work and speed up the development process.

Standard libraries are available with most programming languages, but programmers can also make their own custom libraries.

Usually, most libraries do not have a large size. Generally, libraries are focused on narrow scopes such as strings, sockets, and IO, etc., so their APIs are also small and require fewer dependencies. `jQuery`, `NumPy`, etc. are examples of libraries.

Developers can `control the flow of the program` inside the library.

##### Why do we need a library?

Library is helpful to reuse the code that has already been written by someone else or another developer. Developers can avoid writing code for functionality that is already written in the library by using it. The result is more efficiency and less time spent on coding. Since it’s more likely that other people are using it too, you’ll benefit from them finding and fixing any bugs. This is one of the reasons libraries are useful.

# CDN - Content delivery network

A content delivery network (CDN) is a geographically distributed group of servers that [caches](#cdn-caching) content close to end users. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos.

The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.

##### Is a CDN the same as a web host?

A CDN does not host content and can’t replace the need for proper web hosting, it does help cache content at the network edge, which improves website performance.

##### What are the benefits of using a CDN?

The benefits of using a CDN vary depending on the size and needs of an Internet property, the primary benefits for most users can be broken down into four different components:

1. `Improving website load times` - By distributing content closer to website visitors by using a nearby CDN server visitors experience faster page loading times.

2. `Reducing bandwidth costs` - Bandwidth consumption costs for website hosting is a primary expense for websites.

3. `Increasing content availability and redundancy` - Large amounts of traffic or hardware failures can interrupt normal website function. Thanks to CDN, it can handle more traffic and withstand hardware failure better than many origin servers.

4. `Improving website security` - A CDN may improve security by providing DDoS mitigation.

##### How does a CDN work?

CDN is a network of servers linked together with the goal of delivering content as quickly, cheaply, reliably, and securely as possible. In order to improve speed and connectivity, a CDN will place servers at the exchange points between different networks.

These `Internet exchange points (IXPs)` are the primary locations where different Internet providers connect in order to provide each other access to traffic originating on their different networks.

# CDN Caching

Caching is the process of storing copies of files in a cache, or temporary storage location, so that they can be accessed more quickly. Technically, a cache is any temporary storage location for copies of files or data.

Web browsers cache HTML files, JavaScript, and images in order to load websites more quickly, while DNS servers cache DNS records for faster lookups and CDN servers cache content to reduce latency.

Caches on the Internet serve a similar purpose; they temporarily store the 'supplies', or content, needed for users to make their journey across the web.

##### What does a browser cache do?

Every time a user loads a webpage, their browser has to download quite a lot of data in order to display that webpage. To shorten page load times, browsers cache most of the content that appears on the webpage, saving a copy of the webpage's content on the device’s hard drive. This way, the next time the user loads the page, most of the content is already stored locally and the page will load much more quickly.

Browsers store these files until their time to live (TTL) expires or until the hard drive cache is full. TTL is an indication of how long content should be cached. Once a browser cache is cleared, every webpage that loads will load as if it is the first time the user has visited the page. Clearing the cache can allow it to load correctly.

##### What is CDN caching?

A CDN, or content delivery network, caches content (such as images, videos, or webpages) in proxy servers that are located closer to end users than origin servers. A proxy server is a server that receives requests from clients and passes them along to other servers.

Because the servers are closer to the user making the request, a CDN is able to deliver content more quickly.

> Think of a CDN as being like a chain of grocery stores: Instead of going all the way to the farms where food is grown, which could be hundreds of miles away, shoppers go to their local grocery store, which still requires some travel but is much closer. Because grocery stores stock food from faraway farms, grocery shopping takes minutes instead of days. Similarly, CDN caches 'stock' the content that appears on the Internet so that webpages load much more quickly.

When a user requests content from a website using a CDN, the CDN fetches that content from an origin server, and then saves a copy of the content for future requests. Cached content remains in the CDN cache as long as users continue to request it.

##### What is a CDN cache hit? What is a cache miss?

A cache `hit` is when a client device makes a request to the cache for content, and the cache has that content saved. A cache `miss` occurs when the cache does not have the requested content.

A cache hit means that the content will be able to load much more quickly, since the CDN can immediately deliver it to the end user. In the case of a cache miss, a CDN server will pass the request along to the origin server, then cache the content once the origin server responds, so that subsequent requests will result in a cache hit.

##### Where are CDN caching servers located?

CDN caching servers are located in data centers all over the globe. Cloudflare has CDN servers in `310 cities` spread out throughout the world in order to be as close to end users accessing the content as possible. A location where CDN servers are present is also called a data center.

##### How long does cached data remain in a CDN server?

When websites respond to CDN servers with the requested content, they attach the content’s TTL as well, letting the servers know how long to store it. The TTL is stored in a part of the response called the HTTP header, and it specifies for how many seconds, minutes, or hours content will be cached. When the TTL expires, the cache removes the content.

# Difference b/w cloud computing VS Edge computing?

Cloud computing involves delivering computing services (such as storage, processing power, and applications) over the internet. It relies on centralized data centers that handle the storage, processing, and management of data.

These are the following challenges of the cloud computing:

- `Latency`: There can be latency issues, especially for real-time applications.
- `Dependency`: Relies on internet connectivity.

Edge computing involves processing data near the source of data generation rather than relying on a centralized cloud server. It brings computation and data storage closer to the devices where it's needed, reducing latency.

These are the following advantages of the edge computing:

- `Low Latency`: Critical for applications requiring real-time responsiveness.
- `Bandwidth Efficiency`: Reduces the need to transfer large amounts of data to the cloud.
- `Privacy`: Data can be processed locally, addressing privacy concerns.

# What is crossorigin in script tag?

The purpose of `crossorigin` attribute is used to share the resources from one domain to another domain. Basically, It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains. The resources may include Audio, Video, Images, Link or external script that specifies whether to support a cross-origin request or not.

`CORS`: It stands for `cross-origin resource sharing`. It is a mechanism by which one webpage requests to another domain for fetching out the resource like audio, video, script, etc. from the third party server without leaking their credentials information.

The `crossorigin` attribute contains two values which are given below –

- `anonymous`: It has a default value. It defines a CORS request which will be sent without passing the credential information.
- `use-credentials`: A cross-origin request will be sent with credentials, cookies, and certificate.

```js
<script src="https://example.com/script.js" crossorigin="anonymous"></script>

<script src="https://example.com/script.js" crossorigin="use-credentials"></script>
```

> It's important to note that if the script and the web page are served from the same domain, you typically don't need to use the `crossorigin` attribute.

# Difference between React and ReactDOM

React and ReactDOM are two core libraries in the React JavaScript library ecosystem. They work together to enable the creation of user interfaces, but they have different responsibilities.

1. `React`: The purpose of React is a JavaScript library for building user interfaces. Its primary purpose is to provide a declarative and efficient way to create UI components.

These are the following key concept of React:

- Component: React applications are built using components, which are modular and reusable pieces of UI.
- Virtual DOM: React uses a virtual DOM to efficiently update and render components by only updating the parts of the actual DOM that have changed.
- JSX: React introduces JSX (JavaScript XML), a syntax extension that allows you to write HTML-like code in JavaScript.

2. `ReactDOM`: The purpose of ReactDOM is a specific package for working with the DOM (Document Object Model) in web browsers. It provides the necessary bindings for React to interact with the actual DOM.

These are the Key Responsibilities of ReactDOM:

- Rendering Components: ReactDOM includes methods for rendering React components into the DOM. The most commonly used method is `ReactDOM.render()`, which takes a React element and renders it into a defined DOM container.

- Server-Side Rendering (SSR): ReactDOM can also be used for server-side rendering, allowing you to render React components on the server and send HTML to the client, improving initial page load performance.

Here's a simple example:

```jsx
// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Define a React component
const MyComponent = () => {
  return <div>Hello, React!</div>;
};

// Render the component using ReactDOM
ReactDOM.render(<MyComponent />, document.getElementById("root"));
```

In this example, `ReactDOM.render()` is used to render the `MyComponent` into the HTML element with the id 'root'.

In summary, React is the core library for building UI components and managing their state, while ReactDOM is specifically focused on interacting with the DOM. When building web applications using React, you typically include both React and ReactDOM, with React providing the component and state management, and ReactDOM handling the rendering of those components to the actual DOM.

# What is difference between react.development.js and react.production.js files via CDN?

When you include React via a CDN (Content Delivery Network) in your web application, you may notice that there are two different versions of the React library: `react.development.js` and `react.production.js`.

These files serve different purposes and are optimized for different stages of the development process.

1. react.development.js: The purpose of this file is intended for development environments. It includes additional warning messages, helpful development tools, and is not minified, making it easier to read and debug.

These are the following features of this file:

- Development Tools: Includes helpful warnings and error messages that aid developers in identifying and fixing issues during development.

- Verbose Warnings: Provides more detailed information about potential problems in the code.

- Not Minified: The code is human-readable and not compressed, making it easier to trace issues back to the source code.

  ```html
  <!-- Include React development version for development environments -->
  <script
    crossorigin
    src="https://unpkg.com/react@18/umd/react.development.js"
  ></script>
  <script
    crossorigin
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
  ></script>
  ```

2. react.production.js: The purpose of this file is optimized for production environments. It has no development tools, and the code is minified and stripped of unnecessary warnings and debugging information to reduce file size and improve performance.

These are the following features of this file:

- Minified: The code is compressed and minified, reducing its size for faster loading in production environments.

- No Development Tools: Excludes development-specific tools and warnings to reduce overhead.

```html
<!-- Include React production version for production environments -->
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.production.min.js"
></script>

<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
></script>
```

When deploying your application to a production environment, it is recommended to use the `react.production.js` versions to minimize the file size and optimize the performance of your application. Using the development versions in a production environment may impact the user experience due to larger file sizes and unnecessary development-related overhead.

In summary, during development, use the `react.development.js` versions for better debugging and error information. In production, switch to the `react.production.js` versions to ensure a smaller file size and better overall performance for end-users.

# What is async and defer?

The `async` and `defer` are attributes used in HTML script tags to control the loading and execution of external JavaScript files. They both affect when the browser fetches and executes the scripts in relation to the HTML parsing and rendering process.

1. **`async`:**

   - When you include the `async` attribute in a script tag, it means that the script will be fetched asynchronously while HTML parsing continues.
   - The script will be executed as soon as it is downloaded, which may occur before the HTML parsing is complete.
   - The order of execution is not guaranteed, meaning that scripts with the `async` attribute may execute out of order with respect to their position in the HTML document.
   - `async` is commonly used for scripts that don't depend on the order of execution and can be executed independently.

   ```html
   <script async src="example.js"></script>
   ```

2. **`defer`:**

   - When you include the `defer` attribute in a script tag, it means that the script will be fetched asynchronously as well, but it will be executed in order after the HTML parsing is complete.
   - The scripts with the `defer` attribute will be executed in the order they appear in the HTML document.
   - The `defer` attribute is useful when the order of script execution is important, and you want to ensure that the scripts run after the HTML document has been fully parsed.

   ```html
   <script defer src="example.js"></script>
   ```

These are the key difference b/w both of them:

- **Execution Timing:**

  - `async`: Executes as soon as it's downloaded, even if HTML parsing is not complete.
  - `defer`: Executes in order after HTML parsing is complete.

- **Order of Execution:**

  - `async`: Order of execution is not guaranteed.
  - `defer`: Scripts are executed in the order they appear in the HTML document.

- **Use Cases:**

  - `async`: Suitable for scripts that don't depend on the order of execution.
  - `defer`: Useful when maintaining the order of script execution is important.

- **Dependencies:**
  - `async`: Scripts may execute independently without waiting for other resources.
  - `defer`: Scripts are executed in order, making it suitable for scripts that depend on previous scripts.

In general, if the order of script execution matters and you want them to execute after the HTML parsing is complete, you should use the `defer` attribute. If order doesn't matter, and you want scripts to execute as soon as they are downloaded, you can use the `async` attribute.

# creating a React element, creating a root element, and rendering the React element onto a web page using React and ReactDOM.

##### How to create a React element?

```javascript
// Step 1: Create a React element
const reactElement = React.createElement(
  "h1",
  { id: "title" },
  "This is the heading from React"
);
```

In this code: `React.createElement()` is used to create a React element. It takes three arguments:

1. The type of the element is "h1" in this case, indicating a heading tag.
2. An object representing the element's attributes,in this case, an object with `id` set to "title".
3. The content or children of the element, a string in this case, representing the text content of the heading.

This step essentially creates a virtual representation of the HTML element that React will eventually render.

##### How to create a Root element?

```javascript
// Step 2: Create a root element
const rootElement = ReactDOM.createRoot(document.querySelector(".root"));
console.log(rootElement);
```

In this code:

- `ReactDOM.createRoot()` is used to create a root element. It takes a DOM element as an argument, in this case, the element with the class "root" obtained using `document.querySelector(".root")`.
- The root element is a `container` where the React application will be mounted.

##### How to reader a React element onto a web page?

```javascript
// Step 3: Render element on the web page.
rootElement.render(reactElement);
```

In this code:

- `rootElement.render()` is called to render the previously created React element `reactElement` onto the web page within the defined root element.
- This step effectively updates the DOM, replacing the content inside the root element with the rendered React element.
