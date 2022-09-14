import React from 'react';
import ReactDOM from 'react-dom';
// import imagers from './images/us.jpeg';
import icon from './images/us.png';
import './index.css'

function BookList () {
  return <div>
    <header>
      <PageTitle />
      <PageDescription />
    </header>
    <section className='booklist'>
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />

   
    {/* <MoreInfo /> */}

  </section>
  </div>
}

const Book = () => {
  return <article className='book'>
    <Icon />
    <Image />
    <Title />
    <Author />
    <Description />
    <MoreInfo />
  </article>
}

const PageTitle = () => {
  return <h1 className='page-title'>Bestseller List</h1>
}

const PageDescription = () => {
  return <p className='page-description'>  Download top sellers | Read top sellers today.  Start a new series today!
  </p>
}

const MoreInfo = () => {
  return <button className='more-info'><a href="http://www.drinksunice.com">More Info</a></button>
}




const Icon = () => {
  return <img src={icon} className='icon' alt='' />
}

const Image = () => {
  return <img src='https://d3m2o2bzrl719s.cloudfront.net/photos/2014/06_June14/04/The_Daily_Celebrates_their_Season_premiere_Issue_with_Cover_Star_Gigi_Hadid/Selected/gallery_63537534186318750012947352_6_DAIL_20140604_PM_131.JPG' className='image' alt='' />
}

const Title = () => {
  return <h1 className='title'>The Pampelonne Years</h1>
}

const Author = () => {
  return <h2><a href="http://www.enjoypampelonne.com" className='author'>Erik Grossberg & Lani Crescenzi</a></h2>
}

const Description = () => {
  return <p>This is a story all about how my life got flipped turned upside down</p>
}



ReactDOM.render(<BookList />, document.getElementById('root'))


































// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css'
// import image from './images/us.jpeg';

// function BookList () {
//   return <section className='booklist'>
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//     <Book />
//   </section>
// };

// const Book = () => {
//   return <section className='book'>
//     <Image></Image>
//     <Title />
//     <Author />
//     <Description />
//   </section>
// }

// const Title = () => {
//   return <h1 className='title'>The Pampelonne Days</h1>
// }

// const Image = () => {
//   return <img src={image} alt='' className='image' />
// }


// const Author = () => {
//   return <h3><a href='http://www.google.com' className='author'>Erik Grossberg and Lani Crescenzi</a></h3>
// }

// const Description = () => {
//   return <p className='description'>This is a story all about how my life got flipped turned upside down</p>
// }

// ReactDOM.render(<BookList />, document.getElementById('root'))
