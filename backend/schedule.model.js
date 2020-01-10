const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Schedule = new Schema({
  Monday: {
    shift1: {
      multitude1: {
        time: String,
        multitude: [String]
      },
      multitude2: {
        time: String,
        multitude: [String]
      }
    },
    shift2: {
      multitude1: {
        time: String,
        multitude: [String]
      },
      multitude2: {
        time: String,
        multitude: [String]
      }
    },
    shift3: {
      multitude1: {
        time: String,
        multitude: [String]
      },
      multitude2: {
        time: String,
        multitude: [String]
      }
    }
  },
  Tuesday: {
    shift1: {
      multitude1: {
        time: String,
        multitude: [String]
      },
      multitude2: {
        time: String,
        multitude: [String]
      }
    },
    shift2: {
      multitude1: {
        time: String,
        multitude: [String]
      },
      multitude2: {
        time: String,
        multitude: [String]
      }
    },
    shift3: {
      multitude1: {
        time: String,
        multitude: [String]
      },
      multitude2: {
        time: String,
        multitude: [String]
      }
    }
  },
  Wednesday: {
    shift1: {
      multitude1: {
        time: String,
        multitude: [String]
      },
      multitude2: {
        time: String,
        multitude: [String]
      }
    },
    shift2: {
      multitude1: {
        time: String,
        multitude: [String]
      },
      multitude2: {
        time: String,
        multitude: [String]
      }
    },
    shift3: {
      multitude1: {
        time: String,
        multitude: [String]
      },
      multitude2: {
        time: String,
        multitude: [String]
      }
    }
  },
  Thursday: {
    shift1: {
      multitude1: {
        time: String,
        multitude: [String]
      },
      multitude2: {
        time: String,
        multitude: [String]
      }
    },
    shift2: {
      multitude1: {
        time: String,
        multitude: [String]
      },
      multitude2: {
        time: String,
        multitude: [String]
      }
    },
    shift3: {
      multitude1: {
        time: String,
        multitude: [String]
      },
      multitude2: {
        time: String,
        multitude: [String]
      }
    }
  },
  Friday: {
    shift1: {
      multitude1: {
        time: String,
        multitude: [String]
      },
      multitude2: {
        time: String,
        multitude: [String]
      }
    },
    shift2: {
      multitude1: {
        time: String,
        multitude: [String]
      },
      multitude2: {
        time: String,
        multitude: [String]
      }
    },
    shift3: {
      multitude1: {
        time: String,
        multitude: [String]
      },
      multitude2: {
        time: String,
        multitude: [String]
      }
    }
  },
  Saturday: {
    shift1: {
      multitude1: {
        time: String,
        multitude: [String]
      },
      multitude2: {
        time: String,
        multitude: [String]
      }
    },
    shift2: {
      multitude1: {
        time: String,
        multitude: [String]
      },
      multitude2: {
        time: String,
        multitude: [String]
      }
    },
    shift3: {
      multitude1: {
        time: String,
        multitude: [String]
      },
      multitude2: {
        time: String,
        multitude: [String]
      }
    }
  },
  Sunday: {
    shift1: {
      multitude1: {
        time: String,
        multitude: [String]
      },
      multitude2: {
        time: String,
        multitude: [String]
      }
    },
    shift2: {
      multitude1: {
        time: String,
        multitude: [String]
      },
      multitude2: {
        time: String,
        multitude: [String]
      }
    },
    shift3: {
      multitude1: {
        time: String,
        multitude: [String]
      },
      multitude2: {
        time: String,
        multitude: [String]
      }
    }
  }
});

module.exports = mongoose.model("Schedule", Schedule);
