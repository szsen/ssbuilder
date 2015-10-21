conn = new Mongo();
db = conn.getDB("socialStories");

db.stories.drop();
db.students.drop();

// var stories = [
//     {title:"Brushing Your Teeth", description : "Description.", url : "http://placehold.it/320x150"},
//     {title:"Dealing with Bullies", description : "Description.", url : "http://placehold.it/320x150"},
//     {title:"Playtime", description : "Description.", url : "http://placehold.it/320x150"},
//     {title:"Money", description : "Description.", url : "http://placehold.it/320x150"},
//     {title:"Meeting New People", description : "Description.", url : "http://placehold.it/320x150"},
//     {title:"Asking Nicely", description : "Description.", url : "http://placehold.it/320x150"}
// ];

var sPanels = [];
for (var i = 0; i < 6; i++) {
    sPanels.push({caption: 'Blank caption', url: "http://placehold.it/320x150"});
}

var stories = [
    {title:"Brushing Your Teeth", description : "Description.", url : "http://placehold.it/320x150", panels : sPanels},
    {title:"Dealing with Bullies", description : "Description.", url : "http://placehold.it/320x150", panels : sPanels},
    {title:"Playtime", description : "Description.", url : "http://placehold.it/320x150", panels : sPanels},
    {title:"Money", description : "Description.", url : "http://placehold.it/320x150", panels : sPanels},
    {title:"Meeting New People", description : "Description.", url : "http://placehold.it/320x150", panels : sPanels},
    {title:"Asking Nicely", description : "Description.", url : "http://placehold.it/320x150", panels : sPanels}
];

db.stories.insert(stories);

storyIds = [];
cursor = db.stories.find();
while ( cursor.hasNext() ) {
	var s = cursor.next();
	storyIds.push(s._id);
}

var students = [
    { name: "Roger Chen", stories: storyIds.slice(0, 2) },
    { name: "Sonia Sen", stories: storyIds.slice(2, 4) },
    { name: "Rachel Wang", stories: storyIds.slice(4, 6) }
];

db.students.insert(students);

cursor = db.students.find();
while ( cursor.hasNext() ) {
	var s = cursor.next();
	printjson(s);
}