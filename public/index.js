var cid = 0;

function init(){
    //Get the Character Dropdown Menu.
    const dropdown = document.getElementById("characterSelect");
    //Go through each character in the array.
    characters.forEach(function(e,i){
        //Create an option for the character.
        var option = document.createElement("option");
        //Set the value to the index refering to the character.
        option.value = "char"+i;
        //Create the name of the character.
        var name = document.createTextNode(e.name);
        //Append the name to the option.
        option.appendChild(name);
        //Append the option to the dropdown menu.
        dropdown.appendChild(option);
    });
    //Load Ragna's Palettes.
    palControls();
    //Render Ragna.
    renderCharacter();
}

function changeChar(){
    //Get the Character Dropdown Menu.
    const dropdown = document.getElementById("characterSelect");
    //Change the cid to the selected option.
    cid = parseInt(dropdown.value.replace("char",""));
    //Load the new palette.
    palControls();
    //Render the new character.
    renderCharacter();
};

function palControls(){
    //Get the character from the cid.
    const char = characters[cid];
    //Get the palControls div.
    const palc = document.getElementById("palControls");
    //Clear everything in said div.
    while (palc.firstChild) {
        palc.removeChild(palc.firstChild);
    }
    //Go through each of the character's palettes.
    char.colors.forEach(function(e,i){
        //Create the name of the palette.
        var name = document.createTextNode(e.name);
        //Append that name to the div.
        palc.appendChild(name);
        //Create a line-break and append it.
        palc.appendChild(document.createElement("br"));
        //Go through all the colors in the palette.
        for(var ci=0;ci<e.count;ci++){
            //Create an input.
            var color = document.createElement("input");
            //Set that input to color.
            color.type = "color";
            //Set the id to the palette and color id.
            color.id = "color"+i+"-"+ci;
            //Set the value to the default color. (Currently not functioning, only a placeholder until I get the default colors.)
            color.value = "#000000";
            //Set it to render the sprite after it's been changed.
            color.addEventListener("input",renderCharacter);
            //Append the color to the div.
            palc.appendChild(color);
        }
        //Create a line-break and append it.
        palc.appendChild(document.createElement("br"));
    });
}

function renderCharacter(){
    //Get the character from the cid.
    const char = characters[cid];
    //Grab the canvas.
    var canvas = document.getElementById("character");
    //Get the context of the canvas.
    const ctx = canvas.getContext('2d');
    //Create a new image.
    var img = new Image();
    //Wait for that image to load.
    img.addEventListener('load', function() {
        //Set the canvas size to the size of the image.
        canvas.width = img.width;
        canvas.height = img.height;
        //Clear the canvas.
        ctx.clearRect(0,0,canvas.width,canvas.height);
        //Draw the image.
        ctx.drawImage(img,0,0);
        //Get the image data.
        var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
        var data = imageData.data;
        //Go through each pixel of the image data.
        for(var di=0;di<data.length;di+=4){
            //Go through each palette of the character.
            char.colors.forEach(function(e,i){
                //Go through all the colors in the palette.
                for(var ci=0;ci<e.count;ci++){
                    //Check if the color of the pixel equals the img color.
                    if([data[di+2],data[di+1],data[di]].equals(char.imgBase[i][ci])){
                        //Log the successful data. (Debug)
                        //console.log([data[di],data[di+1],data[di+2]]);
                        //Find the corrisponding input.
                        var color = document.getElementById("color"+i+"-"+ci);
                        //Replace the color with the one on the user palette.
                        data[di]   = parseInt(color.value.slice(1,3),16); //Red
                        data[di+1] = parseInt(color.value.slice(3,5),16); //Green
                        data[di+2] = parseInt(color.value.slice(5,7),16); //Blue
                    }
                }
            });
        }
        //Apply the Image Data.
        ctx.putImageData(imageData,0,0);
        //Print the imageData. (Debug)
        //console.log(data);
    }, false);
    //Set the image to the character's image.
    img.src = "assets/"+char.img;
}

function loadPalette() {
    //Load the palette file.
    document.getElementById("palImport").files[0].arrayBuffer().then(function(file){
        //Create a DataView for the palette
        const pal = new DataView(file);
        //Get the character from the cid.
        const char = characters[cid];
        //Make imgBase. (Debug)
        //var imgBase = [];
        //Go through all of their palettes.
        char.colors.forEach(function(e,i){
            //Create an array for the default colors. (Debug)
            //var imgArray = []
            //Go through all the colors in the palette.
            for(var ci=0;ci<e.count;ci++){
                //Make an array for the hex code.
                var hex = [];
                //Grab each 8 bit value from the palette.
                for(var hi=0;hi<3;hi++){
                    //Get the Hex Code from the pointer.
                    hex[hi] = pal.getUint8(e.pointer+(ci*4)+hi).toString(16);
                    //Make sure the string is 2 characters long.
                    while(hex[hi].length < 2) {
                        hex[hi] = "0"+hex[hi];
                    }
                }
                //Find the corrisponding input.
                var color = document.getElementById("color"+i+"-"+ci);
                //Apply the color to the input.
                color.value = "#"+hex[2]+hex[1]+hex[0];
                //Also apply the hex to the imgArray. (Debug)
                //imgArray.push(hex);
            }
            //Add imgArray to imgBase. (Debug)
            //imgBase.push(imgArray);
        });
        //Print imgBase (Debug)
        //console.log(JSON.stringify(imgBase));
        //Render the character.
        renderCharacter();
    });
}

function savePalette(){
    //Get the character from the cid.
    const char = characters[cid];
    //Create an array buffer.
    const file = new ArrayBuffer(char.byteSize);
    //Create a DataView for said array buffer.
    const pal = new DataView(file);
    //Set the initial data.
    pal.setUint32(0x00,0x4850414C);
    pal.setUint32(0x04,0x25010000);
    pal.setUint32(0x08,0x20040000);
    pal.setUint32(0x0C,0x00010000);
    pal.setUint32(0x10,0x00000000);
    pal.setUint32(0x12,0x00000000);
    pal.setUint32(0x18,0x01000010);
    pal.setUint32(0x1C,0x00000000);
    pal.setUint32(0x20,0x00FF00FF); //Transparent Color
    //Go through each 32 bytes.
    for(var i=0x24;i<char.byteSize;i+=4){
        //Go through all of their palettes.
        char.colors.forEach(function(e,pi){
            //Check if the pointer matches i.
            if(e.pointer === i) {
                //Go through all the colors in the palette.
                for(var ci=0;ci<e.count;ci++){
                    //Find the corrisponding input.
                    var color = document.getElementById("color"+pi+"-"+ci);
                    //Set the Hex Code from the pointer into the file.
                    pal.setUint8(e.pointer+(ci*4)+2,parseInt(color.value.slice(1,3),16));
                    pal.setUint8(e.pointer+(ci*4)+1,parseInt(color.value.slice(3,5),16));
                    pal.setUint8(e.pointer+(ci*4)+0,parseInt(color.value.slice(5,7),16));
                    pal.setUint8(e.pointer+(ci*4)+3,0xFF);
                }
                //Skip through the colors that were writen.
                i+=e.count*4;
            } else {
                //Place an empty color.
                pal.setUint32(i,0x000000FF)
            }
        });
    }
    //Download the file.
    download(char.internal+"00_00.hpl",arrayBufferToBase64(file));
}
