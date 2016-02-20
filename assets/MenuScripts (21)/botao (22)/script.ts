//Inicializar variavel do tipo math.Ray
var ray : Sup.Math.Ray;

class BotaoComportamento extends Sup.Behavior {
  //Flag botao está desligado
  isHover : boolean = false;

  awake(){
    ray = new Sup.Math.Ray(this.actor.getPosition(), new Sup.Math.Vector3(0,0,-1));
  }

  update(){
    //Atualizar a posição do mouse na camera
    ray.setFromCamera(Sup.getActor("Camera").camera, Sup.Input.getMousePosition());
    
    /* Condição para checar se o mouse sim ou não 
    está sobre o botao (hover), e se sim checar se
    o mouse foi clicado, se ainda permaece em cima ou
    se deixou o foco, chamando a funcao mouse() 
    */
    
    if(ray.intersectActor(this.actor, false).length > 0){
      if(!this.isHover){
        this.mouse("hover");
        this.isHover = true;
      }
      if(Sup.Input.wasMouseButtonJustPressed(0)){
        this.mouse("click");
      }
    }else if(this.isHover){
      this.isHover = false;
      this.mouse("unhover");
    }
  }

  mouse(action){
    if(action == "click"){
      Sup.loadScene("Game");
      Sup.Audio.playSound("Sound/toc");
    }else if(action == "hover"){
      Sup.getActor("Botao").spriteRenderer.setSprite("MenuSprites/startOn");
    }else if(action == "unhover"){
      Sup.getActor("Botao").spriteRenderer.setSprite("MenuSprites/startOff");
    }
  }
  
}

Sup.registerBehavior(BotaoComportamento);
