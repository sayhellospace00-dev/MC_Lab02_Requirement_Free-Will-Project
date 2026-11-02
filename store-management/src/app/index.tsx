import { Pressable, Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 24, gap: 16}}>
      <Text style={{ fontSize: 28, fontWeight: "700" }}>Store Management</Text>
      
      <TextInput
        placeholder="Username"
        style={{
          borderWidth: 1,
          padding: 12,
          borderRadius: 10,
        }}
      />
      
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={{
          borderWidth: 1,
          padding: 12,
          borderRadius: 10,
        }}
      />

      <Pressable
        style={{
          backgroundColor: "#2563EB",
          padding: 14,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Login
        </Text>
      </Pressable>
    </View>
  );
}