import React from 'react'

const SearchBox = (props) => {
  return (
    <div className='col col-sm-4 m-auto p-3'>
    <input className=' form-control '
    value={props.location}
    onChange={e => props.setLocation(e.target.value)}
    onKeyPress={props.searchLocation}
    placeholder='Enter the country'></input>
</div>
  )
}

export default SearchBox