document.addEventListener("DOMContentLoaded", function () {
    var friends = ["Matt", "Brooks", "Dustin", "Jordan", "Chip"];



    let btn1 = document.createElement('button');
    btn1.style.display = 'flex';
    let btn1Text = document.createTextNode('Sing!');

    btn1.appendChild(btn1Text);
    document.body.appendChild(btn1);

    btn1.addEventListener('click', function () {
        let div = document.createElement('div');
        div.className = 'friend'
        document.body.appendChild(div);

        for (f = 0; f < friends.length; f++) {
            let header3 = document.createElement('h3');
            let header3Text = document.createTextNode(friends[f]);
            header3.appendChild(header3Text);
            div.appendChild(header3);
            for (l = 99; l <= 99 && l >= 1; --l) {
                var li = l - 1;
                var name = friends[f];
                if (li >= 1) {
                    let para = document.createElement('p');
                    let paraText = document.createTextNode(l + " lines of code in the file, " + l + " lines of code; " + name + " strikes one out, clears it all out, " + li + " lines of code in the file");
                    para.appendChild(paraText);
                    div.appendChild(para);
                } else {
                    let para2 = document.createElement('p');
                    let paratext2 = document.createTextNode(l + " line of code in the file, 1 line of code; " + name + " strikes one out, clears it all out, no more lines of code in the file");
                    para2.appendChild(paratext2);
                    div.appendChild(para2);                     
                }
            }

        }
    })



})




