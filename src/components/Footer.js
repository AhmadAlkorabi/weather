import React from 'react'

const Footer = ({data}) => {
  return (
    <div className='footer w-50'>
    <div className=' d-flex justify-content-around '>
        <div className='feelsLike'>
            {data.main ? <div className='t text-center'>{Math.ceil((data.main.feels_like)-273.15)}</div> :null}
            {data.main ? <p>Feels Like</p> :null}
        </div>
        <div className='humidity'>
            {data.main ? <div className='t text-center'>{data.main.humidity}</div> :null}
            {data.main ? <p>Humidity</p> :null}
        </div>
        <div className='winds'>
            {data.wind? <div className='t text-center'>{data.wind.speed}</div>:null}
            {data.wind? <p>Wind</p>:null}
        </div>
    </div>
    </div>
  )
}

export default Footer