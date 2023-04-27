import {View, Pressable, Text, TextInput, FlatList} from 'react-native';
import Styles from '../Style/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

function Section() {
  //data
  const data = [
    {
      id: 1,
      type: 'Vehicle',
      make: 'Ford',
      model: 'F - 350',
      usageType: 'Miles',
      edit: 'Daniel',
    },
    {
      id: 2,
      type: 'Vehicle',
      make: 'Ford',
      model: 'F - 350',
      usageType: 'Miles',
      edit: 'Daniel',
    },
    {
      id: 3,
      type: 'Vehicle',
      make: 'Ford',
      model: 'F - 350',
      usageType: 'Miles',
      edit: 'Daniel',
    },
    {
      id: 4,
      type: 'Vehicle',
      make: 'Ford',
      model: 'F - 350',
      usageType: 'Miles',
      edit: 'Daniel',
    },
    {
      id: 5,
      type: 'Vehicle',
      make: 'Ford',
      model: 'F - 350',
      usageType: 'Miles',
      edit: 'Daniel',
    },
    {
      id: 6,
      type: 'Vehicle',
      make: 'Ford',
      model: 'F - 350',
      usageType: 'Miles',
      edit: 'Daniel',
    },
  ];
  return (
    <View>
      <View style={Styles.equip}>
        <Icons name="chevron-left" style={Styles.arrow} />
        <Text style={Styles.equitext}>EQUIPMENT</Text>
        <Text style={Styles.text}>(234)</Text>
      </View>

      <View style={Styles.but}>
        <Pressable style={Styles.button}>
          <Text style={Styles.add}>+ ADD EQUIPMENT</Text>
        </Pressable>
      </View>

      <View style={Styles.filterview}>
        <TextInput
          style={Styles.search}
          placeholder="Search for Equipment #/Name/Type/Category"
        />
        <Icon style={Styles.iconSe} name="ios-search-outline" />
        <Pressable style={Styles.bg}>
          <Icons name="filter" style={Styles.filter} />
          <Text style={Styles.filtertext}>FILTERS</Text>
        </Pressable>
      </View>

      <Pressable style={Styles.yellow}>
        <Text style={Styles.yellowtext}>CHECK-IN EQUIPMENT</Text>
      </Pressable>

      <Pressable style={Styles.blue}>
        <Text style={Styles.yellowtext}>CHECK-OUT EQUIPMENT</Text>
      </Pressable>

      {/* //flatlist */}
      <View style={Styles.flatview}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View>
              <View style={Styles.flat}>
                <View style={Styles.flatlist}>
                  <Pressable style={Styles.id}>
                    <Text style={Styles.idtext}>IDENTIFIER #12345</Text>
                  </Pressable>

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
                    <Pressable style={Styles.sync}>
                      <Text style={Styles.synctext}>
                        Synced{' '}
                        <Icon
                          name="ios-checkmark-circle-sharp"
                          style={Styles.tick}
                        />
                      </Text>
                    </Pressable>
                  </View>
                  <Text style={Styles.subviewL}>
                    Last edited By : {item.edit}
                  </Text>

                  <View style={Styles.equip}>
                    <Pressable style={Styles.buttonPI}>
                      <Text style={Styles.buttontext}>View Details</Text>
                    </Pressable>

                    <Pressable style={Styles.recordbtn}>
                      <Text style={Styles.buttontext}>Record Upkeep</Text>
                    </Pressable>

                    <Pressable style={Styles.checkin}>
                      <Text style={Styles.buttontext}>Checkin</Text>
                    </Pressable>

                    <Pressable style={Styles.checkout}>
                      <Text style={Styles.buttontext}>Checkout</Text>
                    </Pressable>
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
