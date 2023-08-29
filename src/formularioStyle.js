import { css } from "lit-element"
export default css`body{
                    background-image: url(../img/imagen1.jpeg);
                    background-repeat: no-repeat;
                    background-size: cover;
                    }
                    .container{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 0;
                        padding: 0;
                        min-width: 100vw;
                        width: 100%;
                        height: 100%;
                    }
                    .container2{
                        width: 100%;
                        padding: 30px;
                    }
                    #formu{
                        margin-top: 10%;
                        margin-left: 40%;
                        margin-right: 38%;
                        margin-bottom: 15%;
                        justify-content: space-between;
                        align-items: center;
                        text-align: center;
                        border-radius: 8px;
                        box-shadow: -10px 15px 10px black;
                    }
                    #formu input{
                        margin-bottom: 20px;
                        margin-top: 20px;
                        padding: 5px;
                        width: 270px;
                        box-sizing: border-box;
                        border: none;
                        border-bottom: 1px solid red;
                        background-color: transparent;
                    }
                    #formu button{
                        background-color: red;
                        border-radius: 7px;
                        margin-top: 40px;
                        width: 170px;
                        height: 30px;
                        color: white;
                        font-size: 20px;
                        border: none;
                        margin-bottom: 10px;
                    }
                    h1{
                        background-color: rgb(255, 27, 27);
                        margin: 0;
                        font-family: sans-serif;
                        color: white;
                        border-radius: 8px 8px 0px 0px;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        height: 50px;
                    }
                    a{
                        margin-bottom: 20px;
                        color: grey;
                    }`