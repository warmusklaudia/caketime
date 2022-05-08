import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Animated, Text, TouchableOpacity, View } from 'react-native'
import Svg, { Ellipse, G, Path, Rect } from 'react-native-svg'
import { styles, typo } from '../styling/caketime'
import { Dimensions } from 'react-native'
import buttons from '../styling/buttons'

export const GetStarted = () => {
  const { navigate } = useNavigation<StackNavigationProp<ParamListBase>>()
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height
  return (
    <View style={styles.containerStart}>
      <View>
        <Svg
          width={windowWidth / 1.25}
          height={windowHeight / 9}
          viewBox="0 0 620 120"
        >
          <G>
            <Path
              d="M867,459.36c-5.19-.93-44-7.81-98.95-14.6-34.52-4.27-68.54-7.67-101.13-10.11-40.73-3-79.32-4.6-114.68-4.6s-73.41,1.55-113,4.6c-31.71,2.44-64.52,5.84-97.51,10.11-29.36,3.8-53.42,7.6-68.45,10.11-14,2.34-22.92,4-25.23,4.48v-116c2-.38,11-2.14,25.41-4.6,15-2.56,39.07-6.42,68.41-10.29,33-4.34,65.76-7.8,97.45-10.28,39.62-3.11,77.62-4.68,113-4.68s73.9,1.57,114.6,4.68c32.57,2.48,66.58,5.94,101.08,10.28,55.59,7,94.69,14.09,99.08,14.9Z"
              transform="translate(-247.54 -313.02)"
              fill="#fff0f4"
            />
            <Path
              d="M552.28,314c-35.33,0-73.32,1.57-112.92,4.67-31.69,2.49-64.46,5.95-97.43,10.29-29.33,3.86-53.38,7.73-68.39,10.28-13.57,2.32-22.4,4-25,4.52v115c3-.58,11.67-2.2,24.65-4.37,15-2.52,39.1-6.32,68.46-10.12,33-4.27,65.82-7.67,97.54-10.11,39.66-3,77.7-4.6,113.09-4.6s74,1.55,114.72,4.6c32.59,2.44,66.63,5.84,101.15,10.11,53.2,6.58,91.32,13.24,98.39,14.5v-115c-6-1.09-44.5-8-98.63-14.81-34.5-4.34-68.5-7.8-101.06-10.29-40.7-3.1-79.25-4.67-114.57-4.67m0-1c155,0,315.26,29.94,315.26,29.94V460s-160.26-29.41-315.26-29.41S247.54,460,247.54,460V343S397.28,313,552.28,313Z"
              transform="translate(-247.54 -313.02)"
              fill="#ee93a9"
            />
          </G>
          <G>
            <Path
              d="M439.93,373.36c4.5-5.3,10.3-17.6,10.3-25.4,0-4-1.5-6.8-5.6-6.8-23.6,0-41.2,28.3-41.2,49.2,0,10.4,4.1,20.1,16.1,20.1,12.6,0,27.7-15.1,31.31-18.5.1-.1.6.4.4.6-4,4-18.71,20-32.71,20-13.3,0-19.6-8.8-19.6-20.4,0-23.2,19.7-52.7,45.91-52.7,6.8,0,9.2,3.1,9.2,7.4,0,6.7-5.6,16.2-10.11,22.2l9.31-9.9a22.51,22.51,0,0,0,3.3-4.4c.6.9,1.7,2.6.7,3.5-2.1,1.8-9.71,8.4-16.71,15.7C440.23,374.06,440,373.76,439.93,373.36Z"
              transform="translate(-247.54 -313.02)"
              fill="#6b1938"
            />
            <Path
              d="M473.23,381.06c-7.6,0-16.6,12.1-16.9,20.2,0,1.2.3,1.7,1,1.7,3.6,0,16.5-17.4,17.6-18.6.3.9,1.5,1.1,1.5,1.8a1.2,1.2,0,0,1-.4.8c-3.4,3.6-6.8,11.9-6.8,14.1,0,.5.2.6.5.6,3.7,0,13.1-9.4,15.7-12.7.1-.2.7.2.5.5-2.3,3.6-14.1,16.1-18.8,16.1-.9,0-1-.6-1-1.1,0-2,1.2-6.6,4.5-12.5,0-.1-.3-.2-.4-.1-2.5,3.4-9.9,13.9-14.3,13.9-2.2,0-3.1-3-3.1-4.7,0-7.4,9.9-21.6,19-21.6a8.62,8.62,0,0,1,5.5,2.1c.1.1-.1.8-.4.6A6.18,6.18,0,0,0,473.23,381.06Z"
              transform="translate(-247.54 -313.02)"
              fill="#6b1938"
            />
            <Path
              d="M525.63,387c.2-.2.6.3.5.5-3.1,4.5-14.2,16.9-20.8,16.9-5.5,0-7-8.7-2.3-11.7,7-2.4,9.9-7,9.9-9.7,0-.8-.4-2.2-1.7-2.2-4.4,0-18.6,23-20,25.5-.1,0-.4,0-.5-.1a63.07,63.07,0,0,1,.1-13.9c2.4-25,26.2-61,35.7-61,2.4,0,3.5,2.6,3.5,4.9,0,18.1-29,44.8-35.6,51.3a92.54,92.54,0,0,0-1.1,11.6c4.9-8.1,14.3-20.5,19.9-20.5a3.31,3.31,0,0,1,3.5,3.3c0,3.2-3.8,8.1-13.1,11.5-1.7.8-2,7.6,2.6,7.6a11.33,11.33,0,0,0,6.3-1.9C516.53,396.66,521.43,392,525.63,387Zm-31-1.1c7.9-8.3,32-32.5,32-48.8,0-2.3-1.1-3.3-2.3-3.3-6.4,0-26,33.2-29.6,52A.1.1,0,0,1,494.63,385.86Z"
              transform="translate(-247.54 -313.02)"
              fill="#6b1938"
            />
            <Path
              d="M555.43,386.46c-2.4,3.8-14.3,16.7-22.2,16.7-4,0-4.9-3.5-4.9-6.6,0-7.1,6.9-19.8,14.4-19.8,1.8,0,4.4.8,4.4,2.4,0,2.7-7.1,6.5-14,9.3a19,19,0,0,0-1.6,6.9c0,2.4.6,5.1,2.9,5.1,6.9,0,18.1-11.1,20.5-14.5C555,385.76,555.63,386.16,555.43,386.46Zm-13.5-8.4c-2.5,0-5.9,4.3-8.1,9,6.3-2.6,10-5.3,10-7.3A1.93,1.93,0,0,0,541.93,378.06Z"
              transform="translate(-247.54 -313.02)"
              fill="#6b1938"
            />
            <Path
              d="M633.53,333.36a50,50,0,0,0-8.7,9c13.4.2,26.9-.3,36.7-2.8-.1.7-1.1,4.3-2,4.7-9.9,1.8-23.7,1.7-36.9,1-11.6,16.3-20.7,40.4-23.2,48.8-1.8,5.6-1.8,10.6-2.2,11.1-.2.3-1.9-.1-3-1.5.2-.6.5-1.2.7-1.9,2.4-9.7,6.4-28.8,8.6-44.1,1.1-7.7-18.2-13.4-23.8-16.7-3.4-2,19,.8,42.9,1.3a73.5,73.5,0,0,1,8.2-9.2Zm-34.7,57.4c4.7-12.9,12-31.4,21.8-45.6-21.9-1.3-41.4-4.3-37.8-3.2,8.8,2.7,26.1,8.2,24.5,15.6C605.13,367.46,601.33,380.46,598.83,390.76Z"
              transform="translate(-247.54 -313.02)"
              fill="#6b1938"
            />
            <Path
              d="M629.73,379.36c.7.9,2.4,1.7,2.4,2.9a1.62,1.62,0,0,1-.4,1c-2.9,3.9-5.2,12.5-5.2,15.6,0,.7.1,1.1.6,1.1,3.7,0,13.3-9.7,15.9-13,.1-.2.7.2.5.5-2.3,3.6-14.3,16.4-19,16.4-1.1,0-1.1-1-1.1-1.6,0-2.1.8-6.2,2.7-12C627.33,386.76,629.53,380.26,629.73,379.36Zm5.2-10.3a1.55,1.55,0,0,1,1.6,1.7,3.08,3.08,0,0,1-2.7,2.8c-1,0-1.5-1-1.5-2A2.63,2.63,0,0,1,634.93,369.06Z"
              transform="translate(-247.54 -313.02)"
              fill="#6b1938"
            />
            <Path
              d="M662.43,407.46a14.17,14.17,0,0,1-.1-7.2c1.1-5.2,4.3-12.8,4.3-15.9,0-.4-.1-1.3-1.1-1.3-5.2,0-14.1,18-16.7,25.2-.1,0-.4,0-.5-.1-.2-2.3-.4-4.6-.4-6.7,0-5.9.3-14.8,7-17.3.2,0,.3.8.1,1a10.15,10.15,0,0,0-3,6.4,87.71,87.71,0,0,0-1,9.4c3.7-8.6,10.3-20.1,16.1-20.1,1.5,0,2.2,1,2.2,2.7,0,5.1-5.2,15.8-4.7,17.1.1.1.1.1.2.1,3.6-8.4,10.1-18.7,15.8-18.7,1.5,0,2.3,1,2.3,2.7,0,4.9-4.8,14.6-4.3,15.9s9.4-6.5,13.6-11.7c.2-.2.6.3.5.5-2.8,4.3-14.8,16.2-17.3,16.2-.5,0-.6-.4-.6-1,0-3.4,5.3-14.9,5.3-19,0-.4-.1-1.4-1.1-1.4-5.5,0-14.8,19-16.1,23.3C662.83,407.66,662.43,407.56,662.43,407.46Z"
              transform="translate(-247.54 -313.02)"
              fill="#6b1938"
            />
            <Path
              d="M722,391.46c-2.4,3.8-14.3,16.7-22.2,16.7-4,0-4.9-3.5-4.9-6.6,0-7.1,6.9-19.8,14.4-19.8,1.8,0,4.4.8,4.4,2.4,0,2.7-7.1,6.5-14,9.3a19,19,0,0,0-1.6,6.9c0,2.4.6,5.1,2.9,5.1,6.9,0,18.1-11.1,20.5-14.5C721.63,390.76,722.23,391.16,722,391.46Zm-13.5-8.4c-2.5,0-5.9,4.3-8.1,9,6.3-2.6,10-5.3,10-7.3A1.93,1.93,0,0,0,708.53,383.06Z"
              transform="translate(-247.54 -313.02)"
              fill="#6b1938"
            />
          </G>
        </Svg>
      </View>
      <View>
        <Svg
          width={windowWidth / 1.5}
          height={windowHeight / 1.75}
          viewBox="0 0 620 900"
        >
          <G
            id="Group_17"
            data-name="Group 17"
            transform="translate(-224.501 -148.817)"
          >
            <G
              id="Group_16"
              data-name="Group 16"
              transform="translate(155.914 101.416)"
            >
              <G id="Group_15" data-name="Group 15" transform="translate(9)">
                <Path
                  id="Path_19"
                  data-name="Path 19"
                  d="M7.349-30.06c3.889-1.921,11.873-6.964,24.536-7.6S52.48-34.275,58-32.612C71.5-20.48,71,259.95,71,259.95l-41.34-.042S-3.088-12.778,7.349-30.06Z"
                  transform="translate(85.624 114.048) rotate(-28)"
                  fill="#c29252"
                />
                <Path
                  id="Intersection_1"
                  data-name="Intersection 1"
                  d="M23.381,73.6C14.873,59.237,8.756,47.84,6.413,41.291V39.6H71.926c6.249,9.675,13.344,21.262,20.906,34Z"
                  transform="translate(72.587 47.401)"
                  fill="#663318"
                />
                <Path
                  id="Intersection_2"
                  data-name="Intersection 2"
                  d="M64.4,138.6c-7.318-11.174-14.409-22.14-20.983-32.5v-.5h68.051c6.189,10.8,12.472,21.923,18.673,33Z"
                  transform="translate(73.587 49.401)"
                  fill="#663318"
                />
                <Path
                  id="Intersection_3"
                  data-name="Intersection 3"
                  d="M62.461,132.6c-6.643-9.142-13.08-18.114-19.048-26.594V105.6h61.773c5.618,8.839,11.322,17.937,16.95,27Z"
                  transform="translate(114.948 113.401)"
                  fill="#663318"
                />
              </G>
              <G id="Group_14" data-name="Group 14" transform="translate(4)">
                <Path
                  id="Path_19-2"
                  data-name="Path 19"
                  d="M7.349-30.06c3.889-1.921,11.873-6.964,24.536-7.6S52.48-34.275,58-32.612C71.5-20.48,71,259.95,71,259.95l-41.34-.042S-3.088-12.778,7.349-30.06Z"
                  transform="translate(85.624 114.048) rotate(-28)"
                  fill="#ddac6a"
                />
                <Path
                  id="Intersection_1-2"
                  data-name="Intersection 1"
                  d="M23.381,73.6C14.873,59.237,8.756,47.84,6.413,41.291V39.6H71.926c6.249,9.675,13.344,21.262,20.906,34Z"
                  transform="translate(72.587 47.401)"
                  fill="#794222"
                />
                <Path
                  id="Intersection_2-2"
                  data-name="Intersection 2"
                  d="M64.4,138.6c-7.318-11.174-14.409-22.14-20.983-32.5v-.5h68.051c6.189,10.8,12.472,21.923,18.673,33Z"
                  transform="translate(73.587 49.401)"
                  fill="#794222"
                />
                <Path
                  id="Intersection_3-2"
                  data-name="Intersection 3"
                  d="M62.461,132.6c-6.643-9.142-13.08-18.114-19.048-26.594V105.6h61.773c5.618,8.839,11.322,17.937,16.95,27Z"
                  transform="translate(114.948 113.401)"
                  fill="#794222"
                />
              </G>
              <G id="Group_13" data-name="Group 13" transform="translate(-4)">
                <Path
                  id="Path_19-3"
                  data-name="Path 19"
                  d="M7.349-30.06c3.889-1.921,11.873-6.964,24.536-7.6S52.48-34.275,58-32.612C71.5-20.48,71,259.95,71,259.95l-41.34-.042S-3.088-12.778,7.349-30.06Z"
                  transform="translate(85.624 114.048) rotate(-28)"
                  fill="#f6c87d"
                />
                <Path
                  id="Intersection_1-3"
                  data-name="Intersection 1"
                  d="M23.381,73.6C14.873,59.237,8.756,47.84,6.413,41.291V39.6H71.926c6.249,9.675,13.344,21.262,20.906,34Z"
                  transform="translate(72.587 47.401)"
                  fill="#8c502f"
                />
                <Path
                  id="Intersection_2-3"
                  data-name="Intersection 2"
                  d="M64.4,138.6c-7.318-11.174-14.409-22.14-20.983-32.5v-.5h68.051c6.189,10.8,12.472,21.923,18.673,33Z"
                  transform="translate(73.587 49.401)"
                  fill="#8c502f"
                />
                <Path
                  id="Intersection_3-3"
                  data-name="Intersection 3"
                  d="M62.461,132.6c-6.643-9.142-13.08-18.114-19.048-26.594V105.6h61.773c5.618,8.839,11.322,17.937,16.95,27Z"
                  transform="translate(114.948 113.401)"
                  fill="#8c502f"
                />
              </G>
              <Path
                id="Path_23"
                data-name="Path 23"
                d="M12.2,0c6.737,0,12.2,33.141,12.2,74.023s-6.03,96.442-10.05,96.451S0,114.905,0,74.023,5.462,0,12.2,0Z"
                transform="translate(101.722 97.574) rotate(-30)"
                fill="rgba(255,255,255,0.3)"
              />
            </G>
            <G id="Group_1" data-name="Group 1">
              <Ellipse
                id="Ellipse_1"
                data-name="Ellipse 1"
                cx="186.5"
                cy="72"
                rx="186.5"
                ry="72"
                transform="translate(354 838)"
                fill="#8ba5a5"
              />
              <Ellipse
                id="Ellipse_2"
                data-name="Ellipse 2"
                cx="165.5"
                cy="67.5"
                rx="165.5"
                ry="67.5"
                transform="translate(354 838)"
                fill="#bcc7c7"
              />
              <Ellipse
                id="Ellipse_3"
                data-name="Ellipse 3"
                cx="144"
                cy="63.5"
                rx="144"
                ry="63.5"
                transform="translate(354 842)"
                fill="#d1eeee"
              />
              <Ellipse
                id="Ellipse_4"
                data-name="Ellipse 4"
                cx="133"
                cy="63.5"
                rx="133"
                ry="63.5"
                transform="translate(376 842)"
                fill="#fff"
              />
              <Ellipse
                id="Ellipse_5"
                data-name="Ellipse 5"
                cx="121"
                cy="63.5"
                rx="121"
                ry="63.5"
                transform="translate(400 842)"
                fill="#d1eeee"
              />
            </G>
            <G id="Group_2" data-name="Group 2" transform="translate(2 -4.97)">
              <Ellipse
                id="Ellipse_6"
                data-name="Ellipse 6"
                cx="93"
                cy="55"
                rx="93"
                ry="55"
                transform="translate(445 787.97)"
                fill="#8ba5a5"
              />
              <Ellipse
                id="Ellipse_7"
                data-name="Ellipse 7"
                cx="86"
                cy="52.5"
                rx="86"
                ry="52.5"
                transform="translate(445 787.97)"
                fill="#bcc7c7"
              />
              <Ellipse
                id="Ellipse_8"
                data-name="Ellipse 8"
                cx="75"
                cy="52.5"
                rx="75"
                ry="52.5"
                transform="translate(445 787.97)"
                fill="#cae4e4"
              />
              <Ellipse
                id="Ellipse_9"
                data-name="Ellipse 9"
                cx="58"
                cy="33"
                rx="58"
                ry="33"
                transform="translate(445 809.97)"
                fill="#e9f0f0"
              />
              <Ellipse
                id="Ellipse_10"
                data-name="Ellipse 10"
                cx="31"
                cy="16"
                rx="31"
                ry="16"
                transform="translate(445 826.97)"
                fill="#fff"
              />
            </G>
            <Path
              id="Path_1"
              data-name="Path 1"
              d="M428.068,158.218c0,219.654-96.489,369.87-214.461,369.87S0,350.023,0,130.369c0-19.485,414.954-28.982,425.166,4.987C425.166,135.356,428.068,150.837,428.068,158.218Z"
              transform="translate(324.966 281.912)"
              fill="#8ba5a5"
            />
            <Path
              id="Path_2"
              data-name="Path 2"
              d="M420.231,157.358c0,215.5-94.723,362.869-210.535,362.869S0,345.533,0,130.036c0-19.116,407.357-28.434,417.382,4.892C417.382,134.929,420.231,150.117,420.231,157.358Z"
              transform="translate(329.884 281.912)"
              fill="#d6dfdf"
            />
            <G
              id="Group_3"
              data-name="Group 3"
              transform="translate(-25 -70.177)"
            >
              <Ellipse
                id="Ellipse_11"
                data-name="Ellipse 11"
                cx="142"
                cy="134"
                rx="142"
                ry="134"
                transform="translate(423 569.177)"
                fill="#ffa8c2"
              />
              <Ellipse
                id="Ellipse_12"
                data-name="Ellipse 12"
                cx="138.5"
                cy="121.5"
                rx="138.5"
                ry="121.5"
                transform="translate(423 569.177)"
                fill="#ffc6d7"
              />
              <Ellipse
                id="Ellipse_13"
                data-name="Ellipse 13"
                cx="101"
                cy="95.5"
                rx="101"
                ry="95.5"
                transform="translate(423 579.177)"
                fill="#ffdae5"
              />
            </G>
            <G
              id="Group_4"
              data-name="Group 4"
              transform="translate(48 -253.177)"
            >
              <Ellipse
                id="Ellipse_11-2"
                data-name="Ellipse 11"
                cx="131.5"
                cy="126.5"
                rx="131.5"
                ry="126.5"
                transform="translate(423 569.177)"
                fill="#b39a82"
              />
              <Ellipse
                id="Ellipse_12-2"
                data-name="Ellipse 12"
                cx="128"
                cy="114"
                rx="128"
                ry="114"
                transform="translate(423 569.177)"
                fill="#c9b39f"
              />
              <Ellipse
                id="Ellipse_13-2"
                data-name="Ellipse 13"
                cx="101"
                cy="95.5"
                rx="101"
                ry="95.5"
                transform="translate(423 579.177)"
                fill="#e1ccb9"
              />
            </G>
            <G
              id="Group_5"
              data-name="Group 5"
              transform="translate(-76 -253.177)"
            >
              <G id="Strawberry" transform="translate(392.664 386.729)">
                <G
                  id="Group_9"
                  data-name="Group 9"
                  transform="translate(-13.335 -15.859)"
                >
                  <G
                    id="Group_6"
                    data-name="Group 6"
                    transform="translate(272.576 84.439)"
                  >
                    <Path
                      id="Polygon_1"
                      data-name="Polygon 1"
                      d="M5.5,0,11,43H0Z"
                      transform="translate(21.416 0)"
                      fill="#7fd38d"
                    />
                    <Path
                      id="Polygon_2"
                      data-name="Polygon 2"
                      d="M5.5,0,11,43H0Z"
                      transform="matrix(0.883, 0.469, -0.469, 0.883, 44.612, 2.935)"
                      fill="#7fd38d"
                    />
                    <Path
                      id="Path_14"
                      data-name="Path 14"
                      d="M4.345,0l6.9,44.86L0,44.533Z"
                      transform="matrix(0.799, 0.602, -0.602, 0.799, 62.325, 30.948)"
                      fill="#7fd38d"
                    />
                    <Path
                      id="Polygon_4"
                      data-name="Polygon 4"
                      d="M5.5,0,11,43H0Z"
                      transform="matrix(0.695, 0.719, -0.719, 0.695, 84.249, 39.171)"
                      fill="#7fd38d"
                    />
                    <Path
                      id="Polygon_5"
                      data-name="Polygon 5"
                      d="M5.5,0,11,43H0Z"
                      transform="translate(94.512 49.063) rotate(59)"
                      fill="#7fd38d"
                    />
                    <Path
                      id="Polygon_6"
                      data-name="Polygon 6"
                      d="M4.751,0,9.5,35.555H0Z"
                      transform="matrix(0.225, 0.974, -0.974, 0.225, 95.169, 62)"
                      fill="#7fd38d"
                    />
                    <Path
                      id="Polygon_7"
                      data-name="Polygon 7"
                      d="M4.751,0,9.5,35.555H0Z"
                      transform="translate(0 10.034) rotate(-22)"
                      fill="#7fd38d"
                    />
                  </G>
                  <G
                    id="Group_10"
                    data-name="Group 10"
                    transform="translate(341.285 60.062) rotate(68)"
                  >
                    <Path
                      id="Polygon_1-2"
                      data-name="Polygon 1"
                      d="M5.5,0,11,43H0Z"
                      transform="translate(67.762 0)"
                      fill="#7fd38d"
                    />
                    <Path
                      id="Polygon_2-2"
                      data-name="Polygon 2"
                      d="M5.5,0,11,43H0Z"
                      transform="matrix(0.883, -0.469, 0.469, 0.883, 45.854, 8.099)"
                      fill="#7fd38d"
                    />
                    <Path
                      id="Path_14-2"
                      data-name="Path 14"
                      d="M4.345,44.86,11.246,0,0,.327Z"
                      transform="matrix(-0.799, 0.602, -0.602, -0.799, 64.85, 66.775)"
                      fill="#7fd38d"
                    />
                    <Path
                      id="Polygon_4-2"
                      data-name="Polygon 4"
                      d="M5.5,0,11,43H0Z"
                      transform="matrix(0.695, -0.719, 0.719, 0.695, 8.287, 47.084)"
                      fill="#7fd38d"
                    />
                    <Path
                      id="Polygon_5-2"
                      data-name="Polygon 5"
                      d="M5.5,0,11,43H0Z"
                      transform="translate(0 58.492) rotate(-59)"
                      fill="#7fd38d"
                    />
                    <Path
                      id="Polygon_6-2"
                      data-name="Polygon 6"
                      d="M4.751,0,9.5,35.555H0Z"
                      transform="translate(2.871 71.258) rotate(-77)"
                      fill="#7fd38d"
                    />
                    <Path
                      id="Polygon_7-2"
                      data-name="Polygon 7"
                      d="M4.751,0,9.5,35.555H0Z"
                      transform="translate(91.368 6.475) rotate(22)"
                      fill="#7fd38d"
                    />
                  </G>
                  <G
                    id="Group_7"
                    data-name="Group 7"
                    transform="translate(281.839 84.439)"
                  >
                    <Path
                      id="Polygon_1-3"
                      data-name="Polygon 1"
                      d="M5.5,0,11,43H0Z"
                      transform="translate(11.129 0)"
                      fill="#3f824a"
                    />
                    <Path
                      id="Path_18"
                      data-name="Path 18"
                      d="M0,0,15.432,61.679,3.167,59.3Z"
                      transform="matrix(0.883, 0.469, -0.469, 0.883, 36.004, 6.39)"
                      fill="#3f824a"
                    />
                    <Path
                      id="Path_14-3"
                      data-name="Path 14"
                      d="M0,0,19.62,61.738,6.137,58.443Z"
                      transform="matrix(0.799, 0.602, -0.602, 0.799, 44.476, 6.128)"
                      fill="#3f824a"
                    />
                    <Path
                      id="Polygon_4-3"
                      data-name="Polygon 4"
                      d="M5.5,0,11,43H0Z"
                      transform="matrix(0.695, 0.719, -0.719, 0.695, 45.508, 32.869)"
                      fill="#3f824a"
                    />
                    <Path
                      id="Polygon_5-3"
                      data-name="Polygon 5"
                      d="M5.5,0,11,43H0Z"
                      transform="translate(55.771 42.761) rotate(59)"
                      fill="#3f824a"
                    />
                    <Path
                      id="Polygon_6-3"
                      data-name="Polygon 6"
                      d="M4.751,0,9.5,35.555H0Z"
                      transform="matrix(0.225, 0.974, -0.974, 0.225, 56.428, 55.698)"
                      fill="#3f824a"
                    />
                    <Path
                      id="Polygon_7-3"
                      data-name="Polygon 7"
                      d="M4.751,0,9.5,35.555H0Z"
                      transform="translate(0 10.034) rotate(-22)"
                      fill="#3f824a"
                    />
                  </G>
                  <G
                    id="Group_11"
                    data-name="Group 11"
                    transform="translate(355.797 94.984) rotate(68)"
                  >
                    <Path
                      id="Polygon_1-4"
                      data-name="Polygon 1"
                      d="M5.5,0,11,43H0Z"
                      transform="translate(38.325 0)"
                      fill="#3f824a"
                    />
                    <Path
                      id="Path_18-2"
                      data-name="Path 18"
                      d="M0,61.679,15.432,0,3.167,2.379Z"
                      transform="matrix(-0.883, 0.469, -0.469, -0.883, 54.389, 60.849)"
                      fill="#3f824a"
                    />
                    <Path
                      id="Path_14-4"
                      data-name="Path 14"
                      d="M0,61.738,19.62,0,6.137,3.295Z"
                      transform="matrix(-0.799, 0.602, -0.602, -0.799, 54.115, 55.434)"
                      fill="#3f824a"
                    />
                    <Path
                      id="Polygon_4-4"
                      data-name="Polygon 4"
                      d="M5.5,0,11,43H0Z"
                      transform="matrix(0.695, -0.719, 0.719, 0.695, 8.287, 40.782)"
                      fill="#3f824a"
                    />
                    <Path
                      id="Polygon_5-4"
                      data-name="Polygon 5"
                      d="M5.5,0,11,43H0Z"
                      transform="translate(0 52.189) rotate(-59)"
                      fill="#3f824a"
                    />
                    <Path
                      id="Polygon_6-4"
                      data-name="Polygon 6"
                      d="M4.751,0,9.5,35.555H0Z"
                      transform="translate(2.871 64.956) rotate(-77)"
                      fill="#3f824a"
                    />
                    <Path
                      id="Polygon_7-4"
                      data-name="Polygon 7"
                      d="M4.751,0,9.5,35.555H0Z"
                      transform="translate(52.627 6.475) rotate(22)"
                      fill="#3f824a"
                    />
                  </G>
                  <G
                    id="Group_8"
                    data-name="Group 8"
                    transform="translate(281.839 114.958)"
                  >
                    <Path
                      id="Polygon_1-5"
                      data-name="Polygon 1"
                      d="M5.5,0,11,43H0Z"
                      transform="translate(8.823 0)"
                      fill="#23562c"
                    />
                    <Path
                      id="Path_17"
                      data-name="Path 17"
                      d="M4.857,0l6.237,44.386L0,44.21Z"
                      transform="matrix(0.883, 0.469, -0.469, 0.883, 26.956, 3.336)"
                      fill="#23562c"
                    />
                    <Path
                      id="Path_14-5"
                      data-name="Path 14"
                      d="M3.567,0l7.845,46.112L0,45.565Z"
                      transform="matrix(0.799, 0.602, -0.602, 0.799, 34.091, 3.188)"
                      fill="#23562c"
                    />
                    <Path
                      id="Polygon_4-5"
                      data-name="Polygon 4"
                      d="M5.5,0,11,43H0Z"
                      transform="matrix(0.695, 0.719, -0.719, 0.695, 31.812, 12.511)"
                      fill="#23562c"
                    />
                    <Path
                      id="Polygon_5-5"
                      data-name="Polygon 5"
                      d="M5.5,0,11,43H0Z"
                      transform="translate(42.075 22.402) rotate(59)"
                      fill="#23562c"
                    />
                    <Path
                      id="Polygon_6-5"
                      data-name="Polygon 6"
                      d="M4.751,0,9.5,35.555H0Z"
                      transform="matrix(0.225, 0.974, -0.974, 0.225, 42.732, 35.34)"
                      fill="#23562c"
                    />
                    <Path
                      id="Polygon_7-5"
                      data-name="Polygon 7"
                      d="M4.751,0,9.5,35.555H0Z"
                      transform="translate(0 10.034) rotate(-22)"
                      fill="#23562c"
                    />
                  </G>
                  <G
                    id="Group_12"
                    data-name="Group 12"
                    transform="translate(298.795 101.958)"
                  >
                    <Path
                      id="Polygon_1-6"
                      data-name="Polygon 1"
                      d="M5.5,0,11,43H0Z"
                      transform="translate(8.823 0)"
                      fill="#23562c"
                    />
                    <Path
                      id="Path_17-2"
                      data-name="Path 17"
                      d="M4.857,0l6.237,44.386L0,44.21Z"
                      transform="matrix(0.883, 0.469, -0.469, 0.883, 26.956, 3.336)"
                      fill="#23562c"
                    />
                    <Path
                      id="Path_14-6"
                      data-name="Path 14"
                      d="M3.567,0l7.845,46.112L0,45.565Z"
                      transform="matrix(0.799, 0.602, -0.602, 0.799, 34.091, 3.188)"
                      fill="#23562c"
                    />
                    <Path
                      id="Polygon_4-6"
                      data-name="Polygon 4"
                      d="M5.5,0,11,43H0Z"
                      transform="matrix(0.695, 0.719, -0.719, 0.695, 31.812, 12.511)"
                      fill="#23562c"
                    />
                    <Path
                      id="Polygon_5-6"
                      data-name="Polygon 5"
                      d="M5.5,0,11,43H0Z"
                      transform="translate(42.075 22.402) rotate(59)"
                      fill="#23562c"
                    />
                    <Path
                      id="Polygon_6-6"
                      data-name="Polygon 6"
                      d="M4.751,0,9.5,35.555H0Z"
                      transform="matrix(0.225, 0.974, -0.974, 0.225, 42.732, 35.34)"
                      fill="#23562c"
                    />
                    <Path
                      id="Polygon_7-6"
                      data-name="Polygon 7"
                      d="M4.751,0,9.5,35.555H0Z"
                      transform="translate(0 10.034) rotate(-22)"
                      fill="#23562c"
                    />
                  </G>
                </G>
                <Path
                  id="Path_11"
                  data-name="Path 11"
                  d="M73,34.214c40.317,0,73,.037,73,42.286S109.325,198.7,73,199.91,0,118.75,0,76.5,32.683,34.214,73,34.214Z"
                  transform="translate(259.65 54.809) rotate(30)"
                  fill="#b41408"
                />
                <Path
                  id="Path_12"
                  data-name="Path 12"
                  d="M67.541,34.214c37.3,0,67.541.034,67.541,39.45s-33.933,114-67.541,115.132S0,113.079,0,73.663,30.239,34.214,67.541,34.214Z"
                  transform="translate(260.919 54.809) rotate(30)"
                  fill="#c31909"
                />
                <Path
                  id="Path_13"
                  data-name="Path 13"
                  d="M61.19,34.214c33.794,0,61.19.029,61.19,33.64s-30.742,97.213-61.19,98.175S0,101.464,0,67.853,27.4,34.214,61.19,34.214Z"
                  transform="translate(260.727 61.919) rotate(30)"
                  fill="#e62409"
                />
                <Path
                  id="Path_16"
                  data-name="Path 16"
                  d="M30.2-3.643C47.043-3.643,61,16.342,61,36.5S48,77.634,31.154,77.634,0,56.658,0,36.5,13.354-3.643,30.2-3.643Z"
                  transform="translate(251.337 105.685) rotate(34)"
                  fill="#f15b4d"
                />
                <Path
                  id="Path_15"
                  data-name="Path 15"
                  d="M16.313-1.346c8.711,0,15.232,8.946,15.232,18.322S24.567,40.484,15.856,40.484,0,26.351,0,16.976,7.6-1.346,16.313-1.346Z"
                  transform="translate(245.991 119.918) rotate(34)"
                  fill="#f4796e"
                />
                <G
                  id="Ellipse_16"
                  data-name="Ellipse 16"
                  transform="translate(260.712 156.103) rotate(30)"
                  fill="#ffd48b"
                  stroke="#5d0802"
                  stroke-width="1"
                >
                  <Ellipse cx="3" cy="4.5" rx="3" ry="4.5" stroke="none" />
                  <Ellipse cx="3" cy="4.5" rx="2.5" ry="4" fill="none" />
                </G>
                <G
                  id="Ellipse_31"
                  data-name="Ellipse 31"
                  transform="translate(263.77 121.103) rotate(30)"
                  fill="#ffd48b"
                  stroke="#5d0802"
                  stroke-width="1"
                >
                  <Ellipse cx="3" cy="4.5" rx="3" ry="4.5" stroke="none" />
                  <Ellipse cx="3" cy="4.5" rx="2.5" ry="4" fill="none" />
                </G>
                <G
                  id="Ellipse_23"
                  data-name="Ellipse 23"
                  transform="translate(319.77 160.308) rotate(30)"
                  fill="#ffd48b"
                  stroke="#5d0802"
                  stroke-width="1"
                >
                  <Ellipse cx="3" cy="4.5" rx="3" ry="4.5" stroke="none" />
                  <Ellipse cx="3" cy="4.5" rx="2.5" ry="4" fill="none" />
                </G>
                <G
                  id="Ellipse_22"
                  data-name="Ellipse 22"
                  transform="translate(286.922 176.499) rotate(30)"
                  fill="#ffd48b"
                  stroke="#5d0802"
                  stroke-width="1"
                >
                  <Ellipse cx="3" cy="4.5" rx="3" ry="4.5" stroke="none" />
                  <Ellipse cx="3" cy="4.5" rx="2.5" ry="4" fill="none" />
                </G>
                <G
                  id="Ellipse_21"
                  data-name="Ellipse 21"
                  transform="translate(249.226 195.945) rotate(30)"
                  fill="#ffd48b"
                  stroke="#5d0802"
                  stroke-width="1"
                >
                  <Ellipse cx="3" cy="4.5" rx="3" ry="4.5" stroke="none" />
                  <Ellipse cx="3" cy="4.5" rx="2.5" ry="4" fill="none" />
                </G>
                <G
                  id="Ellipse_27"
                  data-name="Ellipse 27"
                  transform="translate(226.658 203.548) rotate(30)"
                  fill="#ffd48b"
                  stroke="#5d0802"
                  stroke-width="1"
                >
                  <Ellipse cx="3" cy="4.5" rx="3" ry="4.5" stroke="none" />
                  <Ellipse cx="3" cy="4.5" rx="2.5" ry="4" fill="none" />
                </G>
                <G
                  id="Ellipse_28"
                  data-name="Ellipse 28"
                  transform="translate(258.922 221.343) rotate(30)"
                  fill="#ffd48b"
                  stroke="#5d0802"
                  stroke-width="1"
                >
                  <Ellipse cx="3" cy="4.5" rx="3" ry="4.5" stroke="none" />
                  <Ellipse cx="3" cy="4.5" rx="2.5" ry="4" fill="none" />
                </G>
                <G
                  id="Ellipse_29"
                  data-name="Ellipse 29"
                  transform="translate(312.77 187.294) rotate(30)"
                  fill="#ffd48b"
                  stroke="#5d0802"
                  stroke-width="1"
                >
                  <Ellipse cx="3" cy="4.5" rx="3" ry="4.5" stroke="none" />
                  <Ellipse cx="3" cy="4.5" rx="2.5" ry="4" fill="none" />
                </G>
                <G
                  id="Ellipse_30"
                  data-name="Ellipse 30"
                  transform="translate(281.491 201.343) rotate(30)"
                  fill="#ffd48b"
                  stroke="#5d0802"
                  stroke-width="1"
                >
                  <Ellipse cx="3" cy="4.5" rx="3" ry="4.5" stroke="none" />
                  <Ellipse cx="3" cy="4.5" rx="2.5" ry="4" fill="none" />
                </G>
                <G
                  id="Ellipse_19"
                  data-name="Ellipse 19"
                  transform="translate(236.922 142.812) rotate(30)"
                  fill="#ffd48b"
                  stroke="#5d0802"
                  stroke-width="1"
                >
                  <Ellipse cx="3" cy="4.5" rx="3" ry="4.5" stroke="none" />
                  <Ellipse cx="3" cy="4.5" rx="2.5" ry="4" fill="none" />
                </G>
                <G
                  id="Ellipse_18"
                  data-name="Ellipse 18"
                  transform="translate(226.658 171.102) rotate(30)"
                  fill="#ffd48b"
                  stroke="#5d0802"
                  stroke-width="1"
                >
                  <Ellipse cx="3" cy="4.5" rx="3" ry="4.5" stroke="none" />
                  <Ellipse cx="3" cy="4.5" rx="2.5" ry="4" fill="none" />
                </G>
                <G
                  id="Ellipse_17"
                  data-name="Ellipse 17"
                  transform="translate(291.77 145.309) rotate(30)"
                  fill="#ffd48b"
                  stroke="#5d0802"
                  stroke-width="1"
                >
                  <Ellipse cx="3" cy="4.5" rx="3" ry="4.5" stroke="none" />
                  <Ellipse cx="3" cy="4.5" rx="2.5" ry="4" fill="none" />
                </G>
              </G>
              <Path
                id="Path_7"
                data-name="Path 7"
                d="M117,0c64.617,0,117,53.054,117,118.5S181.617,237,117,237,0,183.946,0,118.5,52.383,0,117,0Z"
                transform="translate(423 569.177)"
                fill="#ffbfa8"
              />
              <Ellipse
                id="Ellipse_12-3"
                data-name="Ellipse 12"
                cx="108"
                cy="102.5"
                rx="108"
                ry="102.5"
                transform="translate(423 569.177)"
                fill="#ffd4c4"
              />
              <Ellipse
                id="Ellipse_13-3"
                data-name="Ellipse 13"
                cx="86.5"
                cy="83"
                rx="86.5"
                ry="83"
                transform="translate(423 579.177)"
                fill="#ffe7df"
              />
            </G>
            <Path
              id="Path_4"
              data-name="Path 4"
              d="M395.922,155.225c0,205.186-89.243,345.507-198.356,345.507S0,334.4,0,129.211c0-18.2,383.792-27.073,393.238,4.658C393.238,133.869,395.922,148.331,395.922,155.225Z"
              transform="translate(338.46 290.779)"
              fill="rgba(255,255,255,0.31)"
            />
            <Path
              id="Path_5"
              data-name="Path 5"
              d="M34.822-8.237s25.406,77.309,41.428,172.21S98.907,371.367,98.907,371.367l1.655,6.057L0,371.367,28.433,192.161Z"
              transform="translate(531.192 772.16) rotate(173)"
              fill="rgba(255,255,255,0.48)"
            />
            <Path
              id="Path_6"
              data-name="Path 6"
              d="M18.445-1.121,162.829-4.6s163.108-1.292,224.98,2.556c4.393.273,8.275.572,12,.92,44.485,4.158,10.513,11.914,10.513,11.914l-16.625.444L8.318,21.537Z"
              transform="translate(321.566 408.366)"
              fill="rgba(188,199,199,0.51)"
            />
          </G>
        </Svg>
      </View>
      <Text style={typo.intro}>Start baking delicious desserts</Text>
      <TouchableOpacity
        style={buttons.buttonGetStarted}
        onPress={() => {
          navigate('Login')
        }}
      >
        <Text style={typo.textButton}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  )
}
