import styled from "@emotion/styled"
import { moveMap } from "./KakaoMap"

const CourseNav = styled.li`position: relative; width: 31%; text-align: center; border: 2px solid; border-radius: 30px; margin: 1%; padding: 1vh 0; font-weight: 500; border-color: rgb(221, 221, 221); background-color: rgb(238, 238, 238); font-family: "Pretendard-Medium";`
const CourseClickNav = styled.li`position: relative; width: 31%; text-align: center; border: 2px solid #758cff; border-radius: 30px; margin: 1%; padding: 1vh 0; font-weight: 500; border-color: rgb(221, 221, 221); background-color: #758cff; font-family: "Pretendard-Medium"; color: #fff;`
const MarkerWrap = styled.div`position: absolute;  width: 60px; height: 30px; right: 0; top: -10px; z-index: 15;`
const MarkerImg = styled.img`width: 100%; height: 100%;`
const MarkerTitle = styled.p`font-weight:bold;`

function CourseDetail({ course }) {
  return (
    <>
      { 
        course.visited === "Y" 
          ? <MarkerWrap><MarkerImg src="/image/complete.png" /></MarkerWrap>
          :  null
      }
      <MarkerTitle>{course.name}</MarkerTitle>
    </>
  )
}

export default function Course({ course, clickType, setClickType, map }) {
  const clickCourseNav = (data) => {
    setClickType(data.code)
    moveMap({latitude: data.latitude, longitude: data.longitude }, map) 
  }
  return (
    <>
      {
        clickType === course.code 
        ? <CourseClickNav><CourseDetail course={course} /></CourseClickNav>
        : <CourseNav onClick={() => {clickCourseNav(course)}}><CourseDetail course={course} /></CourseNav>
      }
    </>
  )
}