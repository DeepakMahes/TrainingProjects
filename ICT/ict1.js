function calculateFinalAmount() {
    var name = document.getElementById("custname").value;
    var phno = document.getElementById("mobileNumber").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var productclick= document.getElementById("product").selectedIndex;
    var quantity = document.getElementById("quantity").value;
    var payment = document.getElementById("mode").selectedIndex;
    var bagtotal = document.getElementById("bill").value;
    var cupcode = document.getElementById("coupon").value;
    var option = document.getElementById("delivery").value;
    
    
console.log(name);
console.log(phno);
console.log(email);
console.log(address);
console.log(getElementsByTagName("option")[productclick].value);
console.log(quantity);
console.log(getElementsByTagName("option")[payment].value);
console.log(bagtotal);
console.log(cupcode);
console.log(option);

    var price = () => {
        if (productclick === "TV") {
            price = 30000;
        }
        else if (productclick === "Refrigerator") {
            price = 50000;
        } else {
            price = 20000;
        }
        return price;
    }
    
    
    var bagtotal = quantity * price
    var payment = "Debit Card";
    var total = calculateBagTotal();
    function calculateBagTotal() {
        if (payment === "Debit Card") {
            return bagtotal - (bagtotal / 100 *5);
        } else {
            return bagtotal;
        }
    }
     console.log("total amount"+total);
}
calculateFinalAmount();


