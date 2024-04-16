import React from 'react'
import { FacebookProvider, Page } from 'react-facebook';


function FeedFb() {
  return (
    <div>
           <FacebookProvider appId="366819846169347">
        <Page href="https://www.facebook.com/teczacatecasnorte" tabs="timeline" width="350" height="525" />
      </FacebookProvider>


    </div>

  
  )
}

export default FeedFb
