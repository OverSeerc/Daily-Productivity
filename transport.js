const Transport = {
  set(value) {
    State.today.transport = value;
    Storage.save("transport", value);
  },

  get() {
    return State.today.transport;
  }
};
