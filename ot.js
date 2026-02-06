const OT = {
  start() {
    State.today.otRunning = true;
    State.today.otStartTime = Date.now();
    Storage.save("otRunning", true);
    Storage.save("otStartTime", State.today.otStartTime);
  },

  end() {
    State.today.otRunning = false;
    State.today.otStartTime = null;
    Storage.save("otRunning", false);
    Storage.remove("otStartTime");
  },

  getDuration() {
    if (!State.today.otRunning || !State.today.otStartTime) return null;
    const diff = Date.now() - State.today.otStartTime;
    const mins = Math.floor(diff / 60000);
    const hrs = Math.floor(mins / 60);
    return `${hrs}h ${mins % 60}m`;
  }
};
