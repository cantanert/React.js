
app.js file:

```Javascript
import React from 'react';
import ReactDOM from 'react-dom';

const owl = {
  title: 'Excellent Owl',
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
};

class Owl extends React.Component{
  render() {
    return (
    	<div>
            <h1>{owl.title}</h1>
            <img src={owl.src} alt={owl.title}/>
       </div>
    ); 
  }
};

ReactDOM.render( <Owl/>,  document.getElementById('app'));

```

index.html file:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="./styles.css">
	<title>Learn ReactJS</title>
</head>

<body>
  <main id="app">
  </main>
	<script src="https://s3.amazonaws.com/codecademy-content/courses/React/react-course-bundle.min.js"></script>
  <script src="/app.compiled.js"></script>
</body>

</html>
```

 APP ID'li html alanını app.js dosyası ile manipule edip, dinamik olarak değiştiriyoruz. Burda owl adında bir const
 tanımlayıp title ve src attributeleri veriyoruz. daha sonra owl adında bir component tanımlayıp, bu verileri ön planda 
 nasıl kullanmak istiyorsak ona göre design ediyoruz.

 
