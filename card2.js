
// //first card, get the data
// document.getElementById('first-card').addEventListener('click', function(){
//     const productName = document.getElementById('first-name').innerText;
//     const productPrice = document.getElementById('first-price').innerText;
//     const productQuantity = document.getElementById('first-quantity').innerText;
 
//     const totalPrice = parseFloat(productPrice) * parseFloat( productQuantity);
 
//  //show the data
//     const container = document.getElementById('table-container')
//      const tr = document.createElement('tr');
//      tr.innerHTML = `
//          <td>${1}</td>
//          <td>${productName}</td>
//          <td>${productPrice}</td>
//          <td>${productQuantity}</td>
//          <td>${totalPrice}</td>
     
//      `;
//      container.appendChild(tr);
//  }); 



//second card

//  document.getElementById('second-card').addEventListener('click', function(event){
//     const pName = event.target.parentNode.parentNode.children[0].innerText;
//     const pPrice = event.target.parentNode.parentNode.children[2].children[0].innerText;
//     const pQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText;
//     // console.log(productName, productPrice, productQuantity);

//     const sumTotal = parseFloat(pPrice) + parseFloat (pQuantity);
//  });


//third card

// document.getElementById('third-card').addEventListener('click', function(){
//     const productName = document.getElementById('third-name').innerText;
//     const productPrice = document.getElementById('third-price').innerText;
//     const productQuantity = document.getElementById('third-quantity').innerText;
//     const totalPrice = parseFloat(productPrice) * parseFloat( productQuantity);
//     serial += 1;
 
//  //show the data
//     displayData(productName, productPrice, productQuantity, totalPrice);
// }); 



//common function

//  function displayData(pName, pPrice, pQuantity, sumTotal){
//     const container = document.getElementById('table-container')
//     const tr = document.createElement('tr');
//     tr.innerHTML = `
//         <td>${1}</td>
//         <td>${pName}</td>
//         <td>${pPrice}</td>
//         <td>${pQuantity}</td>
//         <td>${sumTotal}</td>
    
//     `;
//     container.appendChild(tr);
//  };