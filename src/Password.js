import React, { useState } from 'react'

function Password() {
  let [length, setLength]= useState("8");
  let [choosespecial, setChoosespecial]= useState(true);
  let [choosenumber, setChoosenumber]= useState(true);
  let [choosecapital, setChoosecapital]= useState(true);
  let [specialchar, setSpecialchar]= useState("!");
  let [number, setNumber]= useState("2");
  let [position, setPosition]= useState("Starting");
  let [display, setDisplay]= useState();

  console.log(specialchar);


  function onChange_length(e){
    setLength(e.target.value);
  }

  function onClick_special(){
    if(choosespecial===true){
      setChoosespecial(false);
    }
    else{
      setChoosespecial(true);
      setSpecialchar("!");
    }
  }

  function onClick_number(){
    if(choosenumber===true){
      setChoosenumber(false);
    }
    else{
      setChoosenumber(true);
    }
  }


  function onChange_specialChar(e){
    setSpecialchar(e.target.value);
  }


  function onChange_number(e){
    setNumber(e.target.value);
  }

  function onClick_capital(){
    if(choosecapital===true){
      setChoosecapital(false)
    }
    else{
      setChoosecapital(true);
      setPosition("Starting");
    }
  }

  function onChange_position(e){
    setPosition(e.target.value);
  }


  function onClick_generate(){

    let tempArr=[];

    if(choosespecial===true){
      tempArr.push(specialchar);
    }
    else{

    }


    if(choosenumber===true){
      for (let i = 0; i < number; i++) {
        let num= "1234567890";
        let generate_random_number= num[(Math.floor(Math.random()*num.length))];

        tempArr.push(generate_random_number);
      }
    }
    else{

    }


    if(choosecapital===true){
      if(position==="Starting"){
        let cap= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let generate_random_Upper= cap[(Math.floor(Math.random()*cap.length))];
        tempArr.unshift(generate_random_Upper);
      }
    }
    else{

    }


    //fill remaining length of the password
    let remaining_length= length- tempArr.length;

    for (let i = 0; i < remaining_length; i++) {
      let small= "abcdefghijklmnopqrstuvwxyz";
      let generate_random_small=small[(Math.floor(Math.random()*small.length))];

      tempArr.push(generate_random_small);
    }


    // Ending capital character insert
    if(choosecapital===true){
      if(position==="Ending"){
        let cap= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let generate_random_Upper_= cap[(Math.floor(Math.random()*cap.length))];

        let get_last_index=length-1;
        tempArr.splice(get_last_index,1,generate_random_Upper_);
      }
    }


    
    setDisplay(tempArr);
  }
  
  return (
    <div className='h-[100vh] pt-[40px]'>
        <div className='flex justify-center'>
          <div className='grid justify-center gap-[10px] p-[25px] w-[535px] bg-[#ffe0e0] rounded-[12px]'>

            <div className='flex justify-center text-[25px] font-[300] mb-[20px]'>React Password Generator</div>

            <div className='flex justify-center text-[17px]'>Choose Password Length</div>
            <div className='flex justify-center'>
            <select onChange={(e)=>onChange_length(e)}>
              <option value="8">8</option>
              <option value="12">12</option>
              <option value="16">16</option>
              <option value="20">20</option>
            </select>
            </div>


            <div className='flex justify-center text-[17px]'>Do you wish to add any special character?</div>
            <div className='flex justify-center gap-[25px]'><div><button className={choosespecial?'Yes_NO_button':'Yes_NO_button_normal'} onClick={()=>onClick_special()}>Yes</button></div> <div><button className={choosespecial?'Yes_NO_button_normal':'Yes_NO_button'} onClick={()=>onClick_special()}>No</button></div></div>

            <div className='flex justify-center'>
              {
                choosespecial?
                <>
                <div>
                  <select onChange={(e)=>onChange_specialChar(e)}>
                    <option value="!">!</option>
                    <option value="@">@</option>
                    <option value="#">#</option>
                    <option value="$">$</option>
                    <option value="%">%</option>
                    <option value="^">^</option>
                    <option value="&">&</option>
                    <option value="*">*</option>
                  </select>
                </div>
                </>
                :
                <></>
              }
            </div>



            <div className='flex justify-center text-[17px]'>Do you wish to add numbers in password?</div>
            <div className='flex justify-center gap-[25px]'><div><button className={choosenumber?'Yes_NO_button':'Yes_NO_button_normal'} onClick={()=>onClick_number()}>Yes</button></div> <div><button className={choosenumber?'Yes_NO_button_normal':'Yes_NO_button'} onClick={()=>onClick_number()}>No</button></div></div>

            <div className='flex justify-center'>
              {
                choosenumber?
                <>
                <div>
                  <select onChange={(e)=>onChange_number(e)}>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                </>
                :
                <></>
              }
            </div>
            


            <div className='flex justify-center text-[17px]'>Do you wish to add capital latter in password?</div>
            <div className='flex justify-center gap-[25px]'><div><button className={choosecapital?'Yes_NO_button':'Yes_NO_button_normal'} onClick={()=>onClick_capital()}>Yes</button></div> <div><button className={choosecapital?'Yes_NO_button_normal':'Yes_NO_button'} onClick={()=>onClick_capital()}>No</button></div></div>

            <div className='flex justify-center'>
              {
                choosecapital?
                <>
                <div>
                  <select onChange={(e)=>onChange_position(e)}>
                    <option value="Starting" onChange={(e)=>onChange_position(e)}>Starting</option>
                    <option value="Ending" onChange={(e)=>onChange_position(e)}>Ending</option>
                  </select>
                </div>
                </>
                :
                <></>
              }
            </div>



            <div className='grid justify-center gap-[20px] mt-[40px]'>
              <div className='p-[10px] pb-[10px] pl-[35px] pr-[35px] border-[1px] border-[black] font-[600]'>{display}</div>
            </div>

            <div className='flex justify-center'><button className='pt-[10px] pb-[10px] pl-[45px] pr-[45px] bg-[black] text-[white] rounded-[35px]' onClick={()=>onClick_generate()}>Generate</button></div>
            

          </div>
        </div>
    </div>
  )
}

export default Password;