//get needed parameters
function renderPosts(boston, container) {
  var people = boston.data;
  const len = boston.data.length;
  var html = '';
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
  }
  container.innerHTML = '<ul id = "boston">' + html + '</ul>';
}
//find top 5 earners
function renderTopSalaries(data, container) {
  var people = boston.data;
  var topSalaries = people.sort((a, b) => b[11] - a[11]).slice(0, 5);
  const len = topSalaries.length;
  var html = '';
    for (let i = 0; i < len; i++) {
    html +=
      '<li class="top">' + '<h2>' + topSalaries[i][8] +  '</h2>' +
      '<h3>' + topSalaries[i][11] + '</h3>';
      }
      container.innerHTML = '<ul id = "topSalaries">' + html + '</ul>';
}

//find people who earn over 200K
function renderTopEmployees(data, container) {
  var people = boston.data;
  var topEmployees = people.filter((a) => a[11] > 200000);
  const len = topEmployees.length;
  var html = '';
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="top">' + '<h2>' + topEmployees[i][8] + '</h2>' + '<h3>' + topEmployees[i][11] + '</h3>';
  }
  container.innerHTML += '<ul id = "topEmployees">' + html + '</ul>';
}
//Assign html element to show on a page
renderTopSalaries(boston, document.getElementById('container')); 
renderTopEmployees(boston, document.getElementById('container')); 
