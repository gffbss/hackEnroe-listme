// list1 = {
// 	Name: "To Do",
// 	listUrl: "todo.jpg",
// 	listCode: "todo",

// }

// list2 = {
// 	Name: "What to do",
// 	listUrl: "whattodo.jpg",
// 	listCode: "whattodo"
// 	// fullListing: ["A", "B"]
// }



var listsobj = {
	list1 : {
		Name: "To Do",
		listUrl: "todo.jpg",
		listCode: "list1",
		fullLister: ["First", "Second"]

	},
	list2 : {
		Name: "What to do",
		listCode: "list2",
		fullLister: ["A", "B"]
	},
	list3 : {
		Name : "Where to Go",
		listCode: "list3",
		fullLister: ["Venice", "Paris"]
	}
}

user1 = {
	Geoff:"Test",
	Catchphrase: "BEEPBOOP",
	faceUrl: "img/geoff.png",
	Username: "gffbss"
}


user2 = {
	Name: "Kevin",
	faceUrl: "img/kevin.jpeg",
	Catchphrase: "The Legend",
	Username: "holl"
}

user3 = {
	Name: "Joeri",
	faceUrl: "img/joeri.jpg",
	Catchphrase: "Swiss Army Knife",
	Username: "jman"
}
user4 = {
	Name: "John",
	faceUrl: "img/johnny.jpeg",
	Catchphrase: "Johnny Be Good",
	Username: "JBgood"
}

users = [user1, user2, user3, user4]


$(document).ready(function(){
	populateUsers()
	populateList()

	$('.lister').click(function () {
		var fullList = $(this).attr('id');
		

		console.log(listsobj[fullList])


		$('#listList').html('');

		for (i=0; i<listsobj[fullList].fullLister.length; i++)
		{
			$('#listList').append("<li id='"+listsobj[fullList].fullLister[i]+"list'><a class='lister'>" + listsobj[fullList].fullLister[i]+ " </a><button class='chk' id='"+listsobj[fullList].fullLister[i]+"check'>&#10003;</button><button class='remover' id='"+listsobj[fullList].fullLister[i]+"remove'>X</button></li>");
		}


	});

	$('.chk').click(function () {

		console.log("CLICKED");
		var wizard = $(this).attr('id');

		console.log(wizard);

	})

	$('#makenew').click(function() {
		$('#createModal').modal('show');   
	})



})

function populateUsers() {

	for (i=0; i<users.length; i++)
	{
		$('#userList').append('<div class="col-xs-6 col-sm-3 placeholder"><img data-src="'+ users[i].faceUrl +'" class="img-responsive" alt="200x200" src="'+users[i].faceUrl+'"><h4>'+ users[i].Name+'</h4><span class="text-muted">'+users[i].Catchphrase+'</span></div>')
	}

}

function populateList() {


	for (var key in listsobj)
	{

			if(listsobj.hasOwnProperty(key)){
        		
				$('#listList').append("<li><a class='lister' id='"+ listsobj[key].listCode +"'>Here's " + listsobj[key].Name + "</a></li>");
			}
	}

}