# prep-html-skeleton-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the
following questions:

- What tags are necessary for a complete HTML Skeleton?
  HTML skeleton that includes the following:
  - a <!DOCTYPE> declaration
  - an <html> element
  - a <head> element
  - a <title> element
  - a <body> element

---

- What type of content belongs within the `<head>` of an HTML document?
  Here are some types of content that typically belong within the
  <head> section:
    - <title>: Specifies the title of the document, which is
      displayed in the browser's title bar or tab.
    - <meta>: Defines various types of metadata, such as character
      encoding (<meta charset="UTF-8">)
    - <link>: Used to link external resources to the document, such as
      stylesheets
    - <script>: Specifies or references JavaScript code to be executed in
      the document, either inline or via external files.
    - <style>: Contains CSS code for styling elements within the document.
  There are many more elements than listed but these are the most important
  to list as of now.

---

---

- What type of content belongs within the `<body>` of an HTML document?
  Here are some types of content that typically belong within the
  <body> section:
    - Text content: This includes paragraphs (<p>), heading
    (<h1> to <h6>), lists (<ul>, <ol>, <li>)
    - Images: Images can be inserted using the <img> tag, specifying the
    image source (src) and alt text (alt) for accessibility.
    - Links: Hyperlinks are created using the <a> tag, allowing users to
    navigate to other web pages or specific locations within the same page.
    - Media content: HTML5 provides elements like <video> and <audio> for
    embedding multimedia content such as videos, audio files, or streaming
    media.
    - Structural elements: Elements like <header>, <nav>, <main>, <footer>,
    <section>, and <article> can be used to structure and organize the
    content of the webpage.
    - Forms: Forms can be created using the <form> element, allowing users
    to input and submit data.
    - Interactive elements: HTML provides various interactive elements like
    <button>, <input>, and <textarea> to enable user interaction.
  There are many more content / topics than listed but these are important
  to list as of now.

---

---

- Where must the `DOCTYPE` declaration appear in a valid HTML document?
  - The DOCTYPE declaration must appear at the very beginning of an HTML
    document, before any other content or tags. It is typically the first
    line of code in an HTML file and is used to inform the browser about the
    version of HTML being used and the document type.

---

## Notes

---

- Aiden's notes here:

  1. Including the lang attribute in the <html> tag with a value specifying
     the language.

  the benefits are the following: - Accessibility: Specifying the language helps assistive technologies,
  such as screen readers, to accurately pronounce and interpret the content. - Search Engine Optimization (SEO): Search engines use the lang attribute
  to understand the language of the content. It can help improve search
  engine rankings and ensure that the content is appropriately indexed for
  language-specific searches. - Language-specific styling: Web developers or CSS frameworks may utilize
  the lang attribute to apply language-specific styling or typography rules.
  This ensures that the content is visually presented in a manner
  appropriate for the intended language.

---

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
