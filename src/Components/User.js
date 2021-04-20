import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const User = (props) => {
  let [user, setUser] = useState({})

  useEffect(() => {
    axios.get(`https://api.github.com/users/${props.location.login}`)
    // .then((response) => console.log(response.data))
    .then((response) => {
      setUser(response.data)
      console.log(response)
    })
    .catch((error) => console.log(error.message))
  }, [])

  return(
    <section>
      <div className="container">
        <h3>User Profile</h3>
        <h5><Link to="/"><i className="ion-backspace">Back</i></Link></h5>
        <div className="row" style={{paddingTop: "40px"}}>
          <div className="left" className="col s3">
            <img src={user.avatar_url}
              alt="user_avatar"
              style={{borderRadius: "100%", width: "100%"}}
            />
          </div>
          <div className="left" className="col s9">
            <div classNaem="row">
              <h4 className="left col s9">{user.name}</h4>
              <h5 className="right col s3"><i className="ion-person-stalker">{user.followers}</i></h5>
            </div>
            <div classNaem="row">
              <div className="col s12">
                <h5>{user.bio}</h5>
              </div>
            </div>
            <div classNaem="row">
              <div className="col s12">
                <ul>
                  <li>
                    <a href={user.html_url} target="_blank">
                      <i className="ion-social-github">Github</i>
                    </a>
                  </li>
                  <li>
                    <a href={user.blog} target="_blank">
                      <i className="ion-social-rss">Blog</i>
                    </a>
                  </li>
                  <li>
                    <i className="ion-ios-location">{user.location}</i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default User
