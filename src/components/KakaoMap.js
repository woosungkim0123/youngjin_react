import styled from "@emotion/styled";
import { useEffect, useState } from "react"
import Course from "./Course";



const { kakao } = window;
const CourseWrap = styled.ul`display: flex; flex-wrap: wrap; padding: 20px 10px;`

const Map = styled.div`width: 90%; height: 50vh; margin:0 auto;`




const USER = "USER";
let map;
let userMarker;

const addMarker = (course) => {
  let imgUrl = "/file/map_not_done.png";
  let imgSize = new kakao.maps.Size(24, 35);

  if (course.visited === "Y") {
    imgUrl = "/file/map_complete.jpg";
    imgSize = new kakao.maps.Size(20, 30);
  }
  new kakao.maps.Marker({
    map: map,
    title: course.name,
    position: new kakao.maps.LatLng(course.latitude, course.longitude),
    image: new kakao.maps.MarkerImage(imgUrl, imgSize),
  });
};
export const moveMap = ({ latitude, longitude}, mp) => {
  const moveLatLon = new kakao.maps.LatLng(latitude, longitude);
  console.log('실행')
  mp.panTo(moveLatLon);
  
};
const addUserMarker = (pos) => {
  if(userMarker) userMarker.setMap(null);
  userMarker = new kakao.maps.Marker({ map: map, position: new kakao.maps.LatLng(pos.latitude, pos.longitude), });
};
let data = [
  { 
    name: "영진",
    code: "YUNGJIN",
    latitude: 35.87555082502176,
    longitude: 128.6816374505427,
    visited: "N",
  },
  {
    name: "국밥",
    code: "GUKBOB",
    latitude: 35.87583123506328,
    longitude: 128.6817532073904,
    visited: "N",
  },
  {
    name: "흑돼지",
    code: "JEJUPIG",
    latitude: 35.87664030121222,
    longitude: 128.68155341448463,
    visited: "N",
  },
  {
    name: "지하철",
    code: "SUBWAY2",
    latitude: 35.87623769570281,
    longitude: 128.68104555230227,
    visited: "N",
  },
  { name: "나의위치", code: USER, latitude: 0, longitude: 0 }
];


export default function KakaoMap() {
  const [userLocation, setUserLocation] = useState({latitude : 0, longitude: 0})
  const [clickType, setClickType] = useState(USER)
  const [clickCourse, setClickCourse] = useState({ code : USER});
  const [courses, setCourses] = useState(data);
  console.log(clickCourse)
  
  const mapSetting = (pos) => {
    const locationMap = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(pos.latitude, pos.longitude),
      level: 2,
    };
    map = new kakao.maps.Map(locationMap, options);
    map.setZoomable(false);
    courses.forEach((course) => { addMarker(course) });
  }
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;
        mapSetting({ latitude, longitude });
      });
      
      navigator.geolocation.watchPosition((pos) => {
        const cPosition = { latitude : pos.coords.latitude, longitude: pos.coords.longitude }
        setUserLocation(pos);
        let copyCourses = [...courses];
        const changeCourse = copyCourses.map((c) => (
          c.code === USER ? {...c, latitude: pos.coords.latitude, longitude: pos.coords.longitude } : c
        ))
        setCourses(changeCourse)

        addUserMarker(cPosition);
        if(clickType === USER) moveMap(cPosition, map);
      });
    }
  }, [])
  
  return (
    <>
      <CourseWrap>
      {
        courses.map((course) => (
          <Course key={course.code} course={course} clickCourse={clickCourse} setClickCourse={setClickCourse} setClickType={setClickType} map={map} />
        ))
      }
      </CourseWrap>
      <Map id="map"></Map>

    </>
  )
}