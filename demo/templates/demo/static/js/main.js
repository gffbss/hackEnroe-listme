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

x=0;



var listsobj = {

}

user1 = {
	Geoff:"Test",
	Catchphrase: "BEEPBOOP",
	faceUrl: "static/img/geoff.png",
	Username: "gffbss"
}


user2 = {
	Name: "Kevin",
	faceUrl: "static/img/kevin.jpeg",
	Catchphrase: "The Legend",
	Username: "holl"
}

user3 = {
	Name: "Joeri",
	faceUrl: "static/img/joeri.jpg",
	Catchphrase: "Swiss Army Knife",
	Username: "jman"
}
user4 = {
	Name: "John",
	faceUrl: "static/img/johnny.jpeg",
	Catchphrase: "Johnny Be Good",
	Username: "JBgood"
}

users = [user1, user2, user3, user4]


$(document).ready(function(){
	populateUsers()
	populateList()

	var passer = []

	clicker()
	

	$('.chk').click(function () {

		console.log("CLICKED");
		var wizard = $(this).attr('id');

		console.log(wizard);

	})

	$('#makenew').click(function() {
		$('#createModal').modal('show');   
	})


	$('#addItem').click(function (){

		$('#userCreator').append("<li>"+$('#userInputList').val()+"</li>");

		passer.push($('#userInputList').val())

		$('#userInputList').val('');
	});

	$('#creater').click(function(){
		
		var newObj = {
			Name : $('#userInput').val(),
			listCode : $('#userInput').val(),
			fullLister: passer
		}

		listsobj[$('#userInput').val()] = newObj;

		$('#listList').html('');

		populateList();

		console.log(listsobj)

		$('#userInputList').val('');
		$('#userInput').val('');
		$('#userCreator').html('');

		 passer = [];


	})




})

function populateUsers() {

	for (i=0; i<users.length; i++)
	{
		$('#userList').append('<div class="col-xs-6 col-sm-3 placeholder"><img data-src="'+ users[i].faceUrl +'" class="img-responsive" alt="200x200" src="'+users[i].faceUrl+'"><h4>'+ users[i].Name+'</h4><span class="text-muted">'+users[i].Catchphrase+'</span></div>')
	}

}

function populateList() {

	$('#listList').html('');

	for (var key in listsobj)
	{

			if(listsobj.hasOwnProperty(key)){
        		
				$('#listList').append("<li class='list-group-item'><a class='lister'  id='"+ listsobj[key].listCode +"'>Here's " + listsobj[key].Name + "</a></li>");
			}
	}
 clicker();
}

function clicker() {

	$('.lister').on('click', function () {
		console.log("CLICKED!")
		var fullList = $(this).attr('id');
		

		console.log(listsobj[fullList])

              // <span class="glyphicon glyphicon-ok"></span>


		$('#listList').html('');

		for (i=0; i<listsobj[fullList].fullLister.length; i++)
		{
			$('#listList').append("<li id='"+listsobj[fullList].fullLister[i]+"list'><li class='list-group-item'>" + listsobj[fullList].fullLister[i]+ " </a><button class='btn btn-success' id='"+listsobj[fullList].fullLister[i]+"check'>&#10003;</button><button class='btn btn-danger' id='"+listsobj[fullList].fullLister[i]+"remove'>X</button></li>");
		}

		$('#listList').append("<button id='mainLists' class='btn btn-default'>Go Back</button>")


		$('#mainLists').click(function(){
			populateList();
		})

	});
}