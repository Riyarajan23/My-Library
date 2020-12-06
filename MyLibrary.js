function IsTouching (mr,fr){
    if (mr.x-fr.x<mr.width/2+fr.width/2&& fr.x-mr.x<mr.width/2+fr.width/2&&
      mr.y-fr.y<mr.height/2+fr.height/2&& fr.y-mr.y<mr.height/2+fr.height/2
      ){
      
      return true;
    }
    else {
      return false;
    } 
  }
  function Bounceoff(movingRect,fixedRect){
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  }