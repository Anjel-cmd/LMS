import React, { useContext,useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/student/Loading';
import { assets } from '../../assets/assets';


const CourseDetails = () => {

  const {id} = useParams();

  const [courseData, setCourseData] = useState(null);

  const {allCourses, calculateRating,calculateNoOfLectures, calculateCourseDuration, calculateChapterTime } = useContext(AppContext);

  const fetchCourseData = async () => {
   const findCourse = allCourses.find(course => course._id === id)
   setCourseData(findCourse);
  }

  useEffect(() => {
    fetchCourseData();
  },[])


  return courseData ? (
    <>
    <div className='min-h-screen bg-gradient-to-b from-cyan-50 to-white'>

      <div className='pt-20 pb-20 pl-8 md:pl-6 lg:pl-40 pr-8 md:pr-32'>
      

      {/* left column */}
        <div className='max-w-xl z-10 text00gray-500'>
          <h1 className='text-3xl md:text-3xl font-bold text-gray-800'>{courseData.courseTitle}</h1>
          <p className='pt-5 md:text-base text-sm' dangerouslySetInnerHTML={{__html: courseData.courseDescription.slice(0,200)}}></p>

        {/*review and ratings */}
        <div className='flex items-center space-x-2 pt-3 pb-1 text-sm'>
                  <p>{calculateRating(courseData)}</p>
                  <div className='flex'>
                    {[...Array(5)].map((_, i) => (<img key={i} src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} alt='' className='w-3.5 h-3.5' />) )}
                  </div>
                  <p className='text-blue-600'>({courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? 'ratings' : 'rating' })</p>

                  <p className='text-gray-500'>{courseData.enrolledStudents.length} {courseData.enrolledStudents.length > 1 ? 'students' : 'student' }</p>
                </div>

                <p className='text-sm'>Course by <span className='text-blue-600 underline'>GreatStack</span></p>

                <div className='pt-8 text-gray-800'>
                    <h2 className='text-xl font-semibold'>Course Structure</h2>

                    <div>
                      {courseData.courseContent.map((chapter, index)=> (
                        <div key={index}>
                          <div>
                            <div>
                              <img src={assets.down_arrow_icon} alt="arrow icon" />
                              <p>{chapter.chapterTitle}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                </div>

        </div>
      
      {/* right column */}
        <div></div>

    </div>
    </div>
    </>
  ) : <Loading />;
}

export default CourseDetails
