//first card, get the data

let serial = 0;
document.getElementById('first-card').addEventListener('click', function(){
   const productName = document.getElementById('first-name').innerText;
   const productPrice = document.getElementById('first-price').innerText;
   const productQuantity = document.getElementById('first-quantity').innerText;
   const totalPrice = parseFloat(productPrice) * parseFloat( productQuantity);
   serial += 1;

//show the data
   displayData(productName, productPrice, productQuantity, totalPrice);
   document.getElementById('first-card').setAttribute('disabled', true);
}); 


// second card,, using object from browser
document.getElementById('second-card').addEventListener('click', function(event){
    const pName = event.target.parentNode.parentNode.children[0].innerText;
    const pPrice = event.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText;
    const sumTotal = parseFloat(pPrice) + parseFloat (pQuantity);
    serial += 1;

    displayData(pName, pPrice, pQuantity, sumTotal);
    document.getElementById('second-card').setAttribute('disabled', true);

});
 

//third card,
document.getElementById('third-card').addEventListener('click', function(){
    const productName = document.getElementById('third-name').innerText;
    const productPrice = document.getElementById('third-price').innerText;
    const productQuantity = document.getElementById('third-quantity').innerText;

    const totalPrice = parseFloat(productPrice) - parseFloat( productQuantity);
    serial += 1;
   
 //show the data,
    displayData(productName, productPrice, productQuantity, totalPrice);
    document.getElementById('third-card').setAttribute('disabled', true);
}); 


//4th card,
document.getElementById('fourth-card').addEventListener('click', function(){
    const productName = document.getElementById('fourth-name').innerText;
    const productPrice = document.getElementById('fourth-price').innerText;
    const productQuantity = document.getElementById('fourth-quantity').innerText;

    const totalPrice = parseFloat(productPrice) * parseFloat( productQuantity);
    serial += 1;

//show the data,
    displayData(productName, productPrice, productQuantity, totalPrice);
    document.getElementById('fourth-card').setAttribute('disabled', true);
});


//fifth card,
document.getElementById('fifth-card').addEventListener('click', function(){
    const productName = document.getElementById('fifth-name').innerText;
    const productPrice = document.getElementById('fifth-field-price').value;
    const productQuantity = document.getElementById('fifth-field-quantity').value;
    const total = parseFloat(productPrice) / parseFloat(productQuantity);
    serial += 1;

    displayData(productName, productPrice, productQuantity, total);
    document.getElementById('fifth-card').setAttribute('disabled', true);

});


//sixth card,
document.getElementById('sixth-card').addEventListener('click', function(){
    const productName = document.getElementById('sixth-name').innerText;
    const productPrice = document.getElementById('sixth-field-price').value;
    const productQuantity = document.getElementById('sixth-field-quantity').value;
    const total = parseFloat(productPrice) * parseFloat(productQuantity);
    serial += 1;

    displayData(productName, productPrice, productQuantity, total);
    document.getElementById('sixth-card').setAttribute('disabled', true);

});





// //common function display 
// function getAllData(){
//     const productName = document.getElementById('third-name').innerText;
//     const productPrice = document.getElementById('third-price').innerText;
//     const productQuantity = document.getElementById('third-quantity').innerText;
// };

//common function,
function displayData(pName, pPrice, pQuantity, sumTotal){
    const container = document.getElementById('table-container')
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${pName}</td>
        <td>${pPrice}</td>
        <td>${pQuantity}</td>
        <td>${sumTotal}</td>
    
    `;
    container.appendChild(tr);
}