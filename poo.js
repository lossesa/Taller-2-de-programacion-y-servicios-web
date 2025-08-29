// EJERCICIO 2
// IMPLEMENTACIÓN DEL PARADIGMA ORIENTADO A OBJETOS

// Conceptos nuevos: Metodo estatico.
// Se define con static: No se llama con new, sino directamente con la clase. Se utiliza cuando se trabaja con info externa o general. En este caso se usa el metodo getTotalValue de forma estatica debido a que el valor total no depende de un solo producto, sino de un array de productos y este se encuentra por fuera de la clase product. 

// En caso contrario, tendria que crear un metodo que enliste los productos o crear una clase inventario por a parte. 


// CALCULADORA DE PRODUCTOS

class Product {
    constructor(id, name, price, category, stock = 0){
        this.id = id,
        this.name = name,
        this.price = price,
        this.category = category,
        this.stock = stock 
    }

    updateStock(quantify){
        this.stock += quantify; // Se suma esa cantidad con la cantidad que ya hay en stock.
        if (this.stock < 0) this.stock = 0; // Esto es para evitar que se muestre en pantalla algo como: stock: -2. Y en cambio se vea: stock: 0.
        return `New stock for ${this.name}: ${this.stock}`;
    }
    

    // Calcula y aplica un descuento de acuerdo a la categoria.
    calculateDiscount(){
        let discount = 0; // Se usa let porque el valor de discount puede cambiar.
        switch (this.category){
            case "Electronics":
                discount = 30;
                break;
            case "Furniture":
                discount = 20;
                break;
            default:
                discount = 0;
        }

        const discount_amount = (this.price * discount) / 100;
        const price_after_discount = this.price - discount_amount;
        const iva = price_after_discount * 0.19;
        const final_price = price_after_discount + iva;

        if (this.stock > 0){
            return `Category: ${this.category}\n Price: $${this.price}\n Discount: ${discount_amount}%\n Iva: ${iva}\n Final Price: $${final_price}`;
        } else {
            return `There is no stock for this category.`
        }        
    }


    // Metodo estatico para calcular el valor total del inventario.
    static getTotalValue(products){
        // Forma uno
        let total = 0;
        for (const product of products){
            total += product.price * product.stock;
        }
        return `Total inventory value: $ ${total}`

        // Forma dos
        // return products.reduce((total, product) => total + product.price * product.stock, 0);
    }

    // Muestra la info de los productos.
    getInfo(){
        return `Id: ${this.id}\n Name: ${this.name}\n Price: ${this.price}\n Category: ${this.category}\n Stock: ${this.stock}`;
    }
};

// Creación de los productos. 
const product_1 = new Product(1, 'Laptop', 850, 'Electronics', 8);
const product_2 = new Product(2, 'Sofa', 100, 'Furniture', 0);
const product_3 = new Product(3, 'Computer', 1300, 'Electronics', 6);
const product_4 = new Product(4, 'Bookcase', 500, 'Furniture', 6);
const product_5 = new Product(5, 'Bed', 700, 'Furniture', 12);


// Array del inventario de productos.
const inventory = [product_1, product_2, product_3, product_4, product_5];

// PRUEBA MANUAL
// Producto 1.
console.log("\nPRODUCT 1\n", product_2.getInfo());
console.log("\nDISCOUNT 1\n", product_2.calculateDiscount());
console.log("\nUPDATE STOCK 1\n", product_2.updateStock(2));
console.log("--------------------------------------")

// Producto 2.
console.log("\nPRODUCT 2\n", product_3.getInfo());
console.log("\nDISCOUNT 2\n", product_3.calculateDiscount());
console.log("\nUPDATE STOCK 2\n", product_3.updateStock(-4));
console.log("--------------------------------------")

// Valor total inventario.
console.log("\nTOTAL VALUE\n", Product.getTotalValue(inventory));
