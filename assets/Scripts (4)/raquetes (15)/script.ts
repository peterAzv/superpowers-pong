class Raquete1Comportamento extends Sup.Behavior {
  //Conecta a raquete com o corpo fisico 2D
  raquete = this.actor.arcadeBody2D;
  //Velocidade da raquete
  velocidade : number = 0.1;
  
  update() {
    //Pega a posição Y da raquete
    let y : number = this.actor.getY();
    //Verifica se a tecla foi pressionada e se a posição y é menor q a posição maxima da tela
    if(Sup.Input.isKeyDown("W") && y < 2.35){
      this.raquete.setVelocityY(this.velocidade);
    }else if(Sup.Input.isKeyDown("S") && y > -2.35 ){
      this.raquete.setVelocityY(-this.velocidade)
    } else {
      this.raquete.setVelocityY(0);
    }
  }
}

class Raquete2Comportamento extends Sup.Behavior {
  //Conecta a raquete com o corpo fisico 2D
  raquete = this.actor.arcadeBody2D;
  //Velocidade da raquete
  velocidade : number = 0.1;
  
  update() {
    //Pega a posição Y da raquete
    let y : number = this.actor.getY();
    //Verifica se a tecla foi pressionada e se a posição y é menor q a posição maxima da tela
    if(Sup.Input.isKeyDown("UP") && y < 2.35){
      this.raquete.setVelocityY(this.velocidade);
    }else if(Sup.Input.isKeyDown("DOWN") && y > -2.35 ){
      this.raquete.setVelocityY(-this.velocidade)
    } else {
      this.raquete.setVelocityY(0);
    }
  
  }
}

Sup.registerBehavior(Raquete1Comportamento);
Sup.registerBehavior(Raquete2Comportamento);