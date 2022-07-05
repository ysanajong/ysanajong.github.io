
// // Check if Value is an Object or not.
// const iO = function(v) {
//     if (v === null) {
//         return false;
//     }
//     return (typeof v === 'object');
// };

// const oP = function(o) {
//     for (let v in o) {
//         if (iO(o[v])) {
//             oP(o[v]);
//         } else {
//             console.log(v, o[v]);
//         }

//     }
// }
// API Function 
document.getElementById('output').classList.add('hidden');

function getDHL() {
    try {
        geT();
    }   catch (err) {
        console.log(err)
        document.getElementById('error').textContent = err;
        document.getElementById('error').style.display = block;
    }
}

function rR() {
        document.getElementById('wrapper').style.backgroundColor = 'white';
    }

async function geT() {
    document.getElementById('output').classList.add('hidden');
    inPut = document.getElementById('tn-input').value;
    const parameters = new URLSearchParams({
        trackingNumber: inPut,
    });
    const response = await fetch(`https://api-eu.dhl.com/track/shipments?${parameters.toString}`, {
        method: 'GET',
        headers: {
            'DHL-API-Key': 'pO2qP8ianK1QwSAnC2zgIyN3rxR14bzn',
        },
    } );
    if (response !== 200) {
        document.getElementById('error').style.display = 'block';
        document.getElementById('wrapper').style.backgroundColor = 'red';
    } else {
        const d = await response.json();
        document.getElementById('ref-num').textContent = d.shipments[0].details.references[0].number
        document.getElementById('o-country').textContent = d.shipments[0].origin.address.countryCode
        document.getElementById('o-address').textContent = d.shipments[0].origin.address.addressLocality
        document.getElementById('d-address').textContent = d.shipments[0].destination.address.addressLocality
        document.getElementById('d-country').textContent = d.shipments[0].destination.address.countryCode
        document.getElementById('proofOfDelivery').textContent = d.shipments[0].details.proofOfDelivery.timestamp
        document.getElementById('proofOfDeliverySignedAvailable').textContent = d.shipments[0].details.proofOfDeliverySignedAvailable
        document.getElementById('totalNumberOfPieces').textContent = d.shipments[0].details.totalNumberOfPieces
        document.getElementById('weight-ut').textContent = d.shipments[0].details.weight.unitText
        document.getElementById('weight-v').textContent = d.shipments[0].details.weight.value
        document.getElementById('volume-ut').textContent = d.shipments[0].details.volume.unitText
        document.getElementById('volume-v').textContent = d.shipments[0].details.volume.value
        document.getElementById('').textContent = d.shipments[0].events[0] // need to iterate trough as number of events might defer..
        document.getElementById('').textContent = d.shipments[0].events.length // to see the number of events in the object.
        document.getElementById('status-desc').textContent = d.shipments[0].status.description
        document.getElementById('status-code').textContent = d.shipments[0].status.statusCode
        document.getElementById('status-time').textContent = d.shipments[0].status.timestamp
        document.getElementById('output').classList.remove('hidden')
        console.log(d);        
    }
}
