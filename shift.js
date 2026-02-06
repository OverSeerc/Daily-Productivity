const Shift = {
  set(value) {
    State.today.shift = value;
    Storage.save("shift", value);
  },

  get() {
    return State.today.shift;
  }
};
