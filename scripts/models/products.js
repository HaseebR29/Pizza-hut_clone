// Product JS constain the structure of pizzas
// Pizza object - Id, Name, Desc, prices

class Product{
    constructor(id, name, desc, price, url){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.url = url;
        this.isAddedInCart = false;
    }
}

export default Product;
