const Ride = {
  getAdvice() {
    const energy = State.today.energy;
    const transport = State.today.transport;

    if (transport === "bike" && energy <= 2) {
      return "⚠️ Ride slow, low energy detected";
    }

    if (transport === "car" && energy <= 2) {
      return "⚠️ Stay alert, avoid microsleep";
    }

    return "✅ You’re good to go. Ride safe.";
  }
};
