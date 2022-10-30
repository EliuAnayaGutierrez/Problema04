class App{
    constructor(descargas,puntuacion,peso){
        this.descargas=descargas;
        this.puntuacion=puntuacion;
        this.peso=peso;
        this.iniciada=false;
        this.instalada=false;
    }
    instalar(){
        if(this.instalada==false){
            alert("instalando app");
            this.instalada=true;
        }else{
            alert("app ya esta instalada");
        }
    }
    desinstalar(){
        if(this.instalada==true){
            alert("desinstalando app");
            this.instalada=false;
        }else{
            alert("app ya esta desinstalada");
        }
    }
    abrirApp(){
        if(this.iniciada==false && this.instalada==true){
            alert("Iniciando app");
            this.iniciada=true;
        }else if(this.iniciada==false && this.instalada==false){
            alert("La app NO esta instalada");
        }else{
            alert("La app ya esta iniciada");
        }

    }
    cerrarApp(){
        if(this.iniciada==true && this.instalada==true){
            alert("cerrando app");
            this.iniciada=false;
        }else if(this.iniciada==false && this.instalada==false){
            alert("La app No esta instalada");
        }else{
            alert("La app ya esta cerrada");
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `
    }
}
""
app = new App("16k","5 estrellas","900mb");
// app.instalar();
// app.desinstalar();
// app.abrirApp();
// app.cerrarApp();

document.write(`${app.appInfo()}`);
