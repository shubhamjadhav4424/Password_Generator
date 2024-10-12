import React, { useState } from 'react'
import { Sub } from './Sub';
import { useDispatch } from 'react-redux';
import { addtolist } from './counterSlice';

function Selector() {

    let [chooseopen, setchooseopen]= useState(false);
    let dispatch= useDispatch(); 

    function onClick_choose_subject(){
        if(chooseopen==false){
            setchooseopen(true);
        }

        else{
            setchooseopen(false);
        }
    }

    function onClick_add(subject){
        dispatch(addtolist(subject));
    }



  return (
    <div className='flex justify-center'>
        <div className='flex justify-center'>
            <div className='grid justify-center'>
                <div onClick={()=>onClick_choose_subject()} className="select">Select Subject</div>
                {
                    chooseopen?
                    <>
                    <div>
                        {
                            Sub.map((ele,ind)=>{
                                return(
                                    <div className='option' key={ind} onClick={()=>onClick_add(ele)}>{ele.subject}</div>
                                )
                            })
                        }
                    </div>
                    </>
                    :
                    <>
                    </>
                }
            </div>
        </div>
    </div>
    )
}

export default Selector