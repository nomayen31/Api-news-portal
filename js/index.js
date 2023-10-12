const handleCategory = async () => {
    const response = await fetch(' https://openapi.programming-hero.com/api/news/categories')

    const data = await response.json();

    const tabContainer = document.getElementById('tab-container')
    const categoryData = data.data.news_category;

    //    categoryData.slice(0,3).forEach((category) => {
    //         console.log(category);
    //         const div = document.createElement('div');
    //         div.innerHTML = `
    //         <a class="tab">${category.category_name}</a> 
    //         `
    //         tabContainer.appendChild(div);

    //     });
    for (const category of categoryData) {
        // console.log(category);
        const sliceData = categoryData.slice(0,3);
        console.log(sliceData);

        const div = document.createElement('div');
            div.innerHTML = `
            <a class="tab">${category.category_name}</a> 
            `
            tabContainer.appendChild(div);

    }
    // console.log(categoryData);
}

handleCategory()



// 47 min 