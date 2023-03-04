import React, { useState } from "react";
import { marked } from "marked";
import './App.css' 


function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  function handleChange(event) {
    setMarkdown(event.target.value);
  }

  return (
    <div className="container">
   <div id="title">  <h1> Markdown Previewer</h1></div> 
      <div className="row">
        <div className="col-md-6">
          <h3 style={{color:"blue",textAlign:"center",border:"2px solid  "}}>Editor</h3>
          <textarea
            id="editor"
            className="form-control"
            value={markdown}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <h3 style={{color:"blue",textAlign:"center",border:"2px solid"}}>Preview</h3>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          />
        </div>
      </div>
    </div>
  );
}

const defaultMarkdown = `# Heading 1
## Heading 2
[Link to Google](https://www.google.com/)
\`Inline code\`
\`\`\`
// Code block
function add(a, b) {
  return a + b;
}
\`\`\`
- List item 1
- List item 2
> Blockquote
![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png)
**Bold text**`;

export default App;
