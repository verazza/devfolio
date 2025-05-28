export type ContactWay = {
  discord: {
    id: string;
  }
  x: {
    id: string;
    url: string;
  }
  direct: {
    email: string;
  }
};

export type ContactMe = {
  way: ContactWay;
};
