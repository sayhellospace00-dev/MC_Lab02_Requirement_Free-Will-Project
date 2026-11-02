import { View, Text, StyleSheet } from "react-native";

import type { Menu } from "../../auth/types";

type MenuItemProps = {
  menu: Menu;
  showPrice?: boolean;
};

export function MenuItem({
  menu,
  showPrice = true,
}: MenuItemProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {menu.title}
      </Text>

      {showPrice && (
        <Text style={styles.price}>
          Price: {menu.price}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    backgroundColor: "#F8FAFC",
    gap: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  price: {
    fontSize: 14,
    color: "#64748B",
  },
});
