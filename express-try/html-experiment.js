const fs = require("fs");
const parser = require("node-html-parser");

// Specify the file path
const filePath = "html-encoded.txt";

try {
  // Read the file synchronously
  const data = fs.readFileSync(filePath, "utf8");
  const htmlString = decodeURIComponent(data);
  // Log the content read from the file
  console.log("File content:", { htmlString });

  // Parse the HTML string
  var doc = parser.parse(htmlString);

  // Remove script tags
  var scriptTags = doc.querySelectorAll("script");
  scriptTags.forEach(function (scriptTag) {
    scriptTag.parentNode.removeChild(scriptTag);
  });

  // Remove style tags
  var styleTags = doc.querySelectorAll("style");
  styleTags.forEach(function (styleTag) {
    styleTag.parentNode.removeChild(styleTag);
  });

  // Get the cleaned HTML
  var cleanedHtmlString = doc.toString();

  fs.writeFileSync("test.html", cleanedHtmlString, "utf8");
} catch (err) {
  console.error("Error reading the file:", err);
}
