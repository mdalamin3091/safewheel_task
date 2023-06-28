import React from 'react'
import Header from '../components/header'

interface Props {
    children: React.ReactNode;
}
const Layout = (props: Props) => {
    return (
        <div className="bg-primary_bg">
            <Header />
            {props.children}
        </div>
    )
}

export default Layout