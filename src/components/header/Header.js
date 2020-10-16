import { Avatar, Button } from '@material-ui/core'
import { AccessTime, HelpOutline, SearchOutlined } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../../firebase'
import { useStateValue } from '../../StateProvider'
import './Header.css'

function Header() {
    const [{user}] = useStateValue();
    const history = useHistory()
    // const signOut = () =>{
    //      if(user){
    //         auth.signOut();
    //         history.push('./')

    //     }
    // }
    return (
        <div className="header" >
            <div className="header_left">
                <Avatar 
                    className="header_avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}

                />
                <AccessTime />
            </div>
            <div className="header_search">
                <SearchOutlined />
                <input placeholder="Search here" />
            </div>
            <div className="header_right">
                <HelpOutline />
                {/* <Button onClick={signOut}> Sign Out </Button> */}
            </div>
        </div>
    )
}

export default Header
