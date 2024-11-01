<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 9ed702e (update)
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Image, ScrollView, Modal, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';



const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState('BMW M');
  const [subTabs, setSubTabs] = useState(['ALL BMW M']); // Mặc định BMW có 3,4,5
  const [showSubOptions, setShowSubOptions] = useState(false);

  const toggleSwitch = () => setIsDarkTheme(previousState => !previousState);


  const handleOptionPress = () => {
    setModalVisible(true);
  };

  const handleMainTabPress = (tab) => {
  setSelectedTab(tab);
  switch (tab) {
    case 'BMW':
      setSubTabs(['3', '4', '5', '7', '8', 'X', 'Z']);
      break;
    case 'BMW M':
      setSubTabs(['ALL BMW M']);
      break;
    case 'BMW i':
      setSubTabs(['ALL BMW i']);
      break;
    default:
      setSubTabs([]);
      break;
  }
};

  return (
    <View style={[styles.container, isDarkTheme ? styles.darkBackground : styles.lightBackground]}>
      <View style={styles.header}>
        <Text style={isDarkTheme ? styles.darkHeaderText : styles.lightHeaderText}>BMW</Text>
        
        <View style={styles.verticalSeparator} />
        
        <View style={styles.optionsContainer}>
          <TouchableOpacity onPress={() => alert('Call')}>
            <Ionicons 
              style={isDarkTheme ? styles.darkText2 : styles.lightText2}
              name="call" size={24} color="black" 
            />
            <Text style={isDarkTheme ? styles.darkText2 : styles.lightText2}>
                Call
            </Text>
          </TouchableOpacity>
          
          <View style={styles.verticalSeparator} />

          <TouchableOpacity onPress={handleOptionPress}>
            <Ionicons 
              style={isDarkTheme ? styles.darkText : styles.lightText}
              name="options" size={24} color="black" 
            />
            <Text style={isDarkTheme ? styles.darkText2 : styles.lightText2}>
                Menu
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.separator} />

      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require('./pro1.png')} 
          style={styles.image}
        />
        <Text style={isDarkTheme ? styles.darkText : styles.lightText}>
          KHÁM PHÁ TẤT CẢ CÁC MẪU XE BMW
        </Text>
        <Text style={isDarkTheme ? styles.darkText1 : styles.lightText1}>
          CHỌN DÒNG XE
        </Text>
        <View style={styles.tabContainer}>
          <TouchableOpacity
          style={[styles.tab, selectedTab === 'BMW' && styles.activeTab, 
          isDarkTheme ? styles.activeTabd : styles.activeTabl]}
          onPress={() => handleMainTabPress('BMW')}
        >
          <Text style={[styles.tabText, selectedTab === 'BMW' && styles.activeTabText, 
          isDarkTheme ? styles.darkTabText : styles.lightTabText]}>
            BMW
          </Text>       
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, selectedTab === 'BMW M' && styles.activeTab, 
          isDarkTheme ? styles.activeTabd : styles.activeTabl]}
          onPress={() => handleMainTabPress('BMW M')}
        >
          <Text style={[styles.tabText, selectedTab === 'BMW M' && styles.activeTabText, 
          isDarkTheme ? styles.darkTabText : styles.lightTabText]}>
            BMW M
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, selectedTab === 'BMW i' && styles.activeTab, 
          isDarkTheme ? styles.activeTabd : styles.activeTabl]}
          onPress={() => handleMainTabPress('BMW i')}
        >
          <Text style={[styles.tabText, selectedTab === 'BMW i' && styles.activeTabText, 
          isDarkTheme ? styles.darkTabText : styles.lightTabText]}>
    BMW i
  </Text>
</TouchableOpacity>
      </View>
{      // <View style={styles.tabContainercon}>
      // <TouchableOpacity
      //     style={[styles.tabcon, selectedTab === '3' && styles.activeTab, 
      //     isDarkTheme ? styles.activeTabd : styles.activeTabl]}
      //     onPress={() => setSelectedTab('3')}
      //   >
      //     <Text style={[styles.tabText, selectedTab === '3' && styles.activeTabText, 
      //     isDarkTheme ? styles.darkTabText : styles.lightTabText]}>
      //       3
      //     </Text>
      // </TouchableOpacity>
      // <TouchableOpacity
      //     style={[styles.tabcon, selectedTab === '4' && styles.activeTab, 
      //     isDarkTheme ? styles.activeTabd : styles.activeTabl]}
      //     onPress={() => setSelectedTab('4')}
      //   >
      //     <Text style={[styles.tabText, selectedTab === '4' && styles.activeTabText, 
      //     isDarkTheme ? styles.darkTabText : styles.lightTabText]}>
      //       4
      //     </Text>
      // </TouchableOpacity>
      // <TouchableOpacity
      //     style={[styles.tabcon, selectedTab === '5' && styles.activeTab, 
      //     isDarkTheme ? styles.activeTabd : styles.activeTabl]}
      //     onPress={() => setSelectedTab('5')}
      //   >
      //     <Text style={[styles.tabText, selectedTab === '5' && styles.activeTabText, 
      //     isDarkTheme ? styles.darkTabText : styles.lightTabText]}>
      //       5
      //     </Text>
      // </TouchableOpacity>
      // <TouchableOpacity
      //     style={[styles.tabcon, selectedTab === '7' && styles.activeTab, 
      //     isDarkTheme ? styles.activeTabd : styles.activeTabl]}
      //     onPress={() => setSelectedTab('7')}
      //   >
      //     <Text style={[styles.tabText, selectedTab === '7' && styles.activeTabText, 
      //     isDarkTheme ? styles.darkTabText : styles.lightTabText]}>
      //       7
      //     </Text>
      // </TouchableOpacity>
      // <TouchableOpacity
      //     style={[styles.tabcon, selectedTab === '8' && styles.activeTab, 
      //     isDarkTheme ? styles.activeTabd : styles.activeTabl]}
      //     onPress={() => setSelectedTab('8')}
      //   >
      //     <Text style={[styles.tabText, selectedTab === '8' && styles.activeTabText, 
      //     isDarkTheme ? styles.darkTabText : styles.lightTabText]}>
      //       8
      //     </Text>
      // </TouchableOpacity>
      //       <TouchableOpacity
      //     style={[styles.tabcon, selectedTab === 'X' && styles.activeTab, 
      //     isDarkTheme ? styles.activeTabd : styles.activeTabl]}
      //     onPress={() => setSelectedTab('X')}
      //   >
      //     <Text style={[styles.tabText, selectedTab === 'X' && styles.activeTabText, 
      //     isDarkTheme ? styles.darkTabText : styles.lightTabText]}>
      //       X
      //     </Text>
      // </TouchableOpacity>
      //       <TouchableOpacity
      //     style={[styles.tabcon, selectedTab === 'Z' && styles.activeTab, 
      //     isDarkTheme ? styles.activeTabd : styles.activeTabl]}
      //     onPress={() => setSelectedTab('Z')}
      //   >
      //     <Text style={[styles.tabText, selectedTab === 'Z' && styles.activeTabText, 
      //     isDarkTheme ? styles.darkTabText : styles.lightTabText]}>
      //       Z
      //     </Text>
      // </TouchableOpacity>
      // </View>
}
      <View style={styles.tabContainercon}>
        {subTabs.map((subTab) => (
          <TouchableOpacity
            key={subTab}
            style={[styles.tabcon, selectedTab === subTab && styles.activeTab, 
            isDarkTheme ? styles.activeTabd : styles.activeTabl]}
            onPress={() => setSelectedTab(subTab)}
          >
            <Text style={[styles.tabText, selectedTab === subTab && styles.activeTabText, 
            isDarkTheme ? styles.darkTabText : styles.lightTabText]}>
              {subTab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={[styles.container, isDarkTheme ? styles.darkBackground1 : styles.lightBackground1]}>
      <Text style={isDarkTheme ? styles.darkText : styles.lightText}>
         TIỆN ÍCH BMW
        </Text>
        <Text style={isDarkTheme ? styles.darkText1 : styles.lightText1}>
         CHỌN DỊCH VỤ BMW
        </Text>

        <TouchableOpacity >
        <Image
          source={require('./1.png')} 
          style={styles.image1}
        />
        <Text style={isDarkTheme ? styles.darkText1 : styles.lightText1}>
         Đặt Hẹn Dịch Vụ BMW
        </Text>
        </TouchableOpacity>

        <TouchableOpacity >
        <Image
          source={require('./2.png')} 
          style={styles.image1}
        />
        <Text style={isDarkTheme ? styles.darkText1 : styles.lightText1}>
         Đặt Lịch Lái Thử BMW
        </Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <Image
          source={require('./3.png')} 
          style={styles.image1}
        />
        <Text style={isDarkTheme ? styles.darkText1 : styles.lightText1}>
         Đăng Ký Nhận Ưu Đãi 
        </Text>
        </TouchableOpacity>
      </View>
      
      <View style={isDarkTheme ? styles.darkText1 : styles.lightText1}>
      <Image
          source={require('./5.png')} 
          style={styles.image2}
        />
        <Text style={isDarkTheme ? styles.darkText3 : styles.lightText3}>
          DICH VU DIGITAL VA UNG DUNG
        </Text>
        <Text style={isDarkTheme ? styles.darkText3 : styles.lightText3}>
        BMW CONNECTED DRIVE
        </Text>
      </View>



      </ScrollView>

      {/* Modal cho các chức năng */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, { backgroundColor: 'white' }]}>
            <Text style={styles.modalTitle}>Chức năng</Text>
            <TouchableOpacity onPress={() => alert('Trang chủ')}>
              <Text style={styles.modalOption}>Trang chủ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Mẫu xe')}>
              <Text style={styles.modalOption}>Mẫu xe</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Đặt hẹn lái thử')}>
              <Text style={styles.modalOption}>Đặt hẹn lái thử</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Hệ thống phân phối')}>
              <Text style={styles.modalOption}>Hệ thống phân phối</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Tìm hiểu')}>
              <Text style={styles.modalOption}>Tìm hiểu</Text>
            </TouchableOpacity>
            <View style={styles.switchContainer}>
              <Text style={styles.modalOption}>Theme: </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isDarkTheme ? "#f5dd4b" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isDarkTheme}
              />
              {isDarkTheme ? (
                <Ionicons name="moon" size={24} color="black" style={styles.icon} />
              ) : (
                <Ionicons name="sunny" size={24} color="black" style={styles.icon} />
              )}
            </View>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>Đóng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verticalSeparator: {
    width: 1,
    height: 40,
    backgroundColor: '#cccccc',
    marginHorizontal: 10,
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    marginHorizontal: 15,
  },
  content: {
    alignItems: 'center',
    padding: 15,
  },
  lightBackground: {
    backgroundColor: '#ffffff',
  },
  lightBackground1: {
    backgroundColor: '#ededed',
    height:100,
    width:400,
  },
  darkBackground: {
    backgroundColor: '#333333',
  },
  darkBackground1: {
    backgroundColor: '#525252',
    height:100,
    width:400,
  },
  lightHeaderText: {
    fontSize: 24,
    color: '#000000',
  },
  darkHeaderText: {
    fontSize: 24,
    color: '#ffffff',
  },
  lightText: {
    color: '#000000',
    marginVertical: 2,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  darkText: {
    color: '#ffffff',
    marginVertical: 2,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  lightText1: {
    color: '#000000',
    marginVertical: 2,
    marginTop:20,
    marginBottom:20,
    textAlign: 'center',
    fontSize: 28,
  },
  darkText1: {
    color: '#ffffff',
    marginVertical: 2,
    marginTop:20,
    marginBottom:20,
    textAlign: 'center',
    fontSize: 28,
  },
    darkText3: {
    color: '#ffffff',
    marginVertical: 2,
    marginTop:20,
    marginBottom:20,
    textAlign: 'flex-start',
    fontSize: 28,
  },
    lightText3: {
    flex:1,
    backgroundColor:'pink',
    color: '#000000',
    marginVertical: 1,
    marginTop:20,
    marginLeft:25,
    marginBottom:20,
    textAlign: 'flex-start',
    fontSize: 28,
  },
  lightText2: {
    color: '#000000',
    marginVertical: 2,
    textAlign: 'center',
  },
  darkText2: {
    color: '#ffffff',
    marginVertical: 2,
    textAlign: 'center',
  },
  image: {
    width: 350,
    height: 200,
    marginTop: -10,
    marginBottom: 10,
    justifyContent:'center',
    alignItems:'center',
  },
    image1: {
    width: 200,
    height: 200,
    marginLeft:100,
  },
    image2: {
    width: 380,
    height: 160,
    marginBottom: 20,
    justifyContent:'center',
    alignItems:'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalOption: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
  closeButton: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    marginTop: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  icon: {
    marginLeft: 10,
  },

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: '#ccc',
    borderTopColor: '#ccc',
  },
  tabContainercon: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: '#ccc',
    borderTopColor: '#ccc',
  },
  tabcon: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 35,
  },
  activeTab:{
    borderBottomWidth: 5,
  },
    activeTabd: {
    borderBottomColor: '#fff',
  },
    activeTabl: {
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 16,
    color: '#777',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
  lightTabText: {
    color: '#000',
  },
  darkTabText: {
    color: '#fff',
  },
});

<<<<<<< HEAD
=======
=======
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './screens/loginForm'; // Adjust the path as necessary
import RegisterScreen from './screens/signUp'; // Adjust the path as necessary
import HelloPage from './screens/hellopage';


import { Provider as PaperProvider } from 'react-native-paper';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HelloPage">
        <Stack.Screen 
            name="HelloPage" 
            component={HelloPage} 
            options={{ headerShown: false }} // Hide the header
          />
          <Stack.Screen 
            name="Login" 
            component={login} 
            options={{ headerShown: false }} // Hide the header
          />
          <Stack.Screen 
            name="Register" 
            component={RegisterScreen} 
            options={{ headerShown: false }} // Hide the header
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
};

>>>>>>> d3da4af (update)
>>>>>>> 9ed702e (update)
export default App;
