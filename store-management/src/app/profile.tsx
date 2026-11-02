import { Redirect } from "expo-router";
import { useAuth } from "../features/auth/AuthContext";
import { ProfileScreen } from "../features/profile/ProfileScreen";

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/login" />;
  }

  return <ProfileScreen />;
}


const PROFILE = {
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
};
