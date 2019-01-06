function identify() {
	return this.name.toUpperCase();
}
function speak() {
	var greeting = "Hello, I'm " + identify.call(this );
	console.log( greeting );
}
var me = {
	name: "Kyle"
};
var you = {
	name: "Reader"
};
identify.call( me ); // KYLE 
identify.call( you ); // READER
 speak.call( me ); // Hello, I'm KYLE
speak.call( you ); // Hello, I'm READER
//The above code can also be written as
function identify(context){
return context.name.toUpperCase();
}
function speak(context){
 var greeting = "Hello i am" +identify(context);
console.log(greeting);
}
identify(you);
speak(me);
