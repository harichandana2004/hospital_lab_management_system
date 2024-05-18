import React from 'react'
import './right.css'
function Left()
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
                <td style={{ border: '2px solid black' }}>Urinalysis</td>
                <td style={{ border: '2px solid black' }}>800</td>
                <td style={{ border: '2px solid black' }}>24:00:00</td>
            </tr>
            </tbody>
        </table>
        </body>
    )
}

export default Left;