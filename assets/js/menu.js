function initMenu() {
  //getContent
  var content = $('#content');

  //get menu items
  var menu = $('#menu');
  var sections = content.children('section');

  sections.each(function() {
    id = $(this).attr('id');
    name = $(this).data('name');
    menu.append('<li><a href="#'+id+'">'+name+'</a></li>');
  })


}
