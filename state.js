const State = {
  today: {
    shift: Storage.load("shift", "morning"),
    transport: Storage.load("transport", "bike"),
    energy: Storage.load("energy", 3),
    otRunning: Storage.load("otRunning", false),
    otStartTime: Storage.load("otStartTime", null),
    nightTired: Storage.load("nightTired", "ok"),
    homeSafe: Storage.load("homeSafe", false)
    
  }
};
State.isSunday = new Date().getDay() === 0;
