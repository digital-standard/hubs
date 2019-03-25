/**
 * HUD panel for muting, freezing, and space bubble controls.
 * @namespace ui
 * @component in-world-hud
 */
AFRAME.registerComponent("in-world-hud", {
  schema: {
    haptic: { type: "selector" },
    raycaster: { type: "selector" }
  },
  init() {
    this.mic = this.el.querySelector(".mic");
    this.spawn = this.el.querySelector(".spawn");
    this.pen = this.el.querySelector(".penhud");
    this.cameraBtn = this.el.querySelector(".camera-btn");
    this.inviteBtn = this.el.querySelector(".invite-btn");
    this.background = this.el.querySelector(".bg");
    const renderOrder = window.APP.RENDER_ORDER;
    this.mic.object3DMap.mesh.renderOrder = renderOrder.HUD_ICONS;
    this.spawn.object3DMap.mesh.renderOrder = renderOrder.HUD_ICONS;
    this.pen.object3DMap.mesh.renderOrder = renderOrder.HUD_ICONS;
    this.cameraBtn.object3DMap.mesh.renderOrder = renderOrder.HUD_ICONS;
    this.background.object3DMap.mesh.renderOrder = renderOrder.HUD_BACKGROUND;

    this.updateButtonStates = () => {
      this.mic.setAttribute("icon-button", "active", this.el.sceneEl.is("muted"));
      this.pen.setAttribute("icon-button", "active", this.el.sceneEl.is("pen"));
      this.cameraBtn.setAttribute("icon-button", "active", this.el.sceneEl.is("camera"));
    };
    this.updateButtonStates();

    this.onStateChange = evt => {
      if (!(evt.detail === "muted" || evt.detail === "frozen" || evt.detail === "pen" || evt.detail === "camera"))
        return;
      this.updateButtonStates();
    };

    this.onMicClick = () => {
      this.el.emit("action_mute");
    };

    this.onSpawnClick = () => {
      this.el.emit("action_spawn");
    };

    this.onPenClick = () => {
      this.el.emit("spawn_pen");
    };

    this.onCameraClick = () => {
      this.el.emit("action_toggle_camera");
    };

    this.onInviteClick = () => {
      this.el.emit("action_invite");
    };
  },

  play() {
    this.el.sceneEl.addEventListener("stateadded", this.onStateChange);
    this.el.sceneEl.addEventListener("stateremoved", this.onStateChange);

    this.mic.addEventListener("mousedown", this.onMicClick);
    this.spawn.addEventListener("mousedown", this.onSpawnClick);
    this.pen.addEventListener("mousedown", this.onPenClick);
    this.cameraBtn.addEventListener("mousedown", this.onCameraClick);
    this.inviteBtn.addEventListener("grab-start", this.onInviteClick);
  },

  pause() {
    this.el.sceneEl.removeEventListener("stateadded", this.onStateChange);
    this.el.sceneEl.removeEventListener("stateremoved", this.onStateChange);

    this.mic.removeEventListener("mousedown", this.onMicClick);
    this.spawn.removeEventListener("mousedown", this.onSpawnClick);
    this.pen.removeEventListener("mousedown", this.onPenClick);
    this.cameraBtn.removeEventListener("mousedown", this.onCameraClick);
    this.inviteBtn.removeEventListener("grab-end", this.onInviteClick);
  }
});
