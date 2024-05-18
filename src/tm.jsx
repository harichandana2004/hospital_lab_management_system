import React from 'react'

function TM()
{
    return(
        <table border={2} cellPadding={5} cellSpacing={20} align='center'>
            <thead>
            <tr align='center'>
                <th style={{ border: '2px solid black' }}>Test Name</th>
                <th style={{ border: '2px solid black' }}>Cost</th>
                <th style={{ border: '2px solid black' }}>Time required for report generation</th>
            </tr>
            </thead>
            <tbody>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>Prostate-specific antigen</td>
                <td style={{ border: '2px solid black' }}>2000</td>
                <td style={{ border: '2px solid black' }}>48:00:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>Prostatic acid phosphate</td>
                <td style={{ border: '2px solid black' }}>850</td>
                <td style={{ border: '2px solid black' }}>06:00:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>CA 125</td>
                <td style={{ border: '2px solid black' }}>1000</td>
                <td style={{ border: '2px solid black' }}>00:01:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>Carcinoembryonic antigen</td>
                <td style={{ border: '2px solid black' }}>2500</td>
                <td style={{ border: '2px solid black' }}>00:20:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>Alpha-fetoprotein</td>
                <td style={{ border: '2px solid black' }}>550</td>
                <td style={{ border: '2px solid black' }}>00:05:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>Human chorionic gonadotropin</td>
                <td style={{ border: '2px solid black' }}>900</td>
                <td style={{ border: '2px solid black' }}>00:10:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>CA 19-9</td>
                <td style={{ border: '2px solid black' }}>300</td>
                <td style={{ border: '2px solid black' }}>00:02:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>CA 15-3</td>
                <td style={{ border: '2px solid black' }}>800</td>
                <td style={{ border: '2px solid black' }}>00:15:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>CA 27-29</td>
                <td style={{ border: '2px solid black' }}>400</td>
                <td style={{ border: '2px solid black' }}>00:10:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>Lactate dehydrogenase</td>
                <td style={{ border: '2px solid black' }}>1000</td>
                <td style={{ border: '2px solid black' }}>00:20:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>Neuron-specific enolase</td>
                <td style={{ border: '2px solid black' }}>300</td>
                <td style={{ border: '2px solid black' }}>00:25:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>Bladder tumor marker studies</td>
                <td style={{ border: '2px solid black' }}>3000</td>
                <td style={{ border: '2px solid black' }}>48:00:00</td>
            </tr>
            
            </tbody>
        </table>
    )
}

export default TM;