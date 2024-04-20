AFRAME.registerComponent("coins", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        const id = `coin${i}`;
  
        const posX = Math.random() * 120 + -30;
        const posY = Math.random() * 5 + 2;
        const posZ = Math.random() * 60 + -20;

        const position = { x: posX, y: posY, z: posZ };
        this.createCoins(id, position);
      }
    },
    createCoins: function (id, position) {
      const treasureEntity = document.querySelector("#treasureCoins");
      var coinEl = document.createElement("a-entity");
  
      coinEl.setAttribute("id", id);
      coinEl.setAttribute("position", position);
      coinEl.setAttribute("material", "color", "#ff9100");
     coinEl.setAttribute("scale",{x:1,y:1,z:1})
      coinEl.setAttribute("geometry",{ primitive: "circle",radius: 1 });
      fishEl.setAttribute("gltf-model", "assets/treasure/model.gltf");
      coinEl.setAttribute("animation", {
        property: "rotation",
        to: "0 360 0",
        loop: "true",
        dur: 1000,
      });  
       
      
      treasureEntity.appendChild(coinEl);
    }
  });
  