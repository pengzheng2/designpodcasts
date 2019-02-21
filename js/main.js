// Index page JS

// Get data from a JSON file
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://api.jsonbin.io/b/5c6e2b4b0177dd175173f991');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    // This is where we'll do something with the retrieved data
    var data = JSON.parse(ourRequest.responseText);
    createHTML(data, "podcastsTemplate", "podcasts-container");
    // Scroll reveal
    ScrollReveal().reveal('h1', { duration: 1500 });
    // ScrollReveal().reveal('h1', { distance: '0.3rem' });

    ScrollReveal().reveal('.subtitle', { delay: 200 });
    ScrollReveal().reveal('.subtitle', { duration: 1500 });
    ScrollReveal().reveal('.subtitle', { distance: '0.3rem' });

    ScrollReveal().reveal('.box', { delay: 400 });
    ScrollReveal().reveal('.box', { duration: 1500 });

    ScrollReveal().reveal('.podcast', { delay: 50 });
    ScrollReveal().reveal('.podcast', { duration: 800 });
    ScrollReveal().reveal('.podcast', { distance: '2rem' });
    ScrollReveal().reveal('.podcast', { interval: 150 });
    ScrollReveal().reveal('.podcast', { easing: 'cubic-bezier(0.5, 0, .56, .95)' });

    ScrollReveal().reveal('footer', { delay: 0 });

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
  var podcastsContainer = document.getElementById(containerID);
  podcastsContainer.innerHTML = ourGeneratedHTML;
}

$(document).ready(function() {
  // Develop toggle
  $('#develop').click(function() {
    $(this).css('color', 'var(--color-gray-900)');
    $(this).css('transition', 'color .5s');
    $(this).css('cursor', 'pointer');
    $('#design').css('color', 'var(--color-gray-400)');
    $('#design').css('transition', 'color .5s');
    $('.toggle').css('left', '11.7rem');
    $('.toggle').css('transition', 'left .3s');
    developSelection = true;
    // Handlebar JS
    var data = JSON.parse(ourRequest.responseText);
    createHTML(data, "developPodcastsTemplate", "podcasts-container");
    // Scroll Reveal
    ScrollReveal().reveal('.podcast', { delay: 0 });
    ScrollReveal().reveal('.podcast', { duration: 1000 });
    // ScrollReveal().reveal('.podcast', { distance: '2rem' });
    ScrollReveal().reveal('.podcast', { interval: 100 });
    ScrollReveal().reveal('.podcast', { easing: 'cubic-bezier(0.5, 0, .56, .95)' });
    // ScrollReveal().reveal('.subtitle', { reset: false, });
    // ScrollReveal().reveal('.podcast', { reset: false, });
  });
    // Design toggle
    $('#design').click(function() {
    $(this).css('color', 'var(--color-gray-900)');
    $(this).css('transition', 'color .5s');
    $(this).css('cursor', 'pointer');
    $('#develop').css('color', 'var(--color-gray-400)');
    $('#develop').css('transition', 'color .5s');
    $('.toggle').css('left', '.5rem');
    $('.toggle').css('transition', 'left .3s');
    designSelection = true;
    // Handlebar JS
    var data = JSON.parse(ourRequest.responseText);
    createHTML(data, "designPodcastsTemplate", "podcasts-container");
    // Scroll Reveal
    ScrollReveal().reveal('.podcast', { delay: 0 });
    ScrollReveal().reveal('.podcast', { duration: 1000 });
    // ScrollReveal().reveal('.podcast', { distance: '2rem' });
    ScrollReveal().reveal('.podcast', { interval: 100 });
    ScrollReveal().reveal('.podcast', { easing: 'cubic-bezier(0.5, 0, .56, .95)' });
    // ScrollReveal().reveal('.subtitle', { reset: false, });
    // ScrollReveal().reveal('.podcast', { reset: false, });
  });
});
