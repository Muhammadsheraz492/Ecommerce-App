import React from "react";
import {
  Alert,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
  View,
  Image,
  ScrollView,
} from "react-native";
import { Title } from "react-native-paper";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { CustomPagination } from "../Components/CustomPagination";
const { width, height } = Dimensions.get("window");

export default SwiperScreen = () => {
  const scrollRef = React.useRef(null);

  return (
    <SwiperFlatList
      ref={scrollRef}
      showPagination
      PaginationComponent={CustomPagination}
    >
      <View style={[styles.child, { alignItems: "center" }]}>
        <View style={{ height: "10%" }} />
        <Image source={require("../Assets/IMages/FirstSwiper.png")} />
        <View style={{ height: "10%" }} />
        <Title>ORIGINAL PRODUCT</Title>
        <View style={{ width: 310, height: 66, alignSelf: "center" }}>
          <Text style={{ textAlign: "center", fontSize: 14 }}>
            Original with 1000 product from a lot of different brand accros the
            world. buy so easy with just simple step then your item will send
            it.
          </Text>
        </View>
      </View>
      <View style={[styles.child, { alignItems: "center" }]}>
        <View style={{ height: "22%" }} />
        <Image source={require("../Assets/IMages/Second.png")} />
        <View style={{ height: "11%" }} />
        <Title>ORIGINAL PRODUCT</Title>
        <View style={{ width: 310, height: 66, alignSelf: "center" }}>
          <Text style={{ textAlign: "center", fontSize: 14 }}>
            Original with 1000 product from a lot of different brand accros the
            world. buy so easy with just simple step then your item will send
            it.
          </Text>
        </View>
      </View>
      <View style={[styles.child, { alignItems: "center" }]}>
        <View style={{ height: "18%" }} />
        <Image source={require("../Assets/IMages/Third.png")} />
        <View style={{ height: "10%" }} />
        <Title>ORIGINAL PRODUCT</Title>
        <View style={{ width: 310, height: 66, alignSelf: "center" }}>
          <Text style={{ textAlign: "center", fontSize: 14 }}>
            Original with 1000 product from a lot of different brand accros the
            world. buy so easy with just simple step then your item will send
            it.
          </Text>
        </View>
      </View>
    </SwiperFlatList>
  );
};

const styles = StyleSheet.create({
  child: {
    height: "100%",
    width,
    // width: "100%",
    // justifyContent: "center",
  },
  text: {
    fontSize: width * 0.1,
    textAlign: "center",
  },
});
