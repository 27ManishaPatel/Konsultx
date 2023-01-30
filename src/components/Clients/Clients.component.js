import React from "react";
import Header  from "../Header/Header.component";
import Footer from "../Footer/Footer.component";
import './Clients.styles.css'
const Clients = () =>{
  const Array = ["hello","hello", "hello", "hello", "hello", "hello" ];
  const OurClients = Array.map(client => {
    return( <div className="client-div">
      <h1>{client}</h1>
      </div>)
  })
  return(
    <div>
      <Header/>
      <main className="client-main-container">
      <h1 className="clients-heading"> A few of our clients</h1>
<div className="clients-list-container" >{OurClients}</div>
      </main>
      
      <Footer />
    </div>
  )
}

export  default Clients;