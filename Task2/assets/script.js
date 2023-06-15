
        function Hello_Client(name)
        {
            alert(`Привет, ${name}`);
        }

        function Heloo_Client_Age(age_client)
        {
            alert(`Ухты! Тебе целых ${age_client} лет`);
        }

        let nums = parseInt(prompt("1 - Введите свое ФИО; \n2 - Введите свой возраст."));

        switch (nums){
        case 1:
            let name_client = prompt("Введите Ваше ФИО");
            Hello_Client(name_client);
            break;

        case 2:
            let age_client = parseInt(prompt("Введите Ваш возраст"));
            Heloo_Client_Age(age_client);
            break;

        default:
            alert("Error! Некорректный ввод!");
        }





        

        

