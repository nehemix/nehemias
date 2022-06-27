import '../styles/EmpresaPage.css'
function EmpresaPage() {
    return (
        <div>
            <div class="planes-title">
                <h2>Elije el mejor plan que se <br /> adapte a tus necesidades</h2>


            </div>
            <div className="planes">
                <div class="antivirus-holder">
                    <img src="images/icons8-security-shield-green-96.png" class="antivirus" />
                    <h3>Protección DDOS</h3>
                    <h4>Neutralización de bots y ataques a servidores</h4>
                    
                </div>

                <div class="antivirus-holder">
                    <img src="images/encrypted.png" class="antivirus" />
                    <h3>Detección de <br /> ataques selectivos</h3>
                    <h4>Detección proactiva de amenazas avanzadas</h4>                   
                    <button>Contratar</button>
                </div>
                <div class="antivirus-holder">
                    <img src="images/cyber-security.png" class="antivirus" />
                    <h3>Soporte premium</h3>
                    <h4>Estamos disponibles 24/7 para cualquier emergencia</h4>             
                   
                </div>

            </div>
        </div>
    )
}

export default EmpresaPage