import React from 'react'
import './right.css'
function Right()
{
    return(
        <table border={2} cellPadding={5} cellSpacing={20}>
            <thead>
            <tr align='center'>
                <th style={{ border: '2px solid black' }}>Test Name</th>
                <th style={{ border: '2px solid black' }}>Cost</th>
                <th style={{ border: '2px solid black' }}>Time required for report generation</th>
            </tr>
            </thead>
            <tbody>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>Antinuclear antibody</td>
                <td style={{ border: '2px solid black' }}>3000</td>
                <td style={{ border: '2px solid black' }}>00:05:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>Blood chemistry study</td>
                <td style={{ border: '2px solid black' }}>300</td>
                <td style={{ border: '2px solid black' }}>00:01:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>Blood lipid profile</td>
                <td style={{ border: '2px solid black' }}>400</td>
                <td style={{ border: '2px solid black' }}>00:02:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>BNP testing</td>
                <td style={{ border: '2px solid black' }}>900</td>
                <td style={{ border: '2px solid black' }}>00:15:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>Complete blood count</td>
                <td style={{ border: '2px solid black' }}>500</td>
                <td style={{ border: '2px solid black' }}>00:01:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>Creatinine</td>
                <td style={{ border: '2px solid black' }}>1500</td>
                <td style={{ border: '2px solid black' }}>01:00:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>C-reactive protein</td>
                <td style={{ border: '2px solid black' }}>4500</td>
                <td style={{ border: '2px solid black' }}>05:00:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>Erthrocyte sedimentation rate</td>
                <td style={{ border: '2px solid black' }}>1200</td>
                <td style={{ border: '2px solid black' }}>00:20:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>Fecal occult bllod test</td>
                <td style={{ border: '2px solid black' }}>2000</td>
                <td style={{ border: '2px solid black' }}>00:35:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>Genetic studies</td>
                <td style={{ border: '2px solid black' }}>8000</td>
                <td style={{ border: '2px solid black' }}>02:00:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>Hematocrit</td>
                <td style={{ border: '2px solid black' }}>250</td>
                <td style={{ border: '2px solid black' }}>00:30:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>Liver function tests</td>
                <td style={{ border: '2px solid black' }}>2500</td>
                <td style={{ border: '2px solid black' }}>12:30:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>Peripheral blood smear</td>
                <td style={{ border: '2px solid black' }}>600</td>
                <td style={{ border: '2px solid black' }}>00:50:00</td>
            </tr>
            <tr align='center'>
                <td style={{ border: '2px solid black' }}>Rheumatoid factor</td>
                <td style={{ border: '2px solid black' }}>700</td>
                <td style={{ border: '2px solid black' }}>00:35:00</td>
            </tr>
            </tbody>
        </table>
    )
}

export default Right;