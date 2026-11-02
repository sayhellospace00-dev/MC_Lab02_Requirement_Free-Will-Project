import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { checkLogin } from "../features/auth/services/authService";

export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  
  async function handleLogin() {
    setMessage("Checking...");

    const success = await checkLogin(username, password);

    setMessage(
      success ? "Login successful!" : "Invalid username or password."
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 24, gap: 16,}}>
      <Text style={{ fontSize: 28, fontWeight: "700" }}>Store Management</Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{borderWidth: 1, padding: 12, borderRadius: 10,}}
      />
      
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{borderWidth: 1, padding: 12, borderRadius: 10,}}
      />

      <Pressable 
        onPress={handleLogin}
        style={{backgroundColor: "#2563EB", padding: 14, borderRadius: 10,}}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
      </Pressable>
      
      {message ? <Text>{message}</Text> : null}
    </View>
  );
}