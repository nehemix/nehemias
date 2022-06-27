import '../styles/HogarPage.css'
function HogarPage() {
    return (
        <div>
            <div class="planes-title">
                <h2>Elije el mejor plan que se <br /> adapte a tus necesidades</h2>


            </div>
            <div className="planes">
                <div class="antivirus-holder">
                    <img src="images/icons8-computer-virus-96.png" class="antivirus" />
                    <h3>katnet <br /> antivirus</h3>
                    <h4>Protección en tiempo<br />real para tu PC</h4>
                    <h5>$1499<br />/año</h5>
                    <button>Contratar</button>
                </div>

                <div class="antivirus-holder">
                    <img src="images/icons8-webpage-100.png" class="antivirus" />
                    <h3>katnet <br /> Internet Security</h3>
                    <h4>Antivirus y protección <br />
                        contra páginas engañosas</h4>
                    <h5>$2519<br />/año</h5>
                    <button>Contratar</button>
                </div>
                <div class="antivirus-holder">
                    <img src="images/verified.png" class="antivirus" />
                    <h3>katnet <br /> Total Security</h3>
                    <h4>Protección integral <br /> para tu día a día</h4>
                    <h5>$3259<br />/año</h5>
                    <button>Contratar</button>
                </div>

            </div>
        </div>
    )
}

export default HogarPage