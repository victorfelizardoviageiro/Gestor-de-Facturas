import React, { useState, useRef, useEffect, useContext } from 'react'
import {RiArrowDownSLine} from 'react-icons/ri';
import {IoAddCircle} from 'react-icons/io5';
import {Header,Title,Filter,FilterOptions,Button} from './HomeHeaderStyle';
import { FormShowContext } from '../../context/FormShowContext';


function HomeHeader() {    
    const [isOpen, setIsOpen] = useState({status:false,selected:""});
    const filterOptionsRef = useRef(null);
    const optionsRef = useRef(null);

    //Context Variables
    const {showForm,setShowForm} = useContext(FormShowContext);

    useEffect(()=>{
        const linksHeight = optionsRef.current.offsetHeight;
        if(isOpen.status){
            filterOptionsRef.current.style.height = `${linksHeight}px`;
        }else{
            filterOptionsRef.current.style.height = "0px";
        }
    },[isOpen]);

    function setState(status,selected){
        setIsOpen({status:status, selected:selected})
    }
    return (
       <Header>
           <Title>
                <h1>Facturas</h1>
                <p>Tem 7 Facturas pendentes</p>
           </Title>
           <Filter>
               <p>{isOpen.selected?isOpen.selected:"Estado"}</p>
               <RiArrowDownSLine onClick={()=>setState(!isOpen.status,isOpen.selected)}/>

               <FilterOptions ref={filterOptionsRef} className={isOpen.status?"opened":"closed"}>
                    <ul ref={optionsRef} onMouseLeave={()=>setState(false,isOpen.selected)}>
                        <li onClick={()=>setState(false,"")}>Todas</li>
                        <li onClick={()=>setState(false,"Pagas")}>Pagas</li>
                        <li onClick={()=>setState(false,"Pendentes")}>Pendentes</li>
                   </ul>
               </FilterOptions>
           </Filter>
           <Button onClick={()=>setShowForm(1)} color="#7C5DF9">
                <IoAddCircle/>
                Nova Factura
           </Button>

       </Header>
    )
}

export default HomeHeader
