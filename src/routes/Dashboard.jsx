import { useAuth } from "@clerk/clerk-react"
import React, {useState} from 'react'
import Navbar from '../components/DashboardNavbar'
import "./Dashboard.css"
import NewsBox from '../components/NewsBox'
// Currently signed-in User
import { useNavigate } from "react-router-dom"

 
const Dashboard = () => {
  const { userId, isLoaded } = useAuth()
  const navigate = useNavigate()


  const [Option, setOption] = useState('Discover');

  function changeOption(op) {
    setOption(op);
  }

  // console.log(Option)
  console.log('test', userId)

  React.useEffect(() => {
      if (isLoaded && !userId) {
          navigate("/sign-in")
      }
  }, [isLoaded])

  if (!isLoaded) return "Loading..."

  console.log(userId)
  const newsData = [
    {
      logo: 'https://via.placeholder.com/50',
      title: 'News Source 1',
      description: 'This is the description for News Source 1.',
    },
    {
      logo: 'https://via.placeholder.com/50',
      title: 'News Source 2',
      description: 'This is the description for News Source 2.',
    },
    {
      logo: 'https://via.placeholder.com/50',
      title: 'News Source 3',
      description: 'This is the description for News Source 3.',
    },
    {
      logo: 'https://via.placeholder.com/50',
      title: 'News Source 4',
      description: 'This is the description for News Source 4.',
    },
    {
      logo: 'https://via.placeholder.com/50',
      title: 'News Source 5',
      description: 'This is the description for News Source 5.',
    },
    {
      logo: 'https://via.placeholder.com/50',
      title: 'News Source 6',
      description: 'This is the description for News Source 6.',
    },
    {
      logo: 'https://via.placeholder.com/50',
      title: 'News Source 7',
      description: 'This is the description for News Source 7.',
    },
    {
      logo: 'https://via.placeholder.com/50',
      title: 'News Source 8',
      description: 'This is the description for News Source 8.',
    },
    {
      logo: 'https://via.placeholder.com/50',
      title: 'News Source 9',
      description: 'This is the description for News Source 9.',
    },
    {
      logo: 'https://via.placeholder.com/50',
      title: 'News Source 10',
      description: 'This is the description for News Source 10.',
    },
  ];
  return (
    <>
      <div id='dashboard-main'>
        {/* <Navbar /> */}

        <div className="sections">
          <div className="section1">

              <div className='dash-nav' onClick={() => changeOption('Discover')}>Discover</div>
              <div className='dash-nav'onClick={() => changeOption('Inbox')}>Inbox</div>
              <div className='dash-nav'onClick={() => changeOption('Read Later')}>Read Later</div>

          </div>

          <div className="section2">
            
            <div style={{display: Option == "Discover" ? 'block' : 'none'}}>
            {newsData.map((news, index) => (
              <NewsBox
                key={index}
                logo={news.logo}
                title={news.title}
                description={news.description}
              />
            ))}
            </div>
            <div style={{display: Option == "Inbox" ? 'block' : 'none'}}>
              <h1>Inbox</h1>
            </div>

            <div style={{display: Option == "Read Later" ? 'block' : 'none'}}>
              <h1>Read Later</h1>
            </div>

          </div>
        </div>

      </div>
    </>

  )
}

export default Dashboard