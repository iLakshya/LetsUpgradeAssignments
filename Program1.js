function getAnswers()
{
    let c1counter = 0;
    let c2counter = 0;
    let c3counter = 0;
    let c4counter = 0;
    var shoes = document.getElementsByName("shoes");
    let landscape = document.getElementsByName("landscape");
    let breakfast = document.getElementsByName("breakfast");
    let pizza = document.getElementsByName("pizza");
    let activity = document.getElementsByName("activity");
    let qLocation = document.getElementsByClassName("questionBanner");
    for(let shoesChoice in shoes)
    {
        if(shoes[shoesChoice].checked)
        {
            switch(shoes[shoesChoice].value)
            {
                case "boots":
                    inc1();
                    break;
                case "brinkenstock":
                    inc2();
                    break;
                case "converse":
                    inc3();
                    break;
                case "sneakers":
                    inc4();
                    break;
            }
            window.scrollTo(0, qLocation[1].offsetTop);
        }
    }
    for(let lanChoice in landscape)
    {
        if(landscape[lanChoice].checked)
        {
            switch(landscape[lanChoice].value)
            {
                case "cityscape":
                    inc1();
                    break;
                case "mountain":
                    inc2();
                    break;
                case "beach":
                    inc3();
                    break;
                case "desert":
                    inc4();
                    break;
            }
            window.scrollTo(0, qLocation[2].offsetTop);
        }
    }
    for(let brChoice in breakfast)
    {
        if(breakfast[brChoice].checked)
        {
            switch(breakfast[brChoice].value)
            {
                case "coffee":
                    inc1();
                    break;
                case "vegan":
                    inc2();
                    break;
                case "healthy":
                    inc3();
                    break;
                case "classic":
                    inc4();
                    break;
            }
            window.scrollTo(0, qLocation[3].offsetTop);
        }
    }
    for(let pizChoice in pizza)
    {
        if(pizza[pizChoice].checked)
        {
            switch(pizza[pizChoice].value)
            {
                case "cheese":
                    inc1();
                    break;
                case "veganPizza":
                    inc2();
                    break;
                case "supreme":
                    inc3();
                    break;
                case "olives":
                    inc4();
                    break;
            }
            window.scrollTo(0, qLocation[4].offsetTop);
        }
    }
    for(let actChoice in activity)
    {
        if(activity[actChoice].checked)
        {
            switch(activity[actChoice].value)
            {
                case "yoga":
                    inc1();
                    break;
                case "biking":
                    inc2();
                    break;
                case "swimming":
                    inc3();
                    break;
                case "hiking":
                    inc4();
                    break;
            }
        }
    }
    let counterCheck = [c1counter, c2counter, c3counter, c4counter];
    let max = 2;
    let mostPicked = 0;
    let resultHeader = document.getElementById("resultHeader");
    let resultImg = document.getElementById("resultImg");
    if((c1counter + c2counter + c3counter + c4counter)>4)
    {
        countChoices();
        window.scrollTo(0, qLocation[5].offsetTop);
    }
    function countChoices()
    {
        for(let i=0;i<counterCheck.length;i++)
        {
            if(counterCheck[i]>max)
            {
                mostPicked = counterCheck[i];
                switch(counterCheck[i])
                {
                    case counterCheck[0]:
                        resultHeader.innerHTML = "YOU GOT: NYC, NY";
                        resultImg.src = "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=96943ad8737b466bf990757730fdd1bb&auto=format&fit=crop&w=800&q=60";
                        break;
                    case counterCheck[1]:
                        resultHeader.innerHTML = "YOU GOT: DENVER, CO";
                        resultImg.src = "https://images.unsplash.com/photo-1507233701980-62a5bef7f2f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e4257fa35d9bff521dff7effac5afc71&auto=format&fit=crop&w=3578&q=80";
                        break;
                    case counterCheck[2]:
                        resultHeader.innerHTML = "YOU GOT: SAN FRANCISCO, CA";
                        resultImg.src = "https://images.unsplash.com/photo-1500455497814-0b8db1d32380?ixlib=rb-0.3.5&s=f864d29b911fd3e0f80efd2aeb21f597&auto=format&fit=crop&w=800&q=60";
                        break;
                    case counterCheck[3]:
                        resultHeader.innerHTML = "YOU GOT: PHOENIX, AZ";
                        resultImg.src = "https://images.unsplash.com/photo-1515523519502-c2fbef1354d7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=72f7d3b7076ad573ebd021a5f3fb705e&auto=format&fit=crop&w=800&q=60";
                        break;
                }
            }
        }
        if(counterCheck[0]==max && counterCheck[1]==max)
        {
            resultHeader.innerHTML = "YOU GOT: SEATTLE, WA";
            resultImg.src = "https://images.unsplash.com/photo-1516906346363-f61cc0219b22?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e2de3b723eb67152127d1738f2b86df7&auto=format&fit=crop&w=800&q=60";
        }
        else if(counterCheck[2]==max && counterCheck[3]==max)
        {
            resultHeader.innerHTML = "YOU GOT: LAS VEGAS, NV";
            resultImg.src = "https://images.unsplash.com/photo-1515565324614-5b1976a7ada9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d2ed0bb617d30b964e9565121960aecd&auto=format&fit=crop&w=800&q=60";
        }
        else if(mostPicked==0)
        {
            resultHeader.innerHTML = "YOU GOT: AUSTIN, TX";
            resultImg.src = "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7cf9e788a332a736734044e1ed74a283&auto=format&fit=crop&w=800&q=60";
        }
    }
    function inc1()
    {
        c1counter++;
    }
    function inc2()
    {
        c2counter++;
    }
    function inc3()
    {
        c3counter++;
    }
    function inc4()
    {
        c4counter++;
    }
}