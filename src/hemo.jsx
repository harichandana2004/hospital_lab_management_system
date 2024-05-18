import React from 'react'

function Hemo()
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
                <td style={{ border: '2px solid black' }}>Biopsy</td>
                <td style={{ border: '2px solid black' }}>1400</td>
                <td style={{ border: '2px solid black' }}>48:00:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>Ct Scan</td>
                <td style={{ border: '2px solid black' }}>10000</td>
                <td style={{ border: '2px solid black' }}>03:00:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>MIR Scan</td>
                <td style={{ border: '2px solid black' }}>3000</td>
                <td style={{ border: '2px solid black' }}>00:01:00</td>
            </tr>
            
            </tbody>
        </table>
    )
}

export default Hemo;