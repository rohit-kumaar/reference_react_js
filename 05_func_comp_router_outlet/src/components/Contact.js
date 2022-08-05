import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
        <h2> Contact Us</h2>
        <table width="100%" border={1}>
            <tr>
                <td width="30%">
                    <ul>
                        <li> <Link to="noida"> Noida</Link></li>
                        <li> <Link to="delhi"> Delhi</Link></li>
                    </ul>
                </td>
                <td>
                    <Outlet />
                </td>
            </tr>
        </table>
    </div>
  )
}
