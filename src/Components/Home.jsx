import React from 'react'
import './home.css'
import { useDispatch, useSelector } from 'react-redux'
import { increamentCounter } from '../redux/action'
import { decreamentCounter } from '../redux/action'
import { resetCounter } from '../redux/action'
const Home = () => {
    const dispatch=useDispatch()
    const selector=useSelector((state)=>{
      return state.increamentReducer.count

    })
    console.log('selector',selector)
  return (
    <div className='home'>
        <h1 className='display'>{selector}</h1>
        <div className="but1">
            <button className='but' onClick={()=>{
                dispatch(increamentCounter())
            }}>Increament</button>
            <button className='but' onClick={()=>{
              dispatch(decreamentCounter())
            }}>Decreament</button>
            <button className='but' onClick={()=>{
              dispatch(resetCounter())
            }}>Reset</button>
        </div>
    </div>
  )
}

export default Home