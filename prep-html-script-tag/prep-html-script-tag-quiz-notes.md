# prep-html-script-tag-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What tag is needed to load JavaScript scripts into an HTML document?
  The <script> tag is used to load JavaScript scripts into an HTML document.

- How do you use a script tag to write JavaScript directly in the HTML document?
  To write JavaScript directly in an HTML document using a <script> tag.
  you can include the JavaScript code between the opening and closing <script>.

EXAMPLE:

<script>
  // JavaScript code goes here (THIS CODE WILL BE OUTPUTTED TO CONSOLE!)
  console.log("This is JavaScript code written directly in the HTML document.");
</script>

- How do you use a script tag to load an external JavaScript file?
  To load an external JavaScript file using a <script> tag in an HTML
  document, you can specify the source file using the src attribute.
  This is the better way to implement JavaScript!

## Notes

All student notes should be written here.

- AIDEN'S NOTES BELOW:

  1. Separation of Concerns: Loading external JavaScript files is generally considered a better practice for larger codebases as it promotes separation of concerns. By keeping JavaScript code in separate files, it enhances code organization, reusability, and maintainability.
  2. Script Placement: It is recommended to place the <script> tag at the end of the <body> section to ensure that the HTML content is loaded and displayed before the JavaScript code is executed. This helps avoid any potential rendering issues.
  3. When a browser encounters a <script> tag in an HTML document, it typically stops parsing the HTML and starts fetching the JavaScript file referenced in the src attribute. The browser then waits for the JavaScript file to be completely downloaded and executed before continuing to parse and render the rest of the HTML document. This default behavior is known as synchronous loading. However, there are cases where you may want to modify this behavior. This is where asynchronous loading comes into play. By using the async or defer attribute with the <script> tag, you can control how the JavaScript file is loaded and executed, allowing the HTML parsing and rendering to proceed without being blocked

  - async attribute: When the async attribute is added to the <script> tag, the JavaScript file is fetched asynchronously.
  - defer attribute: When the defer attribute is added to the <script> tag, the JavaScript file is also fetched asynchronously, allowing the HTML parsing and rendering to proceed.

  EXAMPLE:
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Asynchronous Loading Example</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>

    <p>This is a paragraph of text.</p>

    <script async src="script1.js"></script>

    <script defer src="script2.js"></script>
  </body>
  </html>

  NOTE:

  - async attribute: The first <script> tag has the async attribute and references the "script1.js" file. This means that the JavaScript file will be fetched asynchronously while the HTML document continues to be parsed and rendered. Once the file is downloaded, it will be executed immediately, potentially interrupting the rendering process.

  - defer attribute: The second <script> tag has the defer attribute and references the "script2.js" file. This also allows the JavaScript file to be fetched asynchronously, but the execution is deferred until after the HTML document has been completely parsed and before the DOMContentLoaded event is fired. Multiple <script> tags with the defer attribute will maintain their order of execution.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
