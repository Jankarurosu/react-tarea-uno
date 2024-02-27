import React from 'react'
import ReactDOM from 'react-dom/client'
import { Principal } from './Principal'
import './style.css'
import './utils/tareasData'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Principal />
    </React.StrictMode>,
)