import { Input } from 'antd'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
export const AddressSearch = () => {
    return (
        <div className="search" >
            <div className="content">
                <div className="container-custom" >
                    <div className="seeker">
                        <Input type="text" minlength="7" maxlength="15" size="15" pattern="^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$" placeholder="Search for any IP address or domain" />
                    </div>
                </div>
                <div className="suffix" >
                    <IoIosArrowForward />
                </div>

            </div>
        </div>
    )
}
