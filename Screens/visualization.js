import * as React from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  Image,
  Platform,
  Flatlist,
} from 'react-native';
import Constants from 'expo-constants';
import Data from '../Data';
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryLabel,
} from 'victory-native';

const data = [
  { season: 'Winter', count: 7 },
  { season: 'Spring', count: 6 },
  { season: 'Summer', count: 6 },
  { season: 'Autumn', count: 9 },
];

export default class Start extends React.Component {
  state = {
    criteria: '',
    shapeData: [],
    textureData: [],
    colorData: [],
  };

  // filter data for which shapes of shrooms are edible
  getShapeSafety = () => {
    let convex = 0;
    let bell = 0;
    let conical = 0;
    let knobbed = 0;
    let flat = 0;
    let sunken = 0;
    let convexT = 0;
    let bellT = 0;
    let conicalT = 0;
    let knobbedT = 0;
    let flatT = 0;
    let sunkenT = 0;

    for (let i = 0; i < Data.length; i++) {
      if (Data[i].shape == 'x') {
        convexT += 1;
        if (Data[i].class == 'e') {
          convex += 1;
        }
      } else if (Data[i].shape == 'b') {
        bellT += 1;
        if (Data[i].class == 'e') {
          bell += 1;
        }
      } else if (Data[i].shape == 'c') {
        conicalT += 1;
        if (Data[i].class == 'e') {
          conical += 1;
        }
      } else if (Data[i].shape == 'k') {
        knobbedT += 1;
        if (Data[i].class == 'e') {
          knobbed += 1;
        }
      } else if (Data[i].shape == 'f') {
        flatT += 1;
        if (Data[i].class == 'e') {
          flat += 1;
        }
      } else {
        sunkenT += 1;
        if (Data[i].class == 'e') {
          sunken += 1;
        }
      }
    }
    // calculate percentages
    convex = Math.floor((convex / convexT) * 100);
    bell = Math.floor((bell / bellT) * 100);
    conical = Math.floor((conical / conicalT) * 100);
    knobbed = Math.floor((knobbed / knobbedT) * 100);
    flat = Math.floor((flat / flatT) * 100);
    sunken = Math.floor((sunken / sunkenT) * 100);

    let dataArray = [
      { shape: 'Convex', percent: convex },
      { shape: 'Bell', percent: bell },
      { shape: 'Conical', percent: conical },
      { shape: 'Knob', percent: knobbed },
      { shape: 'Flat', percent: flat },
      { shape: 'Sunken', percent: sunken },
    ];
    this.setShapeData(dataArray);
  };

  // filter data for which textures of shrooms are edible
  getTextureSafety = () => {
    let smooth = 0;
    let fibrous = 0;
    let grooves = 0;
    let scaly = 0;
    let smoothT = 0;
    let fibrousT = 0;
    let groovesT = 0;
    let scalyT = 0;

    for (let i = 0; i < Data.length; i++) {
      if (Data[i].texture == 'f') {
        fibrousT += 1;
        if (Data[i].class == 'e') {
          fibrous += 1;
        }
      } else if (Data[i].texture == 'g') {
        groovesT += 1;
        if (Data[i].class == 'e') {
          grooves += 1;
        }
      } else if (Data[i].texture == 'y') {
        scalyT += 1;
        if (Data[i].class == 'e') {
          scaly += 1;
        }
      } else {
        smoothT += 1;
        if (Data[i].class == 'e') {
          smooth += 1;
        }
      }
    }

    

    // calculate percentages
    smooth = Math.floor((smooth / smoothT) * 100);
    fibrous = Math.floor((fibrous / fibrousT) * 100);
    grooves = Math.floor((grooves / groovesT) * 100);
    scaly = Math.floor((scaly / scalyT) * 100);

    let dataArray = [
      { texture: 'Smooth', percent: smooth },
      { texture: 'Fibrous', percent: fibrous },
      { texture: 'Grooves', percent: grooves },
      { texture: 'Scaly', percent: scaly },
    ];
   
    this.setTextureData(dataArray);
  };

  // filter data for which colors of shrooms are edible
  getColorSafety = () => {
    let brown = 0;
    let buff = 0;
    let grey = 0;
    let green = 0;
    let pink = 0;
    let white = 0;
    let red = 0;
    let yellow = 0;
    let purple = 0;
    let cinnamon = 0;
    let brownT = 0;
    let buffT = 0;
    let greyT = 0;
    let greenT = 0;
    let pinkT = 0;
    let whiteT = 0;
    let redT = 0;
    let yellowT = 0;
    let purpleT = 0;
    let cinnamonT = 0;

    for (let i = 0; i < Data.length; i++) {
      if (Data[i].color == 'n') {
        brownT += 1;
        if (Data[i].class == 'e') {
          brown += 1;
        }
      } else if (Data[i].color == 'b') {
        buffT += 1;
        if (Data[i].class == 'e') {
          buff += 1;
        }
      } else if (Data[i].color == 'c') {
        cinnamonT += 1;
        if (Data[i].class == 'e') {
          cinnamon += 1;
        }
      } else if (Data[i].color == 'g') {
        greyT += 1;
        if (Data[i].class == 'e') {
          grey += 1;
        }
      } else if (Data[i].color == 'r') {
        greenT += 1;
        if (Data[i].class == 'e') {
          green += 1;
        }
      } else if (Data[i].color == 'p') {
        pinkT += 1;
        if (Data[i].class == 'e') {
          pink += 1;
        }
      } else if (Data[i].color == 'u') {
        purpleT += 1;
        if (Data[i].class == 'e') {
          purple += 1;
        }
      } else if (Data[i].color == 'e') {
        redT += 1;
        if (Data[i].class == 'e') {
          red += 1;
        }
      } else if (Data[i].color == 'y') {
        yellowT += 1;
        if (Data[i].class == 'e') {
          yellow += 1;
        }
      } else {
        whiteT += 1;
        if (Data[i].class == 'e') {
          white += 1;
        }
      }
    }

    // calculate percentages
    brown = Math.floor((brown / brownT) * 100);
    buff = Math.floor((buff / buffT) * 100);
    cinnamon = Math.floor((cinnamon / cinnamonT) * 100);
    grey = Math.floor((grey / greyT) * 100);
    green = Math.floor((green / greenT) * 100);
    pink = Math.floor((pink / pinkT) * 100);
    white = Math.floor((white / whiteT) * 100);
    purple = Math.floor((purple / purpleT) * 100);
    red = Math.floor((red / redT) * 100);
    yellow = Math.floor((yellow / yellowT) * 100);

    let dataArray = [
      { color: 'N', percent: brown, fill: '#6c5135' },
      { color: 'B', percent: buff, fill: '#d9cdbd' },
      { color: 'C', percent: cinnamon, fill: '#b4561f' },
      { color: 'G', percent: grey, fill: '#858585' },
      { color: 'R', percent: green, fill: '#9eb75f' },
      { color: 'P', percent: pink, fill: '#df93a4' },
      { color: 'W', percent: white, fill: '#ffffff' },
      { color: 'U', percent: purple, fill: '#6b3896' },
      { color: 'E', percent: red, fill: '#dc1e19' },
      { color: 'Y', percent: yellow, fill: '#fafc3c' },
    ];
    this.setColorData(dataArray);
  };

  //update criteria that we're sorting by and trigger functions to sort relavant data
  setCriteria = (input) => {
    let criteria = this.state.criteria;
    criteria = input;
    this.setState({ criteria });

    if (input == 'shape') {
      this.getShapeSafety();
    } else if (input == 'texture') {
      this.getTextureSafety();
    } else {
      this.getColorSafety();
    }
  };

  // sets state for the array created in getShapeSafety()
  setShapeData = (input) => {
    let shapeData = this.state.shapeData;
    shapeData = input;
    this.setState({ shapeData });
  };

  // sets state for the array created in getTextureSafety()
  setTextureData = (input) => {
    let textureData = this.state.textureData;
    textureData = input;
    this.setState({ textureData });
  };

  // sets state for the array created in getColorSafety()
  setColorData = (input) => {
    let colorData = this.state.colorData;
    colorData = input;
    this.setState({ colorData });
  };

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.titleBar}>
          <View style={styles.titleBar1}>
            <Image
              style={styles.image1}
              source={require('../assets/marbles.png')}
            />
          </View>
          <View style={styles.titleBar2}>
            <Text style={styles.titleBarText}>WILL THIS SHROOM KILL ME?</Text>
          </View>
        </View>
        <View style={styles.insideCont}>
          <Text style={styles.pageTitle}>
            How do you want to test if your shroom is edible?
          </Text>
          <View style={styles.row}>
            <View style={styles.col}>
              <Pressable
                style={({ pressed }) =>
                  this.state.criteria == 'shape'
                    ? styles.buttonChosen
                    : styles.button
                }
                onPress={() => this.setCriteria('shape')}>
                <Text style={styles.buttonText}>SHAPE</Text>
              </Pressable>
            </View>
            <View style={styles.col}>
              <Pressable
                style={({ pressed }) =>
                  this.state.criteria == 'texture'
                    ? styles.buttonChosen
                    : styles.button
                }
                onPress={() => this.setCriteria('texture')}>
                <Text style={styles.buttonText}>TEXTURE</Text>
              </Pressable>
            </View>
            <View style={styles.col}>
              <Pressable
                style={({ pressed }) =>
                  this.state.criteria == 'color'
                    ? styles.buttonChosen
                    : styles.button
                }
                onPress={() => this.setCriteria('color')}>
                <Text style={styles.buttonText}>COLOR</Text>
              </Pressable>
            </View>
          </View>
          {this.state.criteria == 'shape' ? (
            <View style={styles.dataView}>
              <Image
                style={styles.image2}
                source={require('../assets/shapes.png')}
              />
              <Text style={styles.graphTitle}>
                EDIBILITY PERCENTAGE BY CAP SHAPE:
              </Text>

              <VictoryChart domainPadding={20}>
                <VictoryBar
                  cornerRadius={{ top: ({ datum }) => 9 }}
                  data={this.state.shapeData}
                  x="shape"
                  y="percent"
                  alignment="middle" //middle is default, can do start and end
                  labelComponent={<VictoryLabel dy={-10} dx={0} />} //use dy to move the labels up and down
                  labels={({ datum }) => datum.percent + '%'}
                  style={{
                    data: { fill: '#bd2525' },
                  }}
                />
                <VictoryAxis
                  style={{
                    ticks: { stroke: 'transparent' },
                  }}
                />
              </VictoryChart>
               <Text style={styles.graphCitation}>
                Data From The UCI Machine Learning Repository
              </Text>
            </View>
          ) : this.state.criteria == 'texture' ? (
            <View style={styles.dataView}>
              <Image
                style={styles.image2}
                source={require('../assets/textures.png')}
              />
              <Text style={styles.graphTitle}>
                EDIBILITY PERCENTAGE BY TEXTURE:
              </Text>

              <VictoryChart domainPadding={30}>
                <VictoryBar
                  cornerRadius={{ top: ({ datum }) => 9 }}
                  data={this.state.textureData}
                  x="texture"
                  y="percent"
                  alignment="middle" //middle is default, can do start and end
                  labelComponent={<VictoryLabel dy={-10} dx={0} />} //use dy to move the labels up and down
                  labels={({ datum }) => datum.percent + '%'}
                  style={{
                    data: { fill: '#bd2525' },
                  }}
                />
                <VictoryAxis
                  style={{
                    ticks: { stroke: 'transparent' },
                  }}
                />
              </VictoryChart>
               <Text style={styles.graphCitation}>
                Data From The UCI Machine Learning Repository
              </Text>
            </View>
          ) : this.state.criteria == 'color' ? (
            <View style={styles.dataView}>
              <Image
                style={styles.image2}
                source={require('../assets/colors.png')}
              />
              <Text style={styles.graphTitle}>
                EDIBILITY PERCENTAGE BY COLOR:
              </Text>

              <VictoryChart domainPadding={15}>
                <VictoryBar
                  cornerRadius={{ top: ({ datum }) => 5 }}
                  data={this.state.colorData}
                  x="color"
                  y="percent"
                  fill="fill"
                  alignment="middle" //middle is default, can do start and end
                  labelComponent={<VictoryLabel dy={-10} dx={0} />} //use dy to move the labels up and down
                  labels={({ datum }) => datum.percent + '%'}
                  style={{
                    data: {
                      fill: ({ datum }) => datum.fill,
                    },
                  }}
                />
                <VictoryAxis
                  style={{
                    //axis: {stroke: "transparent"},
                    //ticks: {stroke: "transparent"},
                    tickLabels: { fill: 'transparent' },
                  }}
                />
              </VictoryChart>
              <Text style={styles.graphCitation}>
                Data From The UCI Machine Learning Repository
              </Text>
            </View>
          ) : null}
          <Pressable
            style={({ pressed }) =>
              pressed ? styles.backButtonChosen : styles.backButton
            }
            onPress={() => this.props.goToPage('Home')}>
            <Text style={styles.buttonText}> ← GO HOME </Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F6BED1',
  },
  insideCont: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
    backgroundColor: '#4B112C',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  titleBar1: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'center',
    height: '100%',
  },
  titleBar2: {
    flex: 1,
  },
  image1: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  pageTitle: {
    margin: 5,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4B112C',
  },
  graphTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#bd2525',

    marginBottom: -20,
  },
  graphCitation:{
    fontSize: 9,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#bd2525',

    marginTop: -15,
  },
  sliderText: {
    margin: 2,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#506eb4',
  },
  titleBarText: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    color: 'white',
    letterSpacing: 5,
  },
  col: {
    flexDirection: 'column',
    margin: 5,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#4B112C',
    padding: 15,
    borderRadius: 30,
    justifyContent: 'center',

    alignItems: 'center',
  },
  buttonChosen: {
    backgroundColor: '#200813',
    padding: 15,
    borderRadius: 30,
    justifyContent: 'center',
  },
  backButton: {
    backgroundColor: '#c26485',
    padding: 15,
    borderRadius: 30,
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
  },
  backButtonChosen: {
    backgroundColor: '#8b3754',
    padding: 15,
    borderRadius: 30,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    alignItems: 'bottom',
  },
  image2: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain',
    marginTop: -5,
    marginBottom: -5,
  },
  dataView: {
    flexDirection: 'column',
    width: '100%',
  },
});
