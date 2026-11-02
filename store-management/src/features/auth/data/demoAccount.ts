import type { StoreProfile } from "../types";

export const DEMO_ACCOUNT: {
  username: string;
  password: string;
  profile: StoreProfile;
} = {
  username: "store01",
  password: "123456",

  profile: {
    storeId: "LB001",
    nameStore: "Lupin Bar",
    email: "xxx@gmail.com",
    address: "xxx, XXX, xxx",
    phoneNumber: "xxxx xxxx xx",
    businessHours: "17:00 – 23:30",
    
    menus: [
      { id: "1", title: "Whiskey", price: "xxx" },
      { id: "2", title: "Charlie Chaplin", price: "xxx"},
      { id: "3", title: "Martini", price: "xxx"},
    ],
  },
};
