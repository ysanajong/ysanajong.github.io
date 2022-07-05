inPut = document.getElementById('tn-input').value;
const tN = new URLSearchParams({
    trackingNumber: inPut,
});
const U = `https://api-eu.dhl.com/track/shipments?${tN.toString}`;
async function getDHL() {
        const response = await fetch(U, {
            method: 'GET',
            headers: {
                'DHL-API-Key': 'pO2qP8ianK1QwSAnC2zgIyN3rxR14bzn',
            },
    } );
    const d = await response.json();
    
    const trackNum = d.shipments[0].details.references[0].number
    const destAdd  = d.shipments[0].destination.address.addressLocality
    const status = d.shipments[0].status.statusCode
    const orgAdd = d.shipments[0].origin.address.addressLocality
    document.getElementById('track-num').textContent = trackNum
    document.getElementById('dest').textContent = destAdd
    document.getElementById('org_add').textContent = orgAdd
    document.getElementById('status').textContent = status
    console.log(d)
}
console.log(d)
/* document.getElementById('test').innerHTML = `
<h1> DHL Shipment Tracking Information </h1>
Events ${events.length}

` */