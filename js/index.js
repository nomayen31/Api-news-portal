const handleCategory = async () => {
    const response = await fetch(' https://openapi.programming-hero.com/api/news/categories')

    const data = await response.json();

    const tabContainer = document.getElementById('tab-container')
    const trimedData = data.data.news_category.slice(0,
        3);
        // console.log(trimedData);

    trimedData.forEach((category) => {
        const div = document.createElement('div')
        div.innerHTML = `
            <a onClick="handleLoadNews('${category.category_id}')" class="tab">${category.category_name}</a>
            `
        tabContainer.appendChild(div)
    }); 
};


// category data load 
const handleLoadNews = async(categoryId)=>{
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)
    const data = await response.json();
    console.log(data.data);
}




handleCategory()



// 47 min 