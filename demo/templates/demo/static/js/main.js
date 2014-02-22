$(document).ready(function(){
	populateUsers()
	populateList()
})

function populateUsers() {
	//The following is ASSUIMG classes and ids.

	user1 = {
		Geoff:"Test",
		faceUrl: "static/img/kevin.jpeg",
		Username: "geoff5"
	}

	user2 = {
		Name: "Kevin",
		faceUrl: "static/img/kevin.jpeg",
		Catchphrase: "The Legend"
	}

	user3 = {
		Name: "Joeri",
		faceUrl: "static/img/joeri.jpg",
		Catchphrase: "Swiss Army Knife"
	}
	user4 = {
		Name: "John",
		faceUrl: "static/img/johnny.jpeg",
		Catchphrase: "Johnny Be Good"
	}


	users = [user1, user2, user3, user4]

	for (i=0; i<users.length; i++)
	{
		$('#userList').append('<div class="col-xs-6 col-sm-3 placeholder"><img data-src="'+ users[i].faceUrl +'" class="img-responsive" alt="200x200" src="'+users[i].faceUrl+'"><h4>'+ users[i].Name+'</h4><span class="text-muted">'+users[i].Catchphrase+'</span></div>')
	}

}

function populateList() {

	list1 = {
		Name: "To Do",
		listUrl: "todo.jpg"
	}

	list2 = {
		Name: "What to do",
		listUrl: "whattodo.jpg"
	}

	lists = [list1,  list2]

	for (i=0; i<lists.length; i++)
	{
		$('#listList').append("<li><a href src='"+ lists[i].listUrl+ "'>Here's " + lists[i].Name + "</a></li>");
	}
}