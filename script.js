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



   loadCategories();