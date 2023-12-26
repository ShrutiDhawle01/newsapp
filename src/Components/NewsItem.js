import React, { Component } from 'react'

// export class NewsItem extends Component {
//   render() {
//     let {title, description, imageUrl, newsUrl } = this.props;
//     return (
//       <div className='my-3'>
//         <div className="card my-4" style={{width:"19rem"}}>
//             <img src={imageUrl} className="card-img-top" alt="..."/>
//             <div className="card-body">
//                 <h5 className="card-title m-lg-2">{title}...</h5>
//                 <p className="card-text m-lg-2">{description}...</p>
//                 <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary m-lg-2"  rel="noreferrer">Read More</a>
//             </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default NewsItem





export class NewsItem extends Component {
    render() {
      let {title, description, imageUrl, newsUrl, author, date, source } = this.props;
      return (
        <div className='my-3'>
          {/* <div className="card my-4" style={{width:"19rem"}}> */}
          <div className="card">
            <div style={{
                display:'flex',
                justifyContent : 'flex-end',
                position : 'absolute',
                right : 0
            }}>
                <span className="badge rounded-pill bg-danger" style={{left:"90%", zIndex:"1"}}>
                    {source}
                </span>
            </div>
            <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2023/04/15/1600x900/Image_5_1667957538184_1681570667702_1681570667702.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title m-lg-2">{title}</h5>
                <p className="card-text m-lg-2">{description}</p>
                <p className="card-text">
                    <small className="text-muted">By {!author? "Unknown":author} on {new Date(date).toGMTString()}</small>
                </p>
                  <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark btn-primary m-lg-2"  rel="noreferrer">Read More</a>
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default NewsItem