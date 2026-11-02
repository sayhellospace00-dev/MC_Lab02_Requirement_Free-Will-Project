import { router } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { useAuth } from "../auth/AuthContext";
import { AppButton } from "../../components/AppButton";
import { MenuItem } from "./components/MenuItem";

export function ProfileScreen() {
  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
    router.replace("/login");
  }

  // Không cho hiển thị Profile khi chưa đăng nhập
  if (!user) {
    return (
      <View style={styles.container}>
        <Text>No active session.</Text>

        <Pressable
          style={styles.button}
          onPress={() => router.replace("/login")}
        >
          <Text style={styles.buttonText}>Go to Login</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Store Profile</Text>

      <Image
        source={require("../../../assets/Bar_Lupin.png")}
        style={{ width: 100, height: 100, borderRadius: 50 }}
        resizeMode="cover"
      />
    <Text style={{ fontSize: 24, fontWeight: "700" }}>
        {user.nameStore}
      </Text> 

      <Text style={styles.info}>Email: {user.email}</Text>
      <Text style={styles.info}>Address: {user.address}</Text>
      <Text style={styles.info}>Phone Number: {user.phoneNumber}</Text>
      <Text style={styles.info}>Business Hours: {user.businessHours}</Text>

      <Text style={styles.sectionTitle}>Menu</Text>

      {user.menus.map((menu) => (
        <MenuItem
          key={menu.id}
          menu={menu}
        />
      ))}

    <AppButton
      label="Logout"
      onPress={handleLogout}
      variant="danger"
    />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    gap: 16,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
  },
  info: {
    fontSize: 16,
    color: "#555",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 16,
  },
  menuCard: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    backgroundColor: "#F8FAFC",
    gap: 6,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 14,
    borderRadius: 10,
    marginTop: 16,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "600",
  },
});
