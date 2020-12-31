let app;
let displacementSprite;
let displacementFilter;
const init = () => {
  app = new PIXI.Application({ width: innerWidth, height: innerHeight });

  document.body.appendChild(app.view);

  const image = new PIXI.Sprite.from("./sea.jpg");
  image.width = innerWidth;
  image.height = innerHeight;
  app.stage.addChild(image);

  displacementSprite = new PIXI.Sprite.from("./displacement/displacement2.png");
  displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
  displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

  app.stage.addChild(displacementSprite);
  app.stage.filters = [displacementFilter];

  app.renderer.view.style.transform = "scale(1.02)";

  displacementSprite.scale.x = 4;
  displacementSprite.scale.y = 4;
  animate();
};

const animate = () => {
  displacementSprite.x += 8;
  displacementSprite.y += 3;
  requestAnimationFrame(animate);
};

init();
