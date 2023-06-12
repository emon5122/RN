import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-slate-900">
            <Text className="text-white">Istiak Hassan Emon</Text>
            <StatusBar style="auto" />
        </View>
    );
}
