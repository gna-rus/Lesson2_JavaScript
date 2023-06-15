


        function click_of_btn1(){
        let box1 = document.getElementsByClassName("wrapper_head");
        console.log(box1)
        element = box1[0];
        element.classList.toggle("activBox");
        }


        // создаю кнопку и механизм "слушетеля кнопки". ("действие", функция)
        let btn1 = document.getElementById('btn1');
        //console.log(btn1);
        btn1.addEventListener("click", click_of_btn1)





        

        

