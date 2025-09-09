const loadCategories = async () => {
    const url_1 = `https://openapi.programming-hero.com/api/categories`;
    const res_1 = await fetch(url_1);
    const data_1 = await res_1.json();
    const cat_1 = data_1.categories;
    cat_1.forEach(element_1 => {
        displayCategory(element_1.category_name, element_1.id, element_1.small_description);
    });
    
};
let categories_1 = document.getElementById("categories");
    categories_1.innerHTML = `<button id="plants" class="btn category font-normal rounded-full pl-4 py-1 px-4 min-h-12 text-left cursor-pointer bg-[#15803D] text-white hover:bg-[#15803D]  hover:text-white  hover:shadow-md hover:shadow-gray-500 tooltip tooltip-right" onclick="loadTrees('plants')">All Trees<span class="tooltip-content text-xs">All trees will be shown.</span></button>
     `;
const displayCategory = (name_1, id_1, description_1) => {
     categories_1.innerHTML += `
     <button id= "${id_1}" class="btn font-normal category rounded-full pl-4 py-1 px-4 min-h-12 hover:bg-[#15803D] text-left  hover:text-white hover:shadow-md  hover:shadow-gray-500 tooltip tooltip-right" onclick="loadTrees(${id_1})">${name_1}<span class="tooltip-content text-xs">${description_1}</span></button>
     `;
}; 


const loadTrees = async(id_1) => {
    const categories_2 = document.getElementsByClassName('category');
    for (let category_1 of categories_2) {
    category_1.classList.remove('bg-[#15803D]', 'text-white');
    }
    
    card.innerHTML = `
    <div class="col-span-full flex justify-center items-center py-20">
            <div class="flex gap-2 items-center">
                <span class="loading loading-ball loading-xs"></span>
                <span class="loading loading-ball loading-sm"></span>
                <span class="loading loading-ball loading-md"></span>
                <span class="loading loading-ball loading-lg"></span>
                <span class="loading loading-ball loading-xl"></span>
            </div>
        </div>
    `;
    
    document.getElementById(`${id_1}`).classList.add('bg-[#15803D]', 'text-white');

    if (id_1 === 'plants') {
        const url_2 = `https://openapi.programming-hero.com/api/plants`
        const res_2 = await fetch(url_2);
        const data_2 = await res_2.json();
        card.innerHTML = ``;
        
        data_2.plants.forEach(element_2 => {
            loadCard(element_2.id, element_2.image, element_2.name, element_2.description, element_2.category, element_2.price);
        });
    }

    else{
        const url_3 = `https://openapi.programming-hero.com/api/category/${id_1}`
        const res_3 = await fetch(url_3);
        const data_3 = await res_3.json();
        
        card.innerHTML = ``;
        
        data_3.plants.forEach(element_3 => {
            loadCard(element_3.id, element_3.image, element_3.name, element_3.description, element_3.category, element_3.price);
        });
    }
    
};

let card = document.getElementById("card-container");
card.innerHTML = ``;


 const loadCard = (id, image, name, description, category, price) => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML += `
        <div id="card-${id}" class="card p-3 sm:p-4 flex flex-col rounded-lg bg-white">
            <div class="card h-40 sm:h-44 md:h-48 lg:h-52 w-full mb-3 overflow-hidden rounded-lg shadow-lg">
                <img src="${image}" alt="" class="object-cover w-full h-full">
            </div>
            <p id="name-${id}" class="font-semibold text-sm mb-2">
                <button class="btn decoration-0 bg-white hover:shadow-none border-0 p-0" onclick="showModal('${id}', '${image}', '${name}', '${description}', '${category}', '${price}')">
                    <span class="hover:text-green-700 tooltip tooltip-right">${name}
                <span class="tooltip-content text-xs">Click here for more<br>info on ${name}</span>
                    </span>
                </button>
            </p>
            <p class="text-xs mb-2 text-opacity-80 max-h-12 overflow-hidden text-ellipsis line-clamp-3">
                ${description}
            </p>
            <div class="flex flex-row justify-between items-center gap-2 mb-3">
            <div class="badge badge-soft badge-success bg-[#DCFCE7] px-1.5 sm:px-2 py-2 sm:py-3 text-[#15803D] text-xs sm:text-sm rounded-full max-w-20 sm:max-w-24 md:max-w-28 lg:max-w-32 truncate overflow-hidden">${category}</div>
                <p class="text-xs sm:text-sm font-semibold text-[#15803D]"><i class="fa-solid fa-bangladeshi-taka-sign fa-xs"></i><span id="price-${id}">${price}</span></p>
                
            </div>
            <a id="cart-${id}" class="btn rounded-full bg-[#15803D] text-white shadow-none border-0 hover:bg-white hover:text-black hover:border-1 hover:border-black hover:shadow-black hover:shadow-sm w-full" onclick="loadPriceontoCart('${name}', ${price}, 'cart-${id}')">Add to Cart</a>
        </div>
    `;
}; 

const cart = document.getElementById("cart");
    cart.innerHTML = '<p class="text-center text-gray-500 text-sm">Your Cart is Empty</p>';
const itemCounts = {}; 

totalPrice = document.getElementById("total-price");
totalPrice.innerHTML = 0;
const itemPrices = {};
let totalPriceValue = 0;
const loadPriceontoCart = (name, price, id) => {
    if (!itemCounts[id]) {
        itemCounts[id] = 1;

        if (cart.innerHTML.includes('Your Cart is Empty')) {
            cart.innerHTML = "";
        }

        cart.innerHTML += `
            <div id="cart-item-${id}" class="px-3 py-2 bg-[#F0FDF4] h-16 flex flex-row justify-between items-center">
                <div class="flex flex-col gap-1"> 
            <p class="font-semibold text-sm">${name}</p>
            <p class="flex flex-row items-center">
                <i class="fa-solid fa-bangladeshi-taka-sign fa-sm opacity-50"></i>
            <span class="opacity-50 flex flex-row gap-1 items-center">${price}
                <span class="text-[0.6rem]">X</span>
                            <span id="count-${id}">${itemCounts[id]}</span>
                </span>
                    </p>
                </div>
         <button id="${id}" class="btn px-1 py-0 border-0 bg-[#F0FDF4] h-sm tooltip tooltip-left cursor-pointer hover:shadow hover:shadow-black hover:text-red-600">
                    <span class="tooltip-content text-xs">Click to remove one<br> item from cart</span>
                    <i class="fa-solid fa-x opacity-50"></i>
                </button>
            </div>
        `;
        if (!itemPrices[id]) {
            itemPrices[id] = price;
        }
        totalPriceValue += price;
        totalPrice.innerHTML = totalPriceValue;
    } else {
        itemCounts[id]++;
        document.getElementById(`count-${id}`).innerText = itemCounts[id];
        totalPriceValue += price;
        totalPrice.innerHTML = totalPriceValue;
    }


    alert("Adding item to cart");
};

cart.addEventListener("click", (event) => {
    const target = event.target.closest("[id]");
    if (target) {
const id = target.id;
        if (itemCounts[id] > 1) {
            itemCounts[id]--;
            document.getElementById(`count-${id}`).innerText = itemCounts[id];
            totalPriceValue -= itemPrices[id];
            totalPrice.innerHTML = totalPriceValue;
        } else {
            document.getElementById(`cart-item-${id}`).remove();
            totalPriceValue -= itemPrices[id] * itemCounts[id];
            totalPrice.innerHTML = totalPriceValue;
            delete itemCounts[id];
            delete itemPrices[id];

    let isCartEmpty = true;
    for (let key in itemCounts) {
         if (itemCounts[key] > 0) {
                    isCartEmpty = false;
                    break;
                }
            }
    if (isCartEmpty) {
        cart.innerHTML = '<p class="text-center text-gray-500 text-sm">Your Cart is Empty</p>';
        }
        }

    alert("Removing items from cart");
    }
});




const loadAllPlants = async()=> {
        card.innerHTML = `
         <div class="col-span-full flex justify-center items-center py-20">
                <div class="flex gap-2 items-center">
                    <span class="loading loading-ball loading-xs"></span>
                    <span class="loading loading-ball loading-sm"></span>
                    <span class="loading loading-ball loading-md"></span>
                    <span class="loading loading-ball loading-lg"></span>
                    <span class="loading loading-ball loading-xl"></span>
                </div>
            </div>
        `;
const url_4 = `https://openapi.programming-hero.com/api/plants`

    const res_4 = await fetch(url_4);
    const data_4 = await res_4.json();
    
    card.innerHTML = ``;
    
    data_4.plants.forEach(element_4 => {
            
    loadCard(element_4.id, element_4.image, element_4.name, element_4.description, element_4.category,element_4.price);

    });

};

const showModal = (id, image, name, description, category, price) => {
    const modalElement = document.createElement('div');
    modalElement.innerHTML = `
        <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
            <div class="modal-box overflow-hidden">
           <h3 class="text-xl font-bold">${name}</h3>
            <div class="card mt-[0.5rem] mb-[0.5rem] h-50 md:h-75 w-full overflow-hidden rounded-lg shadow-lg">
                    <img src="${image}" alt="" class="object-cover w-full h-full">
                </div>
                <p class="mb-[0.3rem]"><span class="font-semibold">Category: </span>${category}</p>
            <p class="mb-[0.3rem]"><span class="font-semibold">Price: </span><i class="fa-solid fa-bangladeshi-taka-sign fa-xs"></i>${price}</p>
                <p class="mb-[0.3rem]"><span class="font-semibold">Description: </span>${description}</p>
                <div class="modal-action">
                    <form method="dialog">
                  <button class="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    `.trim();

    document.getElementById("modal-section").appendChild(modalElement.firstElementChild);
    document.getElementById("my_modal_5").showModal();

    document.getElementById("my_modal_5").addEventListener("close", () => {
        document.getElementById("my_modal_5").remove();
    });
};

   loadCategories();
   loadAllPlants();