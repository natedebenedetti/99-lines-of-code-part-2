document.addEventListener("DOMContentLoaded", function () {
    var friends = ["Matt", "Brooks", "Dustin", "Jordan", "Chip"];



    let btn1 = document.createElement('button');
    btn1.style.display = 'flex';
    let btn1Text = document.createTextNode('Sing!');

    btn1.appendChild(btn1Text);
    document.body.appendChild(btn1);

    btn1.addEventListener('click', function () {
        let div1 = document.createElement('div');
        div1.className = 'friend'
        document.body.appendChild(div1);
        let mattH3 = document.createElement('h3');
        let mattText = document.createTextNode('matt');
        mattH3.appendChild(mattText);
        div1.appendChild(mattH3);
        

        let div2 = document.createElement('div');
        div2.className = 'friend'
        document.body.appendChild(div2);
        let brooksH3 = document.createElement('h3');
        let brooksText = document.createTextNode('brooks');
        brooksH3.appendChild(brooksText);
        div2.appendChild(brooksH3);
        

        let div3 = document.createElement('div');
        div3.className = 'friend'
        document.body.appendChild(div3);
        let dustinH3 = document.createElement('h3');
        let dustinText = document.createTextNode('dustin');
        dustinH3.appendChild(dustinText);
        div3.appendChild(dustinH3);
        

        let div4 = document.createElement('div');
        div4.className = 'friend'
        document.body.appendChild(div4);
        let jordanH3 = document.createElement('h3');
        let jordanText = document.createTextNode('jordan');
        jordanH3.appendChild(jordanText);
        div4.appendChild(jordanH3);
        

        let div5 = document.createElement('div');
        div5.className = 'friend'
        document.body.appendChild(div5);
        let chipH3 = document.createElement('h3');
        let chipText = document.createTextNode('chip');
        chipH3.appendChild(chipText);
        div5.appendChild(chipH3);
        

        for (f = 0; f < friends.length; f++) {
                
            for (l = 99; l <= 99 && l >= 1; --l) {
                var li = l - 1;
                var name = friends[f];
                if (li >= 1) {
                    let para = document.createElement('p');
                    let paraText = document.createTextNode(l + " lines of code in the file, " + l + " lines of code; " + name + " strikes one out, clears it all out, " + li + " lines of code in the file");
                    para.appendChild(paraText);
                    div1.appendChild(para);
                } else {
                    let para = document.createElement('p');
                    let paraText2 = document.createTextNode(l + " line of code in the file, 1 line of code; " + name + " strikes one out, clears it all out, no more lines of code in the file");
                    para.appendChild(paraText2);
                    div1.append(para);
                }
            }

        }
    })

})




