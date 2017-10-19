var socialMedia = {
  linkedin : 'https://www.linkedin.com/in/devin-parker-35729190',
  behance: 'https://www.behance.net/dparkeravs0295'
};

var socialList = function() {
  var  output = '<ul>',
    myList = document.querySelectorAll('.socialmediaicons');

  for (var key in arguments[0]) {
    output+= '<li><a href="' + socialMedia[key] + '">' +
      '<img src="graphics/' + key + '.png" alt="icon for '+key+'">' +
      '</a></li>';
  }
  output+= '</ul>';

  for (var i = myList.length - 1; i >= 0; i--) {
    myList[i].innerHTML = output;
  };
}(socialMedia);
