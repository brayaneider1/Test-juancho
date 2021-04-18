import { Input } from 'antd'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
export const AddressSearch = ({ data, setData, dummy }) => {

    const filter = (event) => {
        var text = event.target.value
        const data = dummy
        const newData = data.filter(function (item) {
            const itemData = item.ipAddress.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        setData({
            data: newData
        })
    }


    return (
        <div className="Search" >
            <div className="content">
                <div className="container-custom" >
                    <div className="seeker">
                        <Input onChange={(value) => filter(value)} type="text" minlength="7" maxlength="15" size="15" pattern="^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$" placeholder="Search for any IP address or domain" />
                    </div>
                </div>
                <div className="suffix" >
                    <IoIosArrowForward />
                </div>

            </div>
        </div>
    )
}
