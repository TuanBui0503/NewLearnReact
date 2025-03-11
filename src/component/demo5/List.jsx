// học render ra 1 list

export default function List () {
   const fruits = [
    {id: 1, name : "Chuối", prices: 10},
    {id: 2, name :"Khế", prices: 60},
    {id: 3, name :"Mít", prices: 30},
    {id: 4, name :"Dưa", prices: 135},
    {id: 5, name :"Chanh", prices: 220},
    {id: 6, name :"Tắc", prices: 79},
    {id: 7, name :"Dâu", prices: 158},
]
const filterFruits = fruits.filter(fruit => fruit.prices < 100)
   const listItem = filterFruits.map(fruits => 
   <li key={fruits.id}>
    {fruits.name}: &nbsp;
     {fruits.prices}
   </li>)
   return (
    <>
        <hr />
        <h3>demo5</h3>
        <ol>{listItem}</ol>
    </>
)
}



