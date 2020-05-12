class Airport {
    constructor() {
        this._hangar = [];
    };

    planes() {
        return this._hangar;
    };

    clearForLanding(plane) {
        if(this.isStormy()) {
          throw new Error('can not land during the stormy weather')
        } else {
          this._hangar.push(plane);
        }
    };

    clearForTakeOff(plane) {
        if(this.isStormy()) {
          throw new Error('can not take off during the storm')
        }
        this._hangar = [];
    };

    isStormy() {
        return false;
    };

}