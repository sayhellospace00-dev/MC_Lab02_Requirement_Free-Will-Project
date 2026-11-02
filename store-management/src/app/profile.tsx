import { Image, ScrollView, Text, View } from "react-native";

const PROFILE = {
  nameStore: "Lupin Bar",
  storeId: "LB001",
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

export default function Profile() {
  return (
    <ScrollView contentContainerStyle={{ padding: 24, gap: 16 }}>
      <Image
        source={require("../../assets/Bar_Lupin.png")}
        style={{ width: 100, height: 100, borderRadius: 50 }}
        resizeMode="cover"
      />

      <Text style={{ fontSize: 24, fontWeight: "700" }}>
        {PROFILE.nameStore}
      </Text>
      <Text>Email: {PROFILE.email}</Text>
      <Text>Address: {PROFILE.address}</Text>
      <Text>Phone Number: {PROFILE.phoneNumber}</Text>
      <Text>Bussiness Hours: {PROFILE.businessHours}</Text>

      <Text style={{ fontSize: 20, fontWeight: "700" }}>
        Menu
      </Text>

      {PROFILE.menus.map((menu) => (
        <View key={menu.id} style={{ padding: 12, borderWidth: 1 }}>
          <Text>{menu.title}</Text>
          <Text>Price: {menu.price}</Text>
        </View>
      ))}
    </ScrollView>
  );
}