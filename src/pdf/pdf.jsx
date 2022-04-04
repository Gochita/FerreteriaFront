import jsPDF from "jspdf"

export const imprimir = (factura) => {

    let doc = new jsPDF('p', 'pt')

    doc.setFontSize(20)
    doc.text('GRACIAS POR SU COMPRA', 20, 40)
    
    doc.setFontSize(16)
    doc.text('FACTURA', 20, 80)
    doc.setFontSize(14)
    doc.text(`Factura id: ${factura.consec}`, 20, 100)
    doc.text(`Fecha: ${factura.fechaFactura}`, 20, 120)
    doc.text(`Cliente nombre: ${factura.nombreCliente}`, 20, 140)
    
    doc.setFontSize(16)
    doc.text(`PRODUCTOS `, 20, 220)

    doc.setFontSize(14)
    let ejeY = 220;
    factura.listaProductosFactura.forEach((p, i) => {
        ejeY += 20
        doc.text(`${i+1}. ${p.nombreProducto}  $${p.precioProducto}  x   `, 40, ejeY)
    })

    doc.setFontSize(16)
    doc.text(`TOTAL:  $${factura.totalPagar}`, 20, ejeY + 40)
    
    doc.save(`factura_${factura.id}_${factura.fechaFactura}.pdf`)

}