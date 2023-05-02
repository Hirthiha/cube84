import {View, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';
import Styles from '../styles/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import data from '../../staticData';

function Section() {
  return (
    <View>
      <View style={Styles.equip}>
        <Icons name="chevron-left" style={Styles.arrow} />
        <Text style={Styles.equitext}>EQUIPMENT</Text>
        <Text style={Styles.text}>(234)</Text>
      </View>

      <View style={Styles.but}>
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.add}>+ ADD EQUIPMENT</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.filterview}>
        <TextInput
          style={Styles.search}
          placeholder="Search for Equipment #/Name/Type/Category"
        />
        <Icon style={Styles.iconSe} name="ios-search-outline" />
        <TouchableOpacity style={Styles.bg}>
          <Icons name="filter" style={Styles.filter} />
          <Text style={Styles.filtertext}>FILTERS</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={Styles.yellow}>
        <Text style={Styles.yellowtext}>CHECK-IN EQUIPMENT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Styles.blue}>
        <Text style={Styles.yellowtext}>CHECK-OUT EQUIPMENT</Text>
      </TouchableOpacity>

      {/* //flatlist */}
      <View style={Styles.flatview}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View>
              <View style={Styles.flat}>
                <View style={Styles.flatlist}>
                  <View style={Styles.id}>
                    <Text style={Styles.idtext}>IDENTIFIER #12345</Text>
                  </View>

                  <View style={Styles.equip}>
                    <View style={Styles.vehicleV}>
                      <Text style={Styles.vehicleT}>TYPE OF EQUIPMENT</Text>
                      <Text style={Styles.vtext}>{item.type}</Text>
                    </View>

                    <View style={Styles.makeV}>
                      <Text style={Styles.vehicleT}>MAKE</Text>
                      <Text style={Styles.vtext}>{item.make}</Text>
                    </View>

                    <View style={Styles.modelV}>
                      <Text style={Styles.vehicleT}>MODEL</Text>
                      <Text style={Styles.vtext}>{item.model}</Text>
                    </View>
                  </View>
                </View>

                <View style={Styles.subview}>
                  <View style={Styles.flex}>
                    <Text style={Styles.subviewT}>Usage Type </Text>
                    <Text style={Styles.miles}>: {item.usageType}</Text>
                    <TouchableOpacity style={Styles.sync}>
                      <Text style={Styles.synctext}>
                        Synced{' '}
                        <Icon
                          name="ios-checkmark-circle-sharp"
                          style={Styles.tick}
                        />
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={Styles.subviewL}>
                    Last edited By : {item.edit}
                  </Text>

                  <View style={Styles.equip}>
                    <TouchableOpacity style={Styles.buttonPI}>
                      <Text style={Styles.buttontext}>View Details</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.recordbtn}>
                      <Text style={Styles.buttontext}>Record Upkeep</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.checkin}>
                      <Text style={Styles.buttontext}>Checkin</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.checkout}>
                      <Text style={Styles.buttontext}>Checkout</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

export default Section;
