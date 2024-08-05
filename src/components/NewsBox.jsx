import React from 'react'

const NewsBox = ({ logo, title, description }) => {
    return (
        <div className='news-box-main'>
            <div id="news-sec-1">
                <img src={logo} alt={logo} />
                
                <div id="news-sec-2">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>

            <div id="news-sec-3">
                <button className='rounded-md bg-[#7f5af0] px-5 py-2.5 text-sm font-medium text-[#fffffe] shadow hover:bg-[#6f42f7]'>subscribe</button>
            </div>
        </div>
    )
}

export default NewsBox