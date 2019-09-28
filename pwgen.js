        function passGen(){
        var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        // change the password into a dynamic random pw
        var newPass = '';
        for(i = 0;i<8;i++){
            newPass = newPass + alpha[Math.floor((Math.random() * 25) + 1)];
        }
        return alert(newPass);
        pwBox.innerHTML = pw;

        };
        function copyPass(){
            /* Get the text field */
            var copyText = document.getElementById("Copy Password");
            /* Copy the text inside the text field */
            document.execCommand("copy");
            /* Alert the copied text */
            alert("Copied the text: " + copyText.value);
        };        
        function showAlert(){
            alert('you clicked me');
            pwBox.innerHTML = pw;
        };
        genBtn.addEventListener('click',passGen);

    