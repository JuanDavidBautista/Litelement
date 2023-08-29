import { css } from "lit-element"
export default css`body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}



.container {
    position: relative;
    background-color: red;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 32px;
    max-width: 400px;
}



.inner-container {
    background-color: white;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 20px;
    position: relative;
}

label {
    position: absolute;
    left: 70px;
    color: rgb(114, 116, 117);
    font-size: 16px;
    pointer-events: none;
    font-weight: bold;
}

.circle {
    background-color: white;
    border-radius: 50%;
    width: 85px;
    height: 85px;
    position: absolute;
    top: -20px;
    left: -22px;
    background-size: cover;
    background-position: center;
    background-image: url("../img/logo.png");
}

.gray-box {
    background-color: #ccc;
    padding: 10px;
    border-radius: 10px;
    margin-top: 30px;
    margin-left: 15px;
    max-width: 270px;
}

.list {
    list-style-type:none;
    padding: 0;
}

.list li {
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    color: rgb(79, 81, 83);
    font-weight: bold;
}


.list img {
    height: 15px;
    margin-right: 10px; 
}


.row1 {
    display: flex; 
    margin-bottom: 10px;
    max-width: 900px;
    margin-top: -530px ;
    margin-left: 338px;
  }

  
  .card {
    flex: 1;
    width: 300px;
    max-height: 200px;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 7px 8px 20px rgba(0, 0, 0, 0.7);
    margin-right: 40px;
    font-family: "Helvetica Neue", sans-serif;
    font-size: 16px;
    display: flex; 
    position: relative;
    z-index: 1; 
}


.card img {
    max-width: 47px; 
    height: 50px;
    margin-right: 10px; 
}


.card h2 {
    font-size: 18px;
    margin: 10px 0 10px 20px; 
    color:#5a5a5a;
    position: relative; 
    top: 10px; 
    right: 32px;
}

.card h2::after {
    content: "";
    display: block;
    width: 120px; 
    border-bottom: 2px solid #afadad; 
    position: absolute;
    left: 3%; 
}

.card img:nth-child(3) {
    position: absolute;
    top:45%;
    left: 215px;
    transform: translateY(-50%);
    width: 30px; /* Ajusta el ancho de la segunda imagen */
    height: auto; /* Ajusta la altura automáticamente */
}


/* Posicionar el contenedor del menú en la esquina superior derecha */
.dropdown {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 55px;
  }
  
  /* Estilos para el ícono de las tres rayas (Font Awesome) */
  .menu-icon {
    display: flex; /* Activa el contenedor flex */
    align-items: center; /* Centra verticalmente los elementos */
    justify-content: center; /* Centra horizontalmente los elementos */
    cursor: pointer;
    font-size: 30px;
    padding: 8px;
    background-color: #5a5a5a;
    border-radius: 5px;
    color: #ffffff;

  }
  
  /* Estilos para la lista desplegable */
  .menu {
    display: none;
    position: absolute;
    background-color: #ffffff;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 8px;
    min-width: 150px;
    right: 20px;
    top: 20px;
    z-index: 2; /* Aumenta el z-index del menú desplegable */
}
  
  .menu li {
    list-style: none;
  }
  
  .menu a {
    display: block;
    padding: 8px 16px;
    text-decoration: none;
    color: #333;
  }
  
/* Muestra y oculta el contenido de la lista desplegable al hacer clic en el ícono */
.menu-icon:hover + .menu,
.menu:hover {
  display: block;
}


.solicitud h1{
  font-size: 33px;
    color: #5a5a5a;
    position: relative;
    top: 2.5pc;
    left: 42pc;
    text-align: center;
    border-bottom: 1px solid silver;
    max-width: 271px;
}

.solicitud h3{

  font-size: 18px;
  color: #353434;
  position: relative;
  top: 2.5pc;
  left: -9pc;
  text-align: center;
  font-family: Arial light;
}

#opci{
  width: 250px;
  height: 30px;
  font-size: 16px;
  position: absolute;
  right: 61pc;
  top: 24pc;
  border-radius: 10px;
}


#opciones {
    width: 265px; /* Ajusta el ancho del cuadro de opciones */
    height: 31px; /* Ajusta el alto del cuadro de opciones */
    font-size: 16px; 
    position: absolute; 
    right: 25pc; 
    top: 24pc; 
    border-radius: 10px;
}

.contorno {
  width: 55pc;
  height: 17pc;
  border: 2px solid #afadad;
  border-radius: 20px;
  background-color: #ffffff;
  position: absolute;
  top: 40%;
  left: 18%;
  }

/* Estilo específico para el elemento "Elemento a comprar" */
.elemento {
    position: absolute;
    top: 27px;
    left: 40px;
    padding: 10px;
    background-color: #ffffff;
  }
  
  /* Estilo para el input dentro del elemento "Elemento a comprar" */
  .elemento input[type="text"] {
    width: 180%;
    height: 20px;
    margin: 5px 0;
    padding: 5px;
    border-radius: 5px;
  }
  



/* Estilo específico para el valor "Valor de la compra" */
.valor{
    position: absolute;
    top: 27px;
    left: 29pc;
    padding: 10px;
    background-color: #ffffff;
  }
  
  /* Estilo para el input dentro del valor "Valor de la compra" */
  .valor input[type="text"] {
    width: 180%;
    height: 20px;
    margin: 5px 0;
    padding: 5px;
    border-radius: 5px;
  }

  .unidades {
    position: absolute;
    right: 87px;
    top: -293px;
  }
  
  .unidades #opciones {
    width: 343px;
    height: 34px;
    font-size: 16px;
    border-radius: 5px;
    color: #c0c0c0;
  }

/* Estilo específico para el valor "Valor de la compra" */
.fecha{
    position: absolute;
    top: 76px;
    left: 29pc;
    padding: 10px;
    background-color: #ffffff;
  }
  
  /* Estilo para el input dentro del valor "Valor de la compra" */
  .fecha input[type="text"] {
    width: 180%;
    height: 20px;
    margin: 5px 0;
    padding: 5px;
    border-radius: 5px;
  }

/* Estilo específico para el valor "Valor de la compra" */
.descripcion{
    position: absolute;
    top: 135px;
    left: 40px;
    padding: 10px;
    background-color: #ffffff;
  }
  
  /* Estilo para el input dentro del valor "Valor de la compra" */
  .descripcion input[type="text"] {
    width: 300%;
    height: 85px;
    margin: 5px 0;
    padding: 5px;
    border-radius: 13px;
  }

  button {
    background-color: #ff0000;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    top: 181px; 
    left: 41.7pc;
    width: 150px;
  }
`