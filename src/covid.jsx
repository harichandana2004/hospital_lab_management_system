import React from 'react'
import './right.css'
function Covid()
{
    return(
        <body>
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
                <td style={{ border: '2px solid black' }}>Molecular Test</td>
                <td style={{ border: '2px solid black' }}>500</td>
                <td style={{ border: '2px solid black' }}>24:00:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>NAAT Test</td>
                <td style={{ border: '2px solid black' }}>2200</td>
                <td style={{ border: '2px solid black' }}>48:00:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>PCR</td>
                <td style={{ border: '2px solid black' }}>500</td>
                <td style={{ border: '2px solid black' }}>10:00:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>Antigen Test</td>
                <td style={{ border: '2px solid black' }}>2000</td>
                <td style={{ border: '2px solid black' }}>24:00:00</td>
            </tr>
            </tbody>
        </table>
        </body>
    )
}

export default Covid;