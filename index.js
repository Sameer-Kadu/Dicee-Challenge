var ran = Math.floor((Math.random() * 6)+1);
document.querySelectorAll("img")[0].setAttribute("src", "./dice"+ran+".png");
var r = Math.floor((Math.random() * 6)+1);
document.querySelectorAll("img")[1].setAttribute("src", "./dice"+r+".png");
if(ran > r)
    {
        document.querySelector("h1").innerHTML = "Player 1 win"
    }
    else if(r > ran)
        {
            document.querySelector("h1").innerHTML = "Player 2 win"
        }
        else
        {
            {
                document.querySelector("h1").innerHTML = "Draw"
            }
        }
