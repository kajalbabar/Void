function checkname() {
        var  name= document.getElementById('fname');
        console.log(name);
        console.log('name'+name.value);
        if(name.value == "") {
                name.placeholder="Wrong input!! Please enter valid name";
                return false;
        }

        name= document.getElementById('lname');
        console.log(name);
        console.log('name'+name.value);
        if(name.value == "") {
                name.placeholder="Wrong input!! Please enter valid name";
                return false;
        }

        //for number should of 10 digits
        name= document.getElementById('cnumber');
        console.log('contact '+name.value);
        console.log(name.value.length);
        if(name.value =='') {
                name.placeholder="Please enter data";
                return false;
        }
        //if lenght is > or or 10
        else if(name.value.length<10 || name.value.length>10) {
                name.value="";
                name.placeholder="Contact number should be of 10 digits";
                return false;
        }

        //for mail
        name= document.getElementById('mail');
        console.log('contact '+name.value);
        console.log(name.value);
        if(name.value =='') {
                name.placeholder="Wrong input!! Please enter valid mail id";
                return false;
        }
        return true
}
