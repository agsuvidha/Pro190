AFRAME.registerComponent("marker-handler", {
  init: async function () {

    var dishes = await this.getDishes();

    this.el.addEventListener("markerFound", () => {
      console.log("marker-found");
      var markerId = this.el.id;
    
      this.handleMarkerFound(dishes,markerId);
    });

    this.el.addEventListener("markerLost", () => {
      console.log("marker-lost");
      this.handleMarkerLost();
    });
  },
  handleMarkerFound: function (dishes,markerId) {
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "flex";
    var ratingButton = document.getElementById("rating-button");
    var orderButton = document.getElementById("order-button");

    ratingButton.addEventListener("click", function () {
      swal({
        icon: "warning",
        title: "Thanks for ur rating",
        text: "rating",
      });
    });
    orderButton.addEventListener("click", function () {
      swal({
        icon: "warning",
        title: "Thanks for ur order",
        text: "order",
      });
    });

    var dish = dishes.filter(dish => dish.id === markerId)[0];

    var model = document.querySelector(`#model-${dish.id}`);
    model.setAttribute("position", dish.model_geometry.position);
    model.setAttribute("rotation", dish.model_geometry.rotation);
    model.setAttribute("scale", dish.model_geometry.scale);
  },

  handleMarkerLost: function () {
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
    console.log("marker-lost");
  },

  getDishes: async function () {
    return await firebase
      .firestore()
      .collection("dishes")
      .get()
      .then(snap => {
        return snap.docs.map(doc => doc.data());
      });
  },

});
