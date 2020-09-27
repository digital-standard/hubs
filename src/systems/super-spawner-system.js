import { addMedia } from "../utils/media-utils";
import { ObjectContentOrigins } from "../object-types";
import { triggeredFunctions } from "../triggeredFunctions";

// WARNING: This system mutates interaction system state!
export class SuperSpawnerSystem {
  maybeSpawn(state, grabPath) {
    const userinput = AFRAME.scenes[0].systems.userinput;
    const superSpawner = state.hovered && state.hovered.components["super-spawner"];

    const isPermitted =
      window.APP.hubChannel &&
      (superSpawner && superSpawner.data.template === "#interactable-emoji"
        ? window.APP.hubChannel.can("spawn_emoji")
        : window.APP.hubChannel.can("spawn_and_move_media"));

    let isScriptTrigger = false;
    if(superSpawner)
    {
      if(state.hovered.object3D.name.indexOf('script') !== -1)
      {
        isScriptTrigger = true;
      }
    }

    if (
      superSpawner &&
      superSpawner.spawnedMediaScale &&
      !superSpawner.cooldownTimeout &&
      userinput.get(grabPath) &&
      isPermitted &&
      !isScriptTrigger
    ) {
      this.performSpawn(state, grabPath, userinput, superSpawner);
    }
    else if(
      superSpawner &&
      superSpawner.spawnedMediaScale &&
      !superSpawner.cooldownTimeout &&
      userinput.get(grabPath) &&
      isPermitted &&
      isScriptTrigger
    ){
      // trigger function
      if(state.hovered.object3D.name.indexOf('hacaro_black') !== -1)
      {
        triggeredFunctions.hacaroBlackClick();
      }
      else if(state.hovered.object3D.name.indexOf('hacaro_blue') !== -1)
      {
        triggeredFunctions.hacaroBlueClick();
      }
      else if(state.hovered.object3D.name.indexOf('hacaro_pink') !== -1)
      {
        triggeredFunctions.hacaroPinkClick();
      }
      else if(state.hovered.object3D.name.indexOf('guide') !== -1)
      {
        triggeredFunctions.guideClick();
      }
      else if(state.hovered.object3D.name.indexOf('sick') !== -1)
      {
        triggeredFunctions.sickArtClick();
      }
      else if(state.hovered.object3D.name.indexOf('boucher') !== -1)
      {
        triggeredFunctions.boucherArtClick();
      }
      else if(state.hovered.object3D.name.indexOf('bunel') !== -1)
      {
        triggeredFunctions.bunelArtClick();
      }
      else if(state.hovered.object3D.name.indexOf('cezanne') !== -1)
      {
        triggeredFunctions.cezanneArtClick();
      }
      else if(state.hovered.object3D.name.indexOf('chalon') !== -1)
      {
        triggeredFunctions.chalonArtClick();
      }
      else if(state.hovered.object3D.name.indexOf('gerard') !== -1)
      {
        triggeredFunctions.gerardArtClick();
      }
      else if(state.hovered.object3D.name.indexOf('modigliani') !== -1)
      {
        triggeredFunctions.modiglianiArtClick();
      }
      else if(state.hovered.object3D.name.indexOf('monet') !== -1)
      {
        triggeredFunctions.monetArtClick();
      }
      else if(state.hovered.object3D.name.indexOf('redoute') !== -1)
      {
        triggeredFunctions.redouteArtClick();
      }
      else if(state.hovered.object3D.name.indexOf('tokutei_1') !== -1)
      {
        triggeredFunctions.tokutei1Click();
      }
    }
  }

  performSpawn(state, grabPath, userinput, superSpawner) {
    const data = superSpawner.data;

    const spawnedEntity = addMedia(
      data.src,
      data.template,
      ObjectContentOrigins.SPAWNER,
      null,
      data.resolve,
      true,
      false,
      data.mediaOptions
    ).entity;

    // TODO HACK objects become held mid frame here, so if something runs between here and
    // when the networked component is initialized isMine will throw since data doesnt exist
    // should probably fix isMine in networked aframe instead of merging this
    if (spawnedEntity.components.networked && !spawnedEntity.components.networked.data) {
      spawnedEntity.components.networked.data = {};
    }

    superSpawner.el.object3D.getWorldPosition(spawnedEntity.object3D.position);
    superSpawner.el.object3D.getWorldQuaternion(spawnedEntity.object3D.quaternion);
    spawnedEntity.object3D.matrixNeedsUpdate = true;

    superSpawner.el.emit("spawned-entity-created", { target: spawnedEntity });

    state.held = spawnedEntity;

    superSpawner.activateCooldown();
    state.spawning = true;

    spawnedEntity.addEventListener(
      "media-loaded",
      () => {
        spawnedEntity.object3D.scale.copy(superSpawner.spawnedMediaScale);
        spawnedEntity.object3D.matrixNeedsUpdate = true;
        state.spawning = false;
        superSpawner.el.emit("spawned-entity-loaded", { target: spawnedEntity });
      },
      { once: true }
    );
  }

  tick() {
    const interaction = AFRAME.scenes[0].systems.interaction;
    if (!interaction.ready) return; //DOMContentReady workaround
    this.maybeSpawn(interaction.state.leftHand, interaction.options.leftHand.grabPath);
    this.maybeSpawn(interaction.state.rightHand, interaction.options.rightHand.grabPath);
    this.maybeSpawn(interaction.state.rightRemote, interaction.options.rightRemote.grabPath);
    this.maybeSpawn(interaction.state.leftRemote, interaction.options.leftRemote.grabPath);
  }
}
