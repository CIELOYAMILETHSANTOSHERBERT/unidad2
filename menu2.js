fetch('menu.json')

.then(response => response.json())

then(date=>{
    const menuContainer = document.getElementById
    ('menu-container');
    
    DataTransfer.items.forEach(categor => {
        const categoryTitle = document.createElement('h2')
       
        categoryTitle.textContent = categoty.category;
        menuContainer.appendChild(categoryTitle);
        const table = document.createElement('table');
       
        const tableHead= `<tr><th>Foto</th><th>Descripcion</th><thPrecio</th></tr>`;
        let tableBody = ``;

        category.items.forEach.item =>{
             tableBody +=`1<tr>
                <td><img scr="${item.image} alt="${item.name}
                <td>${item.name} - "${item.description}"</td>
                <td>${item.precio}</td>
             </tr>`;
        }
        
    })
})