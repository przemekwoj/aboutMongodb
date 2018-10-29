Database -> Collection -> Documents

use mydbTest
db
show dbs
db.mycollection.insert({"name":"Max"})
db.dropDatabase()

use mydb
db.createCollection("myCollection")
show collections
db.myCollection2.insert({"name":"Max"})
db.myCollection.drop()

use school
db.students.insert(
[
 {
	"StudentNo": "1",
	"FistName": "Mark",
	"LastName": "Waugh",
	"Age" : "10"
 },
 {
	"StudentNo": "1",
	"FistName": "Mark",
	"LastName": "Waugh",
	"Age" : "10"
 },
 {
	"StudentNo": "21",
	"FistName": "ty",
	"LastName": "f",
	"Age" : "14"
 },
 {
	"StudentNo": "13",
	"FistName": "asd",
	"LastName": "dd",
	"Age" : "106"
 },
 {
	"StudentNo": "2",
	"FistName": "Przemo",
	"LastName": "Emo",
	"Age" : "25"
 }
]
)

use school
db.students.find().pretty()
db.students.findOne()
db.students.find(
{
"StudentNo" : "1"
}
)

db.students.find(
{
"Age" : {$gt : "20"}
}
)
db.students.find(
{
"Age" : {$gte : "20"}
}
)
db.students.find(
{
"Age" : {$ls : "20"}
}
)

db.students.find(
{
"Age" : {$ne : "20"}
}
).pretty()

db.students.find(
	{
  		"FistName" : "Mark", "Age" : "10"
	}
)

db.students.find(
	{
	  $or : [{"FistName" : "Mark"},{"Age" : "25"}]
	}
)

db.students.find(
	{
	  "FistName" : "Przemo", $or : [{"Age" : "25"},{"LastName" : "Waugh"}]
	}
)

db.students.update(
{"_id" : ObjectId("5bca0762bb587d8b23c44b0a")},
{$set : {"LastName" : "Woj" }}
)

db.students.update(
{"Age" : "10"},
{$set : {"LastName" : "Turkish" }}
)

db.students.update(
{"Age" : "10"},
{$set : {"LastName" : "Tuurkish" }},
{multi : true}
)

db.students.save(
	{ 
    "_id" : ObjectId("5bca069dbb587d8b23c44b08"), 
    "StudentNo" : "1", 
    "FistName" : "Mark", 
    "LastName" : "Tuurkish", 
    "Age" : "40"
	}
)

db.students.find()

db.students.remove(
	{
	   "_id" : ObjectId("5bca0762bb587d8b23c44b09")
	}
)

// usunie tylko jednego z wiekiem 16 , jak zmienimy 1 na 3 , to usunie 3 z wiekiem 16 lat
db.students.remove(
	{
	  "Age" : "16"
	} , 1
)

// mongodb - Projection -> projection means seletcting only necessary data rather than selecting whole of the data od a document
//db.COLLECtion_NAME({},{{KEY:1}) , 1 means if we can show this data, 0 means show nothing
db.students.find({},{"FistName":1}) // its default shows also id , so we need do another trick
// rid of id
db.students.find({},{"FistName":1,"_id" :0})
// we take this data from data base in brackets and arguments in limit , point us how many objects should takes (here is 3)
db.students.find({},{"FistName":1, "LastName":1, "_id":0}).limit(3)
//skip(2) means that skip 2 first objects
db.students.find({},{"FistName":1, "LastName":1, "_id":0}).skip(2)
//this skip first two and then shows anoter three objects
db.students.find({},{"FistName":1, "LastName":1, "_id":0}).skip(2).limit(3)
//sort accoring to alfabet order , arguments 1 or -1
db.students.find({},{"FistName":1, "LastName":1, "_id":0}).sort({"FistName":-1})

use temp

for( i = 0; i < 1000000 ; i++)
{
  db.post.insert({"student_id": i , "name":"Mark"})
}