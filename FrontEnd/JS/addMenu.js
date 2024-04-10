import { MenuCardAdd } from './CLASS/addmenucard.js';

const menuCardAdd = new MenuCardAdd('http://localhost:3001');


//1.This is for getPost---- catch the card section div in which we want to add the card divs
const menu_div = document.getElementById("menu_card");



//---------------------------addPost() event listener --------------------------------------------------------------

//2. This is for Post of Menu to databe--- catch the input fileds form admin post page
const input_name = document.getElementById("id_name");
const input_description = document.getElementById("id_description");
const input_price = document.getElementById("id_price");
const input_image = document.getElementById("id_image");
console.log(input_name);

//key press function with above renderTask function.
const button_done = document.getElementById("button_done");

button_done.onclick = () => {
//get all input_name, input_description, input_price, input_image values to a variable
    //alert(input_name.value + input_description.value + input_price.value + input_image.value);
    //button_done.innerHTML = "Add Menu";

    const name = input_name.value.trim();
    const description = input_description.value.trim();
    const price = input_price.value.trim();
    const image = input_image.value.trim();
    
    //alert(name + description + price + image);
    if(name !== '' && description !== '' && price !== '' && image !== ''){ 
        // add above name, description, price, image to the menuCard array
        menuCardAdd.addPost(name, description, price, image)
        
        .then((menu) => {
            alert('Menu added successfully');
            //console.log(menu);
            render_menu(menu);
            //alert('Menu added successfully');
            //console.log(menu);
        })

    } else {
        alert('Please fill all the fields');
    }    
        
};



