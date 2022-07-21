import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TextInput,
  Alert,
  Modal,
  Pressable,
  Linking,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useCallback, Children } from "react";
import styles from "./styles/styles";
import filter from "lodash.filter";
import DropShadow from "react-native-drop-shadow";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);

  const [query, setQuery] = useState("");

  const [opportunities, setOpportunities] = useState([
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      opportunity: "Beach Cleaning",
      info: "Help clean up the beach!",
      vb: "Volunteer block: Atleast 1 hour.",
      uri: "https://beaches.lacounty.gov/wp-content/uploads/2021/09/Redondo-Beach-BCB_5409-1920x1105.jpg",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      opportunity: "Pick Up Trash",
      info: "Help pick up trash in your streets!",
      vb: "Volunteer block: Atleast 1 hour.",
      uri: "https://img.hoodline.com/uploads/story/image/569140/photo_-_volunteers_help_CleanMission_spruce_up_outside_Zoe_Bikini_18th_and_Mission_8-2019.jpeg",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      opportunity: "Business Helping",
      info: "Help out your local businesses!",
      vb: "Volunteer block: Atleast 1 hour.",
      uri: "https://mcdonaldpaper.com/media/wysiwyg/blog/blog_21-10-20-2.jpg",
    },
    {
      id: "4",
      opportunity: "Park Cleaning",
      info: "Help clean up your local parks!",
      vb: "Volunteer block: Atleast 1 hour.",
      uri: "https://media.istockphoto.com/photos/picking-up-a-plastic-bottle-during-park-cleanup-picture-id1161008212?k=20&m=1161008212&s=612x612&w=0&h=ll4BiuqmO003r2LQ66PKurXnA1rD_gbdR1wQ7K-VKOs=",
    },
    {
      id: "5",
      opportunity: "Gardening",
      info: "Help your parks with new plantlife!",
      vb: "Volunteer block: Atleast 1 hour.",
      uri: "https://www.popsci.com/uploads/2022/04/21/garden.jpg?auto=webp&width=1440&height=1080",
    },
    {
      id: "6",
      opportunity: "Elementary School",
      info: "Help out the youth at elementary schools!",
      vb: "Volunteer block: Atleast 1 hour.",
      uri: "https://s3-media0.fl.yelpcdn.com/bphoto/SyOO6VEokLNa9WKLvbV0lw/348s.jpg",
    },
  ]);

  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const filteredOpportunities = filter(opportunities, (user) => {
      return contains(user, formattedQuery);
    });
    setOpportunities(filteredOpportunities);
    setQuery(text);
  };

  const contains = ({ opportunity }, query) => {
    const { name } = opportunity;

    if (name.includes(query)) {
      return true;
    }

    return false;
  };

  const rows = [
    {
      title: "Popular",
      data: opportunities,
    },
    {
      title: "Near You",
      data: opportunities,
    },
    {
      title: "Cooking",
      data: opportunities,
    },
    {
      title: "Cleaning",
      data: opportunities,
    },
  ];

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <FlatList
        data={rows}
        ListHeaderComponent={
          <View
            style={{
              backgroundColor: "#fff",
              padding: 10,
              marginVertical: 10,
              borderRadius: 20,
            }}
          >
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              value={query}
              onChangeText={(queryText) => handleSearch(queryText)}
              placeholder="Search"
              style={{ backgroundColor: "#fff", paddingHorizontal: 20 }}
            />
          </View>
        }
        renderItem={({ item }) => (
          <View style={{ paddingTop: 10 }}>
            <Text style={styles.title}> {item.title}</Text>
            <FlatList
              data={item.data}
              renderItem={({ item }) => (
                <Pressable onPress={() => setModalVisible(true)}>
                  <DropShadow style={styles.shadowProp}>
                    <View style={styles.itemContainer}>
                      <Image
                        style={styles.image}
                        source={{
                          uri: item.uri,
                        }}
                      />
                      <View style={styles.TextContainer}>
                        <Text style={styles.item}>{item.opportunity}</Text>
                        <Text style={styles.add}>{item.info}</Text>
                        <Text style={styles.block}>{item.vb}</Text>
                      </View>
                    </View>
                  </DropShadow>
                </Pressable>
              )}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        )}
        keyExtractor={(item) => item.title}
        horizontal={false}
        showsVerticalScrollIndicator={false}
      />

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.")(!modalVisible);
        }}
      >
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.off}> Back </Text>
        </Pressable>
        <Text style={styles.name}> {opportunities[0].opportunity} </Text>
        <View style={styles.desContainer}>
          <Text style={styles.name2}> Description: </Text>
          <Text style={styles.des}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </Text>
        </View>
        <Text style={styles.name3}> Sign Up! </Text>
        <View style={styles.websiteContainer}>
          <Text style={styles.name4}> Website </Text>
          {/* <OpenURLButton url={supportedURL} /> */}
          <Text
            style={styles.website}
            onPress={() =>
              Linking.openURL("https://saveourshores.org/beachcleanups/")
            }
          >
            https://saveourshores.org/beachcleanups/
          </Text>
          <Text style={styles.comment}> *Preferred Way to Sign Up* </Text>
        </View>
        <View style={styles.locationContainer}>
          <Text style={styles.name5}> Location </Text>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("maps://app?saddr=100+101&daddr=100+102")
            }
          >
            <Text stye={styles.location}> 123 Los Angeles Street,90014 </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.emailContainer}>
          <Text style={styles.name6}> Email </Text>
          <Text
            style={styles.email}
            onPress={() =>
              Linking.openURL(
                "mailto:alejandro@saveourshores.org?subject=SendMail&body=Description"
              )
            }
          >
            alejandro@saveourshores.org
          </Text>
        </View>
        <View style={styles.phoneNumberContainer}>
          <Text style={styles.name7}> Phone </Text>
          <Text
            style={styles.phoneNumber}
            onPress={() => Linking.openURL("tel:$831-462-5660")}
          >
            {" "}
            831-462-5660{" "}
          </Text>
          <Text style={styles.comment2}> Tap to Call </Text>
        </View>
      </Modal>
    </View>
  );
}
