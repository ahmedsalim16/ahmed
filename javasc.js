/*document.write("hello");*/
/*alert("coockies");*/
/*document.getElementsByClassName("bg-primary text-white").item = "header1";*/
//var x = 2, y = 3, z = x + y;
///*document.write(z);*/
//if (x >= 1) {
//    y += 2;
//    document.write(y);
//}

//ahmed:
//for (var i = 1; i < 10; i++) {
//    for (var j = 1; j < 10; j++) {
//        a = a + (i * j) + "<br>";
//    }
//}
//var a = [3, "ali", true];
//a.pop();
////a.push();
////a.unshift(4);
////a.shift();
////a.length();

//function add(n) {
//    if (n != 0)
//        return n + add(n - 1);
//    else
//        return 0;
//}

//document.getElementById("x").innerHTML = "string2";
//document.getElementById("y").innerHTML = a.length ;
//document.getElementById("z").innerHTML = add(3);
//Math.min(2, 10, 16, -2, 0);

//var person = new Object();
//person.firstname = "ahmed";
//person.lasstname = "salim";
//person.fullname = function () { return this.firstname + " " + this.lasstname; };
//person.age = "20";
//document.getElementById("a").innerHTML = person.fullname();

//var person2 = {
//    firstname: "",
//    lasstname: "",
//    age: "",
//    set person2_1(fname, lname, ag) {
//        this.firstname = fname;
//        this.lasstname = lname;
//        this.age = ag;
//    }
//};

//person2.person2_1 = "ahmed", "salim", "20";
//document.getElementById("b").innerHTML = person2.person2_1;
//function person1(first, last, ag) {
//    this.fname = first;
//    this.lname = last;
//    this.ag = ag;

//}
//var p = new person1("ahmed", "sa", "19");
//document.getElementById("b").innerHTML = p.fname + p.lname + p.ag;

//class person3 {
//    myper(first, last, ag){
//        this.fname = first;
//        this.lname = last;
//        this.ag = ag;
//    }

//}
//var p = new person3();
//p.myper("basant", "taha", 20);
//document.getElementById("b").innerHTML = p.ag;
/*document.getElementById("x").innerHTML = String(x);*/
/*----------------------------------------------------------------------------------------------------------*/

/*jquery*/
$('h1#hed').css('color','red')
//$('h1#hed').html('<h1>hi</h1>');
//$('h1#hed').text('hi');
//$('h1#hed').hide();

$('#bt1n').click(function () {
    /*$('p').hide();*/
    $('p').toggle();
});
$('#bt2n').click(function () {
    $('p').show();
    
});

$('.was-validated').submit(function () {
    var x = $('#inp').val();
    alert(x);
});

 