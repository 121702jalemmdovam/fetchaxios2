// // FETCH GET
// 1)
// const productDiv = document.getElementById('product');

// fetch('https://northwind.vercel.app/api/products')
//   .then(res => res.json())
//   .then(data => {
//     if (data.length > 0) {
//       let enbahalimehsul = data[0];

//       data.forEach(mehsul => {
//         if (mehsul.unitPrice > enbahalimehsul.unitPrice) {
//           enbahalimehsul = mehsul;
//         }
//       });
//       const mehsulElement = document.createElement('div');
//       mehsulElement.textContent = `Ən bahalı məhsul: ${enbahalimehsul.name}, Qiymət: ${enbahalimehsul.unitPrice}`;

//       productDiv.appendChild(mehsulElement);
//     } else {
//       console.log("Mehsul tapilmadi.");
//     }
//   });
// 2)
// const productDiv = document.getElementById('product');

// fetch('https://northwind.vercel.app/api/products')
//   .then(res => res.json())
//   .then(data => {
//     if (data.length > 0) {
//       let ümumiStock = 0;
//       data.forEach(mehsul => {
//         ümumiStock += mehsul.unitsInStock;
//       });
//       const ortalamaStock = ümumiStock / data.length;
//       const ortalamaStockElement = document.createElement('div');
//       ortalamaStockElement.textContent = `Ortalama stok miqdarı: ${ortalamaStock.toFixed(2)}`;
//       productDiv.appendChild(ortalamaStockElement);
//     } else {
//       console.log("Mehsul tapilmadi.");
//     }
//   })

// 3)

// const names = document.getElementById('name');

// fetch('https://northwind.vercel.app/api/products')
//   .then(res => res.json())
//   .then(data => {
//     const adlar = data.map(product => product.name);
//     const Cilebaslayanadlar = adlar.filter(name => name.startsWith('C'));

//     Cilebaslayanadlar.forEach(name => {
//       const nameElement = document.createElement('div');
//       nameElement.textContent = name;
//       names.appendChild(nameElement);
//     })
//   })
 
// 4)

const consumer=document.getElementById('consumer')
// fetch('https://northwind.vercel.app/api/customers')
//     .then(res => res.json())
//     .then(data => {
//        const london = data.filter(item => item.address.city === "London");
//        london.forEach(item => {
//             console.log(item.contactName);
//        });
//     });

// 5)

// const say = document.getElementById('say');

// fetch('https://northwind.vercel.app/api/customers')
//   .then(res => res.json())
//   .then(data => {
//     const sayi = data.filter(item => item.address.region === "NULL");
//     say.textContent = `umumi sayı: ${sayi.length}`;
//   })

// 6)
// const posts = document.getElementById('posts');
// const say=document.getElementById('say')

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
//   .then(data => {
//     const sayi = data.filter(item => item.userId === 1);
//     say.textContent = `umumi sayı: ${sayi.length}`;
//   })

// 7)