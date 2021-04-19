import Card from './CardPage';

const obj = [['https://picsum.photos/200/150', 'Title of the topic', 'Some text here. Kinda explanation or short description']];

function Main({onRouteChange}) {
    return obj.map((item) => {
      return <Card img={item[0]} title={item[1]} text={item[2]} onRouteChange={onRouteChange}/> 
    })
}

export default Main;