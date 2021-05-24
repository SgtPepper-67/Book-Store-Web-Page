class Header {

    render(count) {
        const html = `
            <div class="header-container">
                <div class="wrapper">
                    <input  
                        type='text' 
                        id='limitSetter' 
                        class="setLimitBox" 
                        placeholder="Set the Limit"
                        onkeyup="handleSetLimit()"
                    />
                    <div class="header-counter">
                         ${count}🛒
                    </div>
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

function handleSetLimit() {
    document.getElementById("limitSetter")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        productsPage.itemsLimit = parseInt(document.getElementById("limitSetter").value);
        console.log('pressed!')
        productsPage.render();
    }
})
}


const productsStore = localStorageUtil.getProducts();
 
const headerPage = new Header();

