var p1 = sessionStorage.getItem("Name1");
var p2 = sessionStorage.getItem("Name2");
var c1 = 0;
var c2 = 0;
if (p1 === null || p2 === null) {
  p1 = "Player - 1";
  p2 = "Player - 2";
}


document.getElementById("Pl1").innerHTML = p1;
document.getElementById("Pl2").innerHTML = p2;


function roll() {
  var a = Math.floor(Math.random() * 6) + 1;
  var b = Math.floor(Math.random() * 6) + 1;
  $(".img1").addClass('rotating_l');
  $(".img2").addClass('rotating_r');

  setTimeout(function () {
    document.querySelector(".img1").setAttribute("src", "images/dice" + a + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + b + ".png");
  }, 750);
  setTimeout(function () {
    $(".img1").removeClass('rotating_l');
    $(".img2").removeClass('rotating_r');
    if (a > b) {
      if (c1 == 0 && c2 == 0) {
        document.getElementById("result").innerHTML = "";

      }
      c1 = c1 + 1;
      if (c1 == 5) {

        alert("player 1 wins");
        document.getElementById("result").innerHTML = p1 + " Wins";
        var st=p1+" won against " + p2+" by";
        var st2=c1+"-"+c2;

        localStorage.setItem(st,st2);
        var adi=localStorage.getItem(st);
        // var okk=document.getElementById("ok");
        // okk.innerHTML+=st;
        // okk.innerHTML+=adi;
        // okk.innerHTML+="<hr>"
        c1 = 0;
        c2 = 0;
        document.getElementById("p1").innerHTML = c1;
        document.getElementById("p2").innerHTML = c2;

      }
      document.getElementById("p1").innerHTML = c1;
    }
    else if (a < b) {
      if (c1 == 0 && c2 == 0) {
        document.getElementById("result").innerHTML = "";

      }
      // document.getElementById("result").innerHTML = p2 + " Wins";
      c2 = c2 + 1;
      if (c2 == 5) {
        alert("player 2 wins");
        document.getElementById("result").innerHTML = p2 + " Wins";
        var st3=p2+" won against " + p1+" by";
        var st4=c2+"-"+c1;

        localStorage.setItem(st3,st4);
        var adi=localStorage.getItem(st3);
        // var okk=document.getElementById("ok");
        // okk.innerHTML+=st3;
        // okk.innerHTML+=adi;
        // okk.innerHTML+="<hr>"
        c2 = 0;
        c1 = 0;
        document.getElementById("p2").innerHTML = c2;
        document.getElementById("p1").innerHTML = c1;


        // document.getElementById("result").innerHTML = "";


      }
      document.getElementById("p2").innerHTML = c2;
    }


    if (a === b) {
      //  document.getwdhuiohElementById("result").innerHTML = "It's Draw";

    }

  }, 1200);

};
