import '../styles/ContactoPage.css'
function ContactoPage(){
    return(
        <div class="contact_form">

                    <div class="formulario">
                        <h1>Formulario de contacto</h1>
                        <h3>Escribinos y en breve los pondremos en contacto con vos</h3>


                        <form action="submeter-formulario.php" method="post">


                            <p>
                                <label for="nombre" class="colocar_nombre">Nombre
                                    <span class="obligatorio">*</span>
                                </label>
                                <input type="text" name="introducir_nombre" id="nombre" required="obligatorio"
                                    placeholder="Escribe tu nombre"/>
                            </p>

                            <p>
                                <label for="email" class="colocar_email">Email
                                    <span class="obligatorio">*</span>
                                </label>
                                <input type="email" name="introducir_email" id="email" required="obligatorio"
                                    placeholder="Escribe tu Email"/>
                            </p>





                            <p>
                                <label for="asunto" class="colocar_asunto">Asunto
                                    <span class="obligatorio">*</span>
                                </label>
                                <input type="text" name="introducir_asunto" id="assunto" required="obligatorio"
                                    placeholder="Escribe un asunto"/>
                            </p>

                            <p>
                                <label for="mensaje" class="colocar_mensaje">Mensaje
                                    <span class="obligatorio">*</span>
                                </label>
                                <textarea name="introducir_mensaje" class="texto_mensaje" id="mensaje"
                                    required="obligatorio" placeholder="Deja acá tu comentario..."></textarea>
                            </p>

                            <button type="submit" name="enviar_formulario" id="enviar">
                                <p>Enviar</p>
                            </button>

                            <p class="aviso">
                                <span class="obligatorio"> * </span>los campos son obligatorios.
                            </p>

                        </form>
                    </div>
                </div>
    )
}
export default ContactoPage