// sub page JS

// Get data from a JSON file
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://pengzheng2.github.io/designpodcasts/data.json');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    // This is where we'll do something with the retrieved data
    var data = JSON.parse(ourRequest.responseText);
    createHTML(data, "podcastImageTemplate", "podcast-img-container");
    createHTML(data, "appTemplate", "app-container");
    createHTML(data, "hostTemplate", "host-container");
    createHTML(data, "communityTemplate", "community-container");
    createHTML(data, "mainTemplate", "main-container");




  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

// Error handling
ourRequest.onerror = function() {
  console.log("Connection error");
};
ourRequest.send();

// Create HTML
function createHTML(data, templateID, containerID) {
  var rawTemplate = document.getElementById(templateID).innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var ourGeneratedHTML = compiledTemplate(data);
  var container = document.getElementById(containerID);
  container.innerHTML = ourGeneratedHTML;
}
