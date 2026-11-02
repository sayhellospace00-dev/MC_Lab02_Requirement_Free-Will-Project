export type Menu = {
  id: string;
  title: string;
  price: string;
};

export type StoreProfile = {
  storeId: string;
  nameStore: string;
  email: string;
  address: string;
  phoneNumber: string;
  businessHours: string;
  menus: Menu[];
};