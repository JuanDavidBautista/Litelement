import { LitElement, html } from "lit-element";
import styleScss from './formularioStyle' 

export class MyForm extends LitElement {
    static get styles() {
        return [styleScss];
    }
    render(){
        return html`<body>
                    <div class="container">
                    <diV class="container2">
                    <form action="" id="formu">
                        <h1>PUMAS DC</h1>
                        <input type="text" placeholder="Usuario" required><br>
                        <input type="password" placeholder="Contraseña"><br>
                        <button type="button">INGRESAR</button><br>
                        <a href="">olvido su cotraseña?</a>
                    </form>
                    </diV>
                    </div>
                    </body>`
    }
}

customElements.define('my-form', MyForm);