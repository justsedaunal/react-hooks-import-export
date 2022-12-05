import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import {
  trees as parkTrees,
  wildlife as parkWildlife,
} from "./parks/RockyMountain";

console.log(parkTrees);
// > "Aspen and Pine"

parkWildlife();
// > "Elk, Bighorn Sheep, Moose"

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return (
    <>
      <div>
        <MesaVerde />
      </div>
    </>
  );
}

export default ColoradoStateParks;
