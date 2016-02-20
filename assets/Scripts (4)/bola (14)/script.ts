const BOLA_VELOCIDADE : number = 0.05;

class BolaBehavior extends Sup.Behavior {
  //Velocidade da bola
  velocidade : number = BOLA_VELOCIDADE;
  //Conectar o ator ao corpo
  bola = this.actor.arcadeBody2D;
  // Array com pontuação score[0] para o jogador 1 e score[1] para o jogador 2
  score = [0,0];  
  //Direções positivas e negativas
  dirX : number = 1;
  dirY : number = 1;

  update() {
    //Posição da bola x e y
    let x : number = this.actor.getX();
    let y : number = this.actor.getY();
    
    //Mudar a direção da bola se ela tocar em cima ou embaixo
    if(y > 2.85 || y < -2.85){
      this.dirY = this.dirY * -1;
      Sup.Audio.playSound("Sound/tac");
    }
    
    //Chegar se ouve colisão com as raquetes
    
    if(Sup.ArcadePhysics2D.collides(this.bola, Sup.ArcadePhysics2D.getAllBodies())){
       Sup.Audio.playSound("Sound/toc");
      
      /* Se acontecer uma colisão, nós vamos checar se a bola toca 
      o lado esquerdo ou direito (nós mudamos a direção de x) ou cima e baixo
      da raquete (nós mudamos a direção de y), e a bola acelera */
      
      if(this.bola.getTouches().right || this.bola.getTouches().left ){
        this.dirX = this.dirX * -1;
        this.velocidade += 0.01;
      }else {
        this.dirY = this.dirY * -1;
      }
    
    }
    
      if(x > 4 || x < -4){
         Sup.Audio.playSound("Sound/tada");
        if(x>4){
          ++this.score[0];
          Sup.getActor("Jogador1").getChild("Score").textRenderer.setText(this.score[0]);
        }else{
          ++this.score[1];
          Sup.getActor("Jogador2").getChild("Score").textRenderer.setText(this.score[1]);
        }
        this.bola.warpPosition(0,0);
        this.dirX = this.dirX *-1;
        this.velocidade = BOLA_VELOCIDADE;
      }
       //Fazer a bola se mexer
      this.bola.setVelocity(this.velocidade*this.dirX, this.velocidade * this.dirY);
      if(this.score[0] == 10 || this.score[1] == 10){
        Sup.loadScene("Menu");
        if(this.score[0] > this.score[1]){
          Sup.getActor("Ganhador").textRenderer.setText("O ganhador foi o jogador 1")
        }else{
          Sup.getActor("Ganhador").textRenderer.setText("O ganhador foi o jogador 2")
        }
    }
  }
}

Sup.registerBehavior(BolaBehavior);