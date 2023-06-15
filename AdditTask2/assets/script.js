        function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 12)];
        }
        return color;
    }

        function click_of_btn1(){
        let box1 = document.getElementsByClassName("list1");
        for (let i = 0; i < box1.length; i++) {
            element = box1[i];
            element.style.border = `2px solid ${getRandomColor()}`;
        }
        let box2 = document.getElementsByClassName("a1");
        for (let i = 0; i < box2.length; i++) {
            element1 = box2[i];
            element1.classList.add("href");
        }



        }

        // создаю кнопку и механизм "слушетеля кнопки". ("действие", функция)
        let btn1 = document.getElementById('btn1');
        //console.log(btn1);
        btn1.addEventListener("click", click_of_btn1)





        

        

