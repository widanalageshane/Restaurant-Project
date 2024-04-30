import { MenuCardAdd } from './CLASS/addmenucard.js';
import { BACKEND_URL } from './config.js'

const menuCardAdd = new MenuCardAdd(BACKEND_URL);


//1.This is for getPost---- catch the card section div in which we want to add the card divs
//const menu_div = document.getElementById("menu_card");



//---------------------------addPost() event listener --------------------------------------------------------------

//2. This is for Post of Menu to databe--- catch the input fileds form admin post page
const input_name = document.getElementById("id_name");
const input_description = document.getElementById("id_description");
const input_price = document.getElementById("id_price");
const image = document.getElementById("id_image");




//key press function with above renderTask function.
const button_done = document.getElementById("button_done");

button_done.onclick = (event) => {
//get all input_name, input_description, input_price, input_image values to a variable
    //alert(input_name.value + input_description.value + input_price.value + input_image.value);
    //button_done.innerHTML = "Add Menu";
    event.preventDefault();

    const name = input_name.value.trim();
    const description = input_description.value.trim();
    const price = "Price  "+input_price.value.trim()+" €"
    //const image1 = image.files[0].name;
    //console.log("images name"+ image1);
    // get the const image , the image file from input_image field
    //const image = input_image;




    //...........FormData new class for saving images to backend..(insted of json- cannot load img. binary codes in json)....

    const formData = new FormData();
    // adding items to the .....formData......class
    formData.append('menu_name', name);
    formData.append('menu_description', description);
    formData.append('price', price);
    formData.append('image_name',image.files ? image.files[0] : null)
    //console.log(formData);

    //alert(name + description + price + image);
    if(name !== '' && description !== '' && price !== ''){ 
        // add above name, description, price, image to the menuCard array
        menuCardAdd.addPost(formData)
        .then((menu) => {
            //console.log(menu);
            window.location.href="indexMenu.html"
            //render_menu(menu);
            // alert('Menu added successfully');
            //console.log(menu);
        }).catch(error => {
            alert(error)
          })
    } else {
          alert('Please fill all the fields')
        }
  
}       //end of button_done.onclick function



