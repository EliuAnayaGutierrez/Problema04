class Celular{
    

    constructor(color,peso,rdp,rdc,ram){
        this.color=color;
        this.peso=peso;
        this.resolucionDePantalla=rdp;
        this.resolucionDeCamara=rdc;
        this.memoriaRam=ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if(this.encendido==false){
            alert("Celular encendido");
            this.encendido=true;
        }else if(this.encendido==true){
            alert("Celular apagado");
            this.encendido=false;
        }
    }
    reiniciar(){
        if(this.encendido==true){
            alert("Reiniciando");
        }else{
            alert("El celular esta apagado");
        }
    }
    tomarFoto(){
        alert(`Foto tomada en una resolucion de camara: ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`Grabando video en una resolucion de camara: ${this.resolucionDeCamara}`);
    }
    mostrarInfo(){
        return`
        Color:<b>${this.color}</b><br>
        Peso:<b>${this.peso}</b><br>
        Tamaño:<b>${this.resolucionDePantalla}</b><br>
        Resolucion de camara :<b>${this.resolucionDeCamara}</b><br>
        Resolucion de video:<b>${this.resolucionDeCamara}</b><br>
        Memoria Ram:<b>${this.memoriaRam}</b><br>
        `
        

    }
}
class CelularAltaGama extends Celular{
    constructor(color,peso,rdp,rdc,ram,rdce){
        super(color,peso,rdp,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("Estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("vamos a iniciar reconocimiento facial");
    }
    infoAltaGama(){
        return this.mostrarInfo() + `Resolucion de camara extra:<b> ${this.resolucionDeCamaraExtra}</b><br>`;

    }
}
celular1 = new Celular("rojo","150g","5'","hd","1GB");
celular2 = new Celular("azul","155g","6'","full hd","2GB");
celular3 = new Celular("negro","160g","6.2'","fullHD","3GB");
celular4 = new CelularAltaGama("rojo","130g","6'","4k","4GB","fullHD");
celular5 = new CelularAltaGama("rojo","130g","6'","4k","4GB","fullHD");


document.write(`${celular1.mostrarInfo()}<br>
${celular2.mostrarInfo()}<br>
${celular3.mostrarInfo()}<br>
${celular4.infoAltaGama()}<br>
${celular5.infoAltaGama()}<br>`);
// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();