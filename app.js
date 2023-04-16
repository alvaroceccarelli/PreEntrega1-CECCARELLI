function saludar(){
    alert("bienvenido a suplementos store")
}
function despedir(){
    alert("gracias por su visita vuelva pronto")
}

let x = 1;
while (x < 2) {
    console.log("pedido numero" + x)
    x = x + 1;
}
saludar()
let compra = prompt(`¿que desea comprar de nuestra web?:
*whey protein
*creatina
*pre entreno
`
)
switch (compra){
    case "whey protein":
        console.log(`Pedido Confirmado: ${compra}, valor: $15000 + hipotetico recargo por cuotas`)
        let tarjeta =prompt(`¿con cuantas cuotas quiere pagar?:
        un pago
        tres cuotas sin interes
        seis cuotas con 15% de recargo`)
        switch (tarjeta){
            case"un pago":
            alert("genial!, serian $15000")
            break
            case "tres cuotas":
                alert("prefecto, serian 3 cuotas de $5000 cada una")
                break
                case"seis cuotas":
                alert("gracias,serian 6 cuotas de $2875 cada una")
                break
                default:
                    alert("por favor seleccione el metodo de pago")
        }
        break
        case "creatina":
            console.log(`Pedido Confirmado: ${compra}, valor: $12000 + hipotetico recargo por cuotas`)
            let tarjeta1 =prompt(`¿con cuantas cuotas quiere pagar?:
        un pago
        tres cuotas sin interes
        seis cuotas con 15% de recargo`)
        switch (tarjeta1){
            case"un pago":
            alert("genial!, serian $12000")
            break
            case "tres cuotas":
                alert("prefecto, serian 3 cuotas de $4000 cada una")
                break
                case"seis cuotas":
                alert("gracias,serian 6 cuotas de $2300 cada una")
                break
                default:
                    alert("por favor seleccione el metodo de pago")
        }
            break
            case "pre entreno":
                console.log(`Pedido no Confirmado: ${compra}, motivo: no hay stock`)
                alert("lo siento no tenemos mas stock, eliga otro producto")
                break
                default:
                    console.log(`ningun producto seleccionado`)
                    alert("no ha seleccionado ningun producto")
                    break
    }
despedir()
