import React from "react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react"
import Course from "./Course";


const { kakao } = window;
const CourseWrap = styled.ul`display: flex; flex-wrap: wrap; padding: 20px 10px;`
const Map = styled.div`width: 90%; height: 50vh; margin:0 auto;`


const USER = "USER";
let map;
let userMarker;

const mapSetting = (pos) => {
  const locationMap = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(pos.latitude, pos.longitude),
    level: 2,
  };
  map = new kakao.maps.Map(locationMap, options);
  map.setZoomable(false);
}
export const moveMap = ({ latitude, longitude}, mp) => {
  if(mp) {
    const moveLatLon = new kakao.maps.LatLng(latitude, longitude);
    mp.panTo(moveLatLon);
  }
};
const addUserMarker = (pos) => {
  if(userMarker) userMarker.setMap(null);
  userMarker = new kakao.maps.Marker({ map: map, position: new kakao.maps.LatLng(pos.latitude, pos.longitude), });
};


const addMarker = (c) => {
  let imgUrl = "/image/map_not_done.png";
  let imgSize = new kakao.maps.Size(24, 35);

  if (c.visited === "Y") {
    imgUrl = "/image/map_complete.jpg";
    imgSize = new kakao.maps.Size(20, 30);
  }
  new kakao.maps.Marker({
    map: map,
    title: c.name,
    position: new kakao.maps.LatLng(c.latitude, c.longitude),
    image: new kakao.maps.MarkerImage(imgUrl, imgSize),
  });
};


export default function KakaoMap() {
  
  const [myLocation, setMyLocation] = useState({ name: "나의위치", code:"USER", latitude : 0, longitude: 0 })
  const [clickType, setClickType] = useState(USER)
  const [course, setCourse] = useState(null);
  useEffect(() => {
    const url = `${process.env.REACT_APP_BASE_URL}/api/course/info`
    async function getCourseData() {
      const token = localStorage.getItem("token");
      const data  = await (await fetch(url, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      })).json();
      if(data.code === "OK") {
        setCourse(data.course);
      } else {
        // 에러뛰워야함
      }
      
    }
    getCourseData();
  }, [])
  useEffect(() => {
    if(course) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          const latitude = pos.coords.latitude;
          const longitude = pos.coords.longitude;
          mapSetting({ latitude, longitude });
          course.forEach((c) => { addMarker(c) });
        });
        navigator.geolocation.watchPosition((pos) => {
          const m = { name: "나의위치", code: "USER", latitude : pos.coords.latitude, longitude: pos.coords.longitude }
          setMyLocation(m);
        });
      }
    }
    
  },[course])
  useEffect(() => {
    addUserMarker(myLocation);
    if(clickType === USER) moveMap(myLocation, map)
  }, [myLocation, clickType])

  return (
    <>
      <CourseWrap>
      {
        course 
        ? (
          course.map((course) => (
            <Course key={course.code} course={course} clickType={clickType} setClickType={setClickType} map={map} />
          ))
          )
        : null
      }
      <Course course={myLocation} clickType={clickType} setClickType={setClickType} map={map} />
      </CourseWrap>
      <Map id="map"></Map>
    </>
  )
}